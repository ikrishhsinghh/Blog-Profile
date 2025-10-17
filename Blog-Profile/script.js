document.addEventListener('DOMContentLoaded', () => {

    // Exit script if it's not the blog page
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;

    // --- BLOG DATA with Full Content ---
    const blogPosts = [{
        id: 1, date: new Date('2025-10-17T09:00:00'), author: "Krishna K Singh", title: "My First Post: The Journey Begins",
        categories: ["Author's Words", "Self", "Productivity"], summary: "This is the beginning of my blogging journey. I'm excited to share my experiences...",
        content: `
            <p>This is the beginning of my blogging journey. I'm excited to share my experiences and what I've learned with the world. In this post, I'll talk about why I started this blog and what you can expect to see in the future. Stay tuned for more content!</p>
            <p>The decision to start a blog wasn't an overnight one. It was a culmination of countless moments where I discovered something new, solved a tricky problem, or had a perspective I felt was worth sharing. This platform is my digital garden, a place to cultivate ideas and watch them grow.</p>
            <img src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Welcome!" alt="Welcome graphic" class="rounded-lg my-6 shadow-md w-full">
            <h2 class="font-bold text-2xl mt-6 text-white">What to Expect</h2>
            <p>I plan to write about a variety of topics, including:</p>
            <ul class="list-disc list-inside my-4 space-y-2">
                <li>Web Development tutorials (HTML, CSS, JavaScript).</li>
                <li>Thoughts on UI/UX design principles.</li>
                <li>Book reviews and personal growth insights.</li>
                <li>Productivity tips for remote work.</li>
            </ul>
            <p>Thank you for joining me on this adventure. I can't wait to see where it leads.</p>
        `
    }];

    // --- DOM Elements ---
    const searchInput = document.getElementById('search-input');
    const categoryFilters = document.getElementById('category-filters');
    const yearFilter = document.getElementById('year-filter');
    const monthFilter = document.getElementById('month-filter');
    const resetBtn = document.getElementById('reset-filters');
    const noResultsDiv = document.getElementById('no-results');
    
    const postsListView = document.getElementById('posts-list-view');
    const postView = document.getElementById('post-view');
    const singlePostContent = document.getElementById('single-post-content');
    const backToPostsBtn = document.getElementById('back-to-posts');

    let activeCategory = 'All';

    // --- Functions ---
    function populateFilters() {
        const categories = ['All', ...new Set(blogPosts.flatMap(post => post.categories))];
        categoryFilters.innerHTML = categories.map(cat => `
            <button class="category-btn px-3 py-1 text-sm rounded-full border border-gray-600 ${cat === 'All' ? 'active' : ''}" data-category="${cat}">
                ${cat}
            </button>
        `).join('');
        const years = ['All', ...new Set(blogPosts.map(post => post.date.getFullYear()))].sort((a,b) => b-a);
        yearFilter.innerHTML = years.map(year => `<option value="${year}">${year}</option>`).join('');
        const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        monthFilter.innerHTML = months.map((month, index) => `<option value="${month === 'All' ? 'All' : index - 1}">${month}</option>`).join('');
    }

    function renderPostsList(postsToRender) {
        postsContainer.innerHTML = '';
        noResultsDiv.classList.toggle('hidden', postsToRender.length > 0);
        postsToRender.forEach((post, index) => {
            const postElement = document.createElement('article');
            postElement.className = 'bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 fade-in-up';
            postElement.style.animationDelay = `${index * 100}ms`;
            const postDate = post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            const categoriesHTML = post.categories.map(cat => `<span class="bg-blue-900/50 text-blue-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">${cat}</span>`).join('');
            postElement.innerHTML = `
                <div class="flex justify-between items-center mb-2 text-sm text-gray-400"><p>${postDate}</p></div>
                <h3 class="text-xl font-bold mb-3 text-white">${post.title}</h3>
                <div class="mb-3">${categoriesHTML}</div>
                <p class="text-gray-400 leading-relaxed mb-4">${post.summary}</p>
                <a href="#" class="read-more-link font-semibold text-blue-400 hover:underline" data-post-id="${post.id}">Read Full Article &rarr;</a>
            `;
            postsContainer.appendChild(postElement);
        });
    }
    
    function renderSinglePost(postId) {
        const post = blogPosts.find(p => p.id === postId);
        if (!post) return;
        const postDate = post.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const categoriesHTML = post.categories.map(cat => `<span class="bg-blue-900/50 text-blue-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">${cat}</span>`).join('');
        document.title = `${post.title} | Krishna K Singh`;
        singlePostContent.innerHTML = `
            <div class="mb-4">${categoriesHTML}</div>
            <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-2">${post.title}</h1>
            <p class="text-gray-400 mb-6">By ${post.author} on ${postDate}</p>
            <div class="prose prose-lg max-w-none leading-relaxed text-gray-300">${post.content}</div>
        `;
    }

    function switchView(viewToShow) {
        if (viewToShow === 'post') {
            postsListView.classList.add('hidden');
            postView.classList.remove('hidden');
        } else {
            postView.classList.add('hidden');
            postsListView.classList.remove('hidden');
        }
        window.scrollTo(0, 0);
    }

    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedYear = yearFilter.value;
        const selectedMonth = monthFilter.value;
        const filteredPosts = blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm) || post.summary.toLowerCase().includes(searchTerm);
            const matchesCategory = activeCategory === 'All' || post.categories.includes(activeCategory);
            const matchesYear = selectedYear === 'All' || post.date.getFullYear() == selectedYear;
            const matchesMonth = selectedMonth === 'All' || post.date.getMonth() == selectedMonth;
            return matchesSearch && matchesCategory && matchesYear && matchesMonth;
        });
        renderPostsList(filteredPosts);
    }
    
    function resetAllFilters() {
        searchInput.value = '';
        yearFilter.value = 'All';
        monthFilter.value = 'All';
        activeCategory = 'All';
        document.querySelector('.category-btn.active').classList.remove('active');
        document.querySelector('.category-btn[data-category="All"]').classList.add('active');
        applyFilters();
    }

    // --- Event Listeners ---
    [searchInput, yearFilter, monthFilter].forEach(el => el.addEventListener('input', applyFilters));
    resetBtn.addEventListener('click', resetAllFilters);

    categoryFilters.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelector('.category-btn.active').classList.remove('active');
            e.target.classList.add('active');
            activeCategory = e.target.dataset.category;
            applyFilters();
        }
    });

    postsContainer.addEventListener('click', e => {
        if (e.target.classList.contains('read-more-link')) {
            e.preventDefault();
            const postId = parseInt(e.target.dataset.postId);
            renderSinglePost(postId);
            switchView('post');
        }
    });

    backToPostsBtn.addEventListener('click', e => {
        e.preventDefault();
        switchView('list');
    });
    
    // --- Initial Load ---
    populateFilters();
    blogPosts.sort((a, b) => b.date - a.date); // Sort by newest first
    renderPostsList(blogPosts);
});

