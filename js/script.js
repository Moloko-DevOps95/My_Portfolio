document.querySelector('.branding a').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
    });
});

const chatButton = document.getElementById('chat-button');
const chatScreen = document.getElementById('chat-screen');
const closeChat = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const hamberger = document.querySelector('.hamberger');
const mobileNav = document.querySelector('.mobile-nav');
const closeNav = document.querySelector('.times');
const navLinks = document.querySelectorAll('.mobile-nav ul li a');

hamberger.addEventListener('click', () => {
    mobileNav.style.transform = 'translateX(0)';
});

closeNav.addEventListener('click', () => {
    mobileNav.style.transform = 'translateX(-100%)';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.style.transform = 'translateX(-100%)';
    });
});

chatButton.addEventListener('click', function() {
    chatScreen.style.display = 'flex';
    chatButton.style.display = 'none';
    displayWelcomeMessage();
});

closeChat.addEventListener('click', function() {
    chatScreen.style.display = 'none';
    chatButton.style.display = 'flex';
    clearChatMessages();
});

sendButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function displayWelcomeMessage() {
    const welcomeMessageText = "Welcome to Moloko Rakgaole's Q&A Bot. Please ask a question?";
    const welcomeMessageElement = document.createElement('div');
    welcomeMessageElement.classList.add('chat-message', 'bot');
    welcomeMessageElement.innerHTML = `<div class="message"><i class="fas fa-robot"></i> ${welcomeMessageText}</div>`;
    chatMessages.appendChild(welcomeMessageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'user');
        messageElement.innerHTML = `<div class="message">${messageText}</div>`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        chatInput.value = '';

        // Show loading animation
        const loadingMessageElement = document.createElement('div');
        loadingMessageElement.classList.add('chat-message', 'bot');
        loadingMessageElement.innerHTML = `<div class="message loading-dots"></div>`;
        chatMessages.appendChild(loadingMessageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Generate bot response after a short delay
        setTimeout(() => {
            generateBotResponse(messageText, loadingMessageElement);
        }, 1000);
    }
}

