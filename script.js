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
    },
                     {
    id: 2,
    date: new Date('2025-10-18T09:00:00'),
    author: "Krishna K Singh",
    title: "Unlocking Your Mind's Potential: Creativity, Problem-Solving, and Growth in the Age of AI",
    categories: ["Self-Improvement", "Productivity", "Mindfulness", "AI"],
    summary: "The human mind is our most powerful asset. It's a universe of ideas, a master problem-solver, and a machine built for perpetual learning. In a world that's constantly changing, this post explores practical techniques to unlock that potential.",
    content: `
        <p>The human mind is our most powerful asset. It's a universe of ideas, a master problem-solver, and a machine built for perpetual learning. In a world that's constantly changing, especially with the rise of artificial intelligence, understanding and honing our innate mental abilities has never been more crucial. How can we sharpen our creativity, become better problem-solvers, and use powerful tools like AI to augment our growth rather than replace our thinking?</p>
        <p>Let's explore some practical techniques to unlock the incredible potential stored within our minds.</p>

        <h2 class="font-bold text-2xl mt-6 text-white">Sparking Your Creative Genius</h2>
        <p>Creativity isn't a magical gift reserved for a select few; it's a skill that can be cultivated. It thrives on new connections and perspectives. Here’s how you can nurture it:</p>
        <ul class="list-disc list-inside my-4 space-y-2">
            <li><strong>Embrace Divergent Thinking:</strong> When faced with a challenge, don't settle for the first solution. Brainstorm as many ideas as possible, no matter how unconventional they seem. This is the essence of divergent thinking—going wide before you go narrow.</li>
            <li><strong>Connect Disparate Ideas:</strong> True innovation often happens at the intersection of different fields. Read books, watch documentaries, or learn about topics completely outside your area of expertise. The new knowledge will create fertile ground for unique connections and ideas.</li>
            <li><strong>Create a "Curiosity" Habit:</strong> Dedicate a small amount of time each day to simply explore something you're curious about. Follow a random link, look up a word you don't know, or watch a tutorial on a new skill. Curiosity is the fuel for a creative mind.</li>
        </ul>

        <h2 class="font-bold text-2xl mt-6 text-white">The Art of Effective Problem-Solving</h2>
        <p>At its core, problem-solving is about breaking down complexity into manageable parts. A structured approach can turn even the most daunting challenges into solvable puzzles.</p>
        <ul class="list-disc list-inside my-4 space-y-2">
            <li><strong>The 5 Whys Technique:</strong> When you encounter a problem, ask "Why?" five times. This simple method, developed by Toyota, helps you drill down past the surface-level symptoms to find the root cause of the issue.</li>
            <li><strong>Work Backwards:</strong> Sometimes the best way forward is to start at the end. Define your desired outcome clearly and then work backward, step-by-step, to figure out what you need to do to get there. This is especially useful for long-term planning and goal setting.</li>
            <li><strong>Reframe the Question:</strong> How you frame a problem dictates the solutions you'll find. If you're stuck, try rephrasing the question. Instead of "How can I afford this?", ask "How can I create the value that this item represents?" This shift can open up entirely new avenues of thought.</li>
        </ul>

        <h2 class="font-bold text-2xl mt-6 text-white">Learning How to Learn</h2>
        <p>The ability to learn something new quickly and effectively is a modern-day superpower. Improving your learning process is about strategy, not just effort.</p>
        <ul class="list-disc list-inside my-4 space-y-2">
            <li><strong>Chunking:</strong> Break down the skill or subject you want to learn into small, manageable "chunks." Master one chunk before moving to the next. This prevents overwhelm and builds a solid foundation of knowledge.</li>
            <li><strong>The Feynman Technique:</strong> Try to explain the concept you're learning to someone else (or even just to yourself) in the simplest terms possible. If you can't explain it simply, you don't understand it well enough yet. This process reveals your knowledge gaps.</li>
            <li><strong>Spaced Repetition:</strong> Our brains retain information better when we review it at increasing intervals over time. Instead of cramming, review new material after a day, then a few days, then a week, and so on.</li>
        </ul>

        <h2 class="font-bold text-2xl mt-6 text-white">Building a Schedule for a Better You</h2>
        <p>A well-designed schedule isn't about rigid control; it's about creating intentional space for what matters.</p>
        <ul class="list-disc list-inside my-4 space-y-2">
            <li><strong>Time Blocking:</strong> Instead of a simple to-do list, block out specific times in your calendar for specific tasks. This includes blocking time for deep work, learning, and even rest.</li>
            <li><strong>The "Two-Minute" Rule:</strong> If a task takes less than two minutes to complete, do it immediately. This prevents small tasks from piling up and creating mental clutter.</li>
            <li><strong>Energy Management, Not Time Management:</strong> Pay attention to your natural energy levels throughout the day. Schedule your most demanding tasks for when you feel most alert and focused, and save lower-energy tasks for other times.</li>
        </ul>

        <h2 class="font-bold text-2xl mt-6 text-white">Partnering with AI for Personal Growth</h2>
        <p>Artificial intelligence is a transformative tool, but its true value lies in how we use it. The goal is to make it a collaborator, not a crutch that lets our own mental muscles atrophy.</p>
        <ul class="list-disc list-inside my-4 space-y-2">
            <li><strong>Use AI as a Brainstorming Partner:</strong> When you're stuck for ideas, ask an AI to generate a list of possibilities. Use its output not as the final answer, but as a starting point to fuel your own creative thinking.</li>
            <li><strong>Let AI Handle the Grunt Work:</strong> Use AI to summarize long documents, organize your notes, or write basic code snippets. This frees up your mental energy for higher-level thinking, problem-solving, and strategy.</li>
            <li><strong>Ask AI to Be Your Tutor:</strong> When learning something new, ask an AI to explain complex topics in different ways, create practice quizzes for you, or demonstrate step-by-step processes. It's a patient, on-demand learning assistant that can adapt to your pace.</li>
        </ul>
        <p>By treating AI as a tool for augmentation, you can offload repetitive tasks and gain new perspectives, all while keeping your own critical thinking and creativity at the forefront.</p>
        <p>The landscape of work and life is changing, but the power of the human mind remains constant. By intentionally cultivating our creativity, refining our problem-solving skills, and strategically embracing new tools, we can not only adapt but thrive.</p>
    `
},
                       {
    "id": 3,
    "date": new Date('2025-10-27T10:30:00'),
    "author": "Krishna K Singh",
    "title": "Unleashing Your Inner Productivity Powerhouse: How AI (Especially GPT) Can Transform Your Workflow (and Study Habits!)",
    "categories": ["AI", "Productivity", "Technology", "Education", "Students"],
    "summary": "Discover how Artificial Intelligence, particularly GPT models, can revolutionize your productivity, streamline tasks, and enhance learning for both professionals and students. Learn to leverage AI responsibly to boost efficiency without over-dependence.",
    "content": `
        <p>In today's fast-paced world, staying productive feels like an Olympic sport. We're constantly juggling tasks, deadlines, and a never-ending stream of information. But what if I told you there's a powerful ally waiting to help you conquer your to-do list and elevate your efficiency? Enter Artificial Intelligence, particularly large language models like GPT.</p>
        <p>Far from being a futuristic fantasy, AI is already revolutionizing how we work, learn, and create. And for students, professionals, and anyone looking to reclaim their time, understanding how to leverage these tools is no longer a luxury – it's a necessity.</p>
        <img src="https://images.pexels.com/photos/9783353/pexels-photo-9783353.jpeg" alt="Person working efficiently with technology" class="rounded-lg my-6 shadow-md w-full">
        <h2 class="font-bold text-2xl mt-6 text-white">Beyond the Hype: Practical Productivity with AI</h2>
        <p>When we talk about AI and productivity, it's easy to conjure images of robots doing our laundry. While that might still be a few years off, the real magic lies in how AI can augment our cognitive abilities and automate repetitive, time-consuming tasks.</p>
        <h3 class="font-semibold text-xl mt-4 text-white">1. Supercharge Your Writing & Communication:</h3>
        <p>This is where GPT models truly shine. Think of them as your personal writing assistant, capable of:</p>
        <ul class="list-disc list-inside my-4 space-y-2">
            <li><strong>Drafting Emails and Letters:</strong> Stuck staring at a blank screen trying to craft that perfect professional email or a polite thank-you note? GPT can generate well-structured, grammatically correct drafts in seconds, freeing you to focus on the core message.</li>
            <li><strong>Content Creation:</strong> Blog posts, social media captions, marketing copy – AI can help you brainstorm ideas, outline content, and even generate full drafts, saving you hours of effort.</li>
            <li><strong>Summarization:</strong> Drowning in research papers or lengthy reports? AI can quickly summarize key points, allowing you to grasp the essence without reading every single word.</li>
            <li><strong>Translation & Grammar Checks:</strong> Need to communicate in another language or ensure your writing is flawless? AI offers instant translation and advanced grammar and spell-checking capabilities.</li>
        </ul>
        <h3 class="font-semibold text-xl mt-4 text-white">2. Data Analysis & Insights at Your Fingertips:</h3>
        <p>AI tools can process vast amounts of data much faster than humans, identifying patterns and extracting valuable insights.</p>
        <ul class="list-disc list-inside my-4 space-y-2">
            <li><strong>Market Research:</strong> Quickly analyze trends, competitor strategies, and customer sentiment from various sources.</li>
            <li><strong>Report Generation:</strong> Automate the creation of data-driven reports, presenting complex information in an understandable format.</li>
        </ul>
        <h3 class="font-semibold text-xl mt-4 text-white">3. Streamlining Administrative Tasks:</h3>
        <p>Many of us spend significant time on mundane administrative duties. AI can help here too:</p>
        <ul class="list-disc list-inside my-4 space-y-2">
            <li><strong>Meeting Agendas & Minutes:</strong> Generate professional agendas and even transcribe and summarize meeting minutes.</li>
            <li><strong>Scheduling:</strong> AI-powered schedulers can find optimal meeting times based on participants' availability.</li>
        </ul>
        <h2 class="font-bold text-2xl mt-6 text-white">AI for Students: A Powerful Learning Companion (Not a Crutch!)</h2>
        <p>Now, let's address the elephant in the room, especially for students: the temptation to "over-depend" on AI for easy tasks. It's true that GPT can whip up an email or a simple letter in a flash. And while this can be a massive time-saver, it's crucial to understand the difference between leveraging AI as a tool and using it as a substitute for learning.</p>
        <p><strong>Here's how students can harness AI responsibly and effectively:</strong></p>
        <ul class="list-disc list-inside my-4 space-y-2">
            <li><strong>Brainstorming Buddy:</strong> Stuck on an essay topic or a project idea? Ask GPT to generate diverse perspectives, creative angles, or relevant examples to get your thoughts flowing.</li>
            <li><strong>Research Assistant:</strong> Use AI to quickly find definitions, explain complex concepts, or even suggest reputable sources for your assignments.</li>
            <li><strong>Study Aid:</strong> Generate practice questions, flashcards, or simplified explanations of challenging material.</li>
            <li><strong>Writing Refinement:</strong> After you've written a draft yourself, use AI to get feedback on clarity, coherence, grammar, and style. Think of it as a sophisticated proofreader.</li>
            <li><strong>Language Learning:</strong> Practice conversational skills, get grammar corrections, or understand nuances in a new language.</li>
            <li><strong>Coding Assistant:</strong> For programming students, AI can help debug code, explain concepts, or even generate snippets for specific functions.</li>
        </ul>
        <p><strong>The Golden Rule for Students:</strong> AI should enhance your learning, not replace it. The goal is to free up your mental energy for critical thinking, problem-solving, and developing your own unique voice – not to outsource your understanding. Always review, verify, and personalize any AI-generated content.</p>
        <h2 class="font-bold text-2xl mt-6 text-white">Getting Started: Practical Steps</h2>
        <ol class="list-decimal list-inside my-4 space-y-2">
            <li><strong>Identify Your Pain Points:</strong> Where do you spend the most time on repetitive tasks? Which aspects of your workflow or study habits could use a boost?</li>
            <li><strong>Explore AI Tools:</strong> Start with readily available tools like ChatGPT or Google Gemini for text-based tasks. Explore specialized AI apps for specific needs (e.g., Grammarly for writing, Notion AI for note-taking).</li>
            <li><strong>Experiment and Learn:</strong> Don't be afraid to play around! The best way to understand AI's capabilities is to try different prompts and observe the results.</li>
            <li><strong>Integrate Smartly:</strong> Start by integrating AI into one or two specific areas where it can make a significant impact. Don't try to overhaul your entire workflow overnight.</li>
            <li><strong>Stay Curious & Adapt:</strong> The AI landscape is constantly evolving. Stay informed about new tools and techniques to continuously optimize your productivity.</li>
        </ol>
        <h2 class="font-bold text-2xl mt-6 text-white">The Future is Now</h2>
        <p>AI isn't coming for our jobs; it's empowering us to do our jobs better, faster, and with more creativity. By embracing tools like GPT models, we can unlock unprecedented levels of productivity, allowing us to focus on what truly matters – whether that's mastering a new skill, delivering groundbreaking projects, or simply having more time for ourselves.</p>
        <p>So, are you ready to transform your productivity and become an AI-powered powerhouse? The tools are at your fingertips.</p>
        <p class="mt-8">---</p>
        <p><strong>What are your thoughts? How are you using AI to boost your productivity? Share your tips, let's connect through LinkedIn!</strong></p>
    `
}
                      
                      
                      ];

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