async function generateBotResponse(userMessage, loadingMessageElement) {
    let botMessageText;
    const lowerCaseMessage = userMessage.toLowerCase();

    switch (true) {
        case ['hello', 'hi', 'hey', 'howdy', 'hola', 'greetings', 'thobela', 'dumela', 'molweni'].some(greeting => lowerCaseMessage.includes(greeting)):
            botMessageText = '<i class="fas fa-hand-wave"></i> Hello! How can I assist you today?';
            break;
        case lowerCaseMessage.includes('help'):
            botMessageText = '<i class="fas fa-question-circle"></i> Sure, I am here to help. What do you need assistance with?';
            break;
        case lowerCaseMessage.includes('services'):
            botMessageText = '<i class="fas fa-concierge-bell"></i> I offer a variety of services including web development, mobile app development, and DevOps consulting.';
            break;
        case lowerCaseMessage.includes('work'):
            botMessageText = '<i class="fas fa-briefcase"></i> You can view my work by visiting the Work section on this page.';
            break;
        case lowerCaseMessage.includes('skills'):
            botMessageText = '<i class="fas fa-tools"></i> Moloko has skills in HTML, CSS, JavaScript, Java, Spring Boot, MySQL, PostgreSQL, and cloud computing.';
            break;
        case ['contact', 'phone', 'email', 'address'].some(keyword => lowerCaseMessage.includes(keyword)):
            botMessageText = '<i class="fas fa-address-book"></i> You can contact Moloko by phone at +27 68 200 4450, by email at Moloko.Rakgaole@capaciti.org.za, or visit him at 192 Church St, Halfway House, Midrand, 1685.';
            break;
        case ['experience', 'work experience', 'professional experience'].some(keyword => lowerCaseMessage.includes(keyword)):
            botMessageText = '<i class="fas fa-briefcase"></i> Moloko has over 2 years of experience in Software development and DevOps.';
            break;
        case ['education', 'qualifications', 'qualification'].some(keyword => lowerCaseMessage.includes(keyword)):
            botMessageText = '<i class="fas fa-graduation-cap"></i> I have a National Diploma In Information Technology(Software Development) from Tshwane University of Technology and A certificate in Core Computer Skills From Avuxeni Computer Academy.';
            break;
        case lowerCaseMessage.includes('projects'):
            botMessageText = '<i class="fas fa-project-diagram"></i> I have worked on various projects including e-commerce websites, mobile apps, and cloud infrastructure setups.';
            break;
        case ['hobbies', 'interests'].some(keyword => lowerCaseMessage.includes(keyword)):
            botMessageText = '<i class="fas fa-futbol"></i> In my free time, I enjoy watching soccer, reading tech blogs, and playing pool table.';
            break;
        case lowerCaseMessage.includes('portfolio'):
            botMessageText = '<i class="fas fa-portfolio"></i> You can view my portfolio at https://github.com/Moloko-DevOps95.';
            break;
        case lowerCaseMessage.includes('resume'):
            botMessageText = '<i class="fas fa-file-alt"></i> You can download my resume from the link provided on the homepage.';
            break;
        case ['location', 'where are you based', 'where are you located', 'where are you from', 'where are you situated', 'where do you stay'].some(keyword => lowerCaseMessage.includes(keyword)):
            botMessageText = '<i class="fas fa-map-marker-alt"></i> I am based in Midrand, South Africa.';
            break;
        case ['languages', 'programming languages'].some(keyword => lowerCaseMessage.includes(keyword)):
            botMessageText = '<i class="fas fa-code"></i> I am proficient in HTML, CSS, JavaScript, Java, and Python.';
            break;
        case lowerCaseMessage.includes('frameworks'):
            botMessageText = '<i class="fas fa-layer-group"></i> I have experience with frameworks such as Spring Boot and Laravel.';
            break;
        case lowerCaseMessage.includes('tools'):
            botMessageText = '<i class="fas fa-wrench"></i> I use tools like Docker, Git, and Jenkins for my DevOps work.';
            break;
        case lowerCaseMessage.includes('name'):
            botMessageText = '<i class="fas fa-user"></i> My name is Moloko Rakgoale.';
            break;
        case lowerCaseMessage.includes('certifications'):
            botMessageText = '<i class="fas fa-certificate"></i> I have certifications in ICDL.';
            break;
        case lowerCaseMessage.includes('achievements'):
            botMessageText = '<i class="fas fa-trophy"></i> I have successfully completed multiple projects in Web & Mobile development';
            break;
        case lowerCaseMessage.includes('philosophy'):
            botMessageText = '<i class="fas fa-lightbulb"></i> I believe in continuous learning and improvement.';
            break;
        case lowerCaseMessage.includes('teamwork'):
            botMessageText = '<i class="fas fa-users"></i> I enjoy working in collaborative team environments.';
            break;
        case lowerCaseMessage.includes('communication'):
            botMessageText = '<i class="fas fa-comments"></i> I have strong communication skills and can effectively convey technical concepts.';
            break;
        case lowerCaseMessage.includes('problem-solving'):
            botMessageText = '<i class="fas fa-puzzle-piece"></i> I excel at solving complex technical problems.';
            break;
        case lowerCaseMessage.includes('innovation'):
            botMessageText = '<i class="fas fa-lightbulb"></i> I am always looking for innovative solutions to improve processes.';
            break;
        case lowerCaseMessage.includes('goals'):
            botMessageText = '<i class="fas fa-bullseye"></i> My goal is to become a leading expert in DevOps engineering.';
            break;
        case lowerCaseMessage.includes('mentorship'):
            botMessageText = '<i class="fas fa-chalkboard-teacher"></i> I am open to mentorship opportunities to help others grow in their careers.';
            break;
        case lowerCaseMessage.includes('community'):
            botMessageText = '<i class="fas fa-users"></i> I actively participate in tech communities and forums.';
            break;
        case lowerCaseMessage.includes('blog'):
            botMessageText = '<i class="fas fa-blog"></i> I write technical blogs on various topics related to DevOps and software development.';
            break;
        case lowerCaseMessage.includes('github'):
            botMessageText = '<i class="fab fa-github"></i> You can find my projects on GitHub at https://github.com/Moloko-DevOps95.';
            break;
        case lowerCaseMessage.includes('linkedin'):
            botMessageText = '<i class="fab fa-linkedin"></i> Connect with me on LinkedIn at https://www.linkedin.com/in/moloko-percy-rakgoale-872955216.';
            break;
        case lowerCaseMessage.includes('twitter'):
            botMessageText = '<i class="fab fa-twitter"></i> Follow me on Twitter for updates and insights.';
            break;
        case lowerCaseMessage.includes('facebook'):
            botMessageText = '<i class="fab fa-facebook"></i> You can find me on Facebook as well.';
            break;
        case lowerCaseMessage.includes('age'):
            botMessageText = '<i class="fas fa-birthday-cake"></i> 29 years old.';
            break;
        case lowerCaseMessage.includes('learning'):
            botMessageText = '<i class="fas fa-book-reader"></i> I am currently learning .NET, C#, PHP, and Laravel.';
            break;
        case lowerCaseMessage.includes('challenges'):
            botMessageText = '<i class="fas fa-mountain"></i> I enjoy taking on new challenges and learning from them.';
            break;
        case lowerCaseMessage.includes('strengths'):
            botMessageText = '<i class="fas fa-dumbbell"></i> My strengths include problem-solving, teamwork, and communication.';
            break;
        case lowerCaseMessage.includes('weaknesses'):
            botMessageText = '<i class="fas fa-flag"></i> I am working on improving my time management skills.';
            break;
        case lowerCaseMessage.includes('values'):
            botMessageText = '<i class="fas fa-heart"></i> I value integrity, hard work, and continuous learning.';
            break;
        case lowerCaseMessage.includes('motivation'):
            botMessageText = '<i class="fas fa-motivation"></i> I am motivated by the desire to create impactful solutions.';
            break;
        case lowerCaseMessage.includes('inspiration'):
            botMessageText = '<i class="fas fa-lightbulb"></i> I am inspired by tech leaders and innovators.';
            break;
        case lowerCaseMessage.includes('books'):
            botMessageText = '<i class="fas fa-book"></i> I enjoy reading books on technology and personal development.';
            break;
        case lowerCaseMessage.includes('podcasts'):
            botMessageText = '<i class="fas fa-podcast"></i> I listen to tech podcasts to stay updated with industry trends.';
            break;
        case lowerCaseMessage.includes('events'):
            botMessageText = '<i class="fas fa-calendar-alt"></i> I attend tech conferences and meetups to network and learn.';
            break;
        case lowerCaseMessage.includes('moloko'):
            botMessageText = '<i class="fas fa-user"></i> Hi, That is me, Moloko Rakgoale.';
            break;
        case lowerCaseMessage.includes('advice'):
            botMessageText = '<i class="fas fa-lightbulb"></i> My advice to aspiring DevOps engineers is to never stop learning.';
            break;
        case lowerCaseMessage.includes('references'):
            botMessageText = '<i class="fas fa-address-book"></i> My References are Thato Ramphore, Tumelo Mokabane, and Sebati Moela.';
            break;
        case lowerCaseMessage.includes('about'):
            botMessageText = '<i class="fas fa-info-circle"></i> As a DevOps Intern, I am a dedicated problem-solver who thrives in the fast-paced world of software engineering and IT Operations. With a passion for creating elegant, efficient solutions to complex problems, I am constantly seeking to improve my skill and learn new technologies. As a collaborative team player and communicator, I work effectively with others to bring projects to fruition, from conception to delivery. I am always eager to learn from experienced colleagues and mentors, and I strive to incorporate best practices and industry standards into my work. With a keen attention to detail and a commitment to excellence, I am excited to embark on a fulfilling career in DevOps engineering.';
            break;
        default:
            botMessageText = await fetchGoogleGeminiResponse(userMessage);
            break;
    }

    // Replace loading message with actual response
    loadingMessageElement.innerHTML = `<div class="message">${botMessageText}</div>`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function clearChatMessages() {
    chatMessages.innerHTML = '';
}

async function fetchGoogleGeminiResponse(message) {
    const apiKey = 'AIzaSyBPapN-kbYnOlduv3OiYz3CMl8IfOqiOfM'; // Replace with your Google Gemini API key
    try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateText?key=' + apiKey, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: {
                    text: message
                }
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].output.trim();
    } catch (error) {
        console.error('Error fetching Gemini response:', error);
        return 'There was an error processing your request. Please try again later.';
    }
}