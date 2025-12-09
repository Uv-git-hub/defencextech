// Chatbot functionality for Defendxtech
class DefendxtechChatbot {
  constructor() {
    this.isOpen = false;
    this.responses = {
      greetings: [
        "Hello! Welcome to Defendxtech. How can I help you with your cybersecurity needs today?",
        "Hi there! I'm here to assist you with any questions about our cybersecurity services.",
        "Welcome! How may I help you secure your business today?"
      ],
      services: "We offer comprehensive cybersecurity solutions including:\n\n• Managed Services (SOC, SOAR, Device Management)\n• Professional Services (Technology Consulting, Strategic Advisory)\n• Assessment Services (Penetration Testing, Vulnerability Assessment)\n• Expertise (SOAR as a service, Hybrid SOC Management)\n\nWhich service would you like to know more about?",
      soc: "Our Security Operations Center (SOC) provides 24/7 monitoring and incident response. We offer real-time threat hunting with an average detection time of just 0.3 seconds and 99.99% uptime. Would you like to schedule a consultation?",
      soar: "Our SOAR (Security Orchestration, Automation & Response) service provides AI-driven automation for faster threat response. We can help reduce manual security tasks and improve your security team's efficiency. Interested in learning more?",
      pricing: "Our pricing is customized based on your specific needs and infrastructure. I'd be happy to connect you with our sales team for a detailed quote. Would you like to schedule a call?",
      contact: "You can reach us at:\n\n📍 423, Naroda Business Point, Naroda, Ahmedabad, India - 382330\n📧 b.pandey@defendxtech.com\n\nWould you like to fill out our contact form for a callback?",
      industries: "We serve multiple industries including:\n\n• Manufacturing\n• Education\n• Government\n• Healthcare\n• Finance\n• Retail\n\nEach industry has unique security requirements, and we tailor our solutions accordingly.",
      demo: "I'd be happy to arrange a demo for you! Please fill out our contact form with your details, and our team will reach out to schedule a personalized demonstration of our platform.",
      default: "I'd be happy to help! I can provide information about:\n\n• Our Services\n• SOC & SOAR Solutions\n• Industries we serve\n• Scheduling a demo\n• Contact information\n\nWhat would you like to know more about?"
    };

    this.init();
  }

  init() {
    this.createChatbotHTML();
    this.attachEventListeners();
    this.addInitialMessage();
  }

  createChatbotHTML() {
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    chatbotContainer.innerHTML = `
      <button id="chatbot-toggle" aria-label="Open chat">
        💬
      </button>
      <div id="chatbot-window">
        <div class="chatbot-header">
          <span>Defendxtech Assistant</span>
          <button class="chatbot-close" aria-label="Close chat">×</button>
        </div>
        <div class="chatbot-messages" id="chatbot-messages"></div>
        <div class="chatbot-input-container">
          <input
            type="text"
            class="chatbot-input"
            id="chatbot-input"
            placeholder="Type your message..."
            autocomplete="off"
          />
          <button class="chatbot-send" id="chatbot-send">Send</button>
        </div>
      </div>
    `;

    document.body.appendChild(chatbotContainer);
  }

  attachEventListeners() {
    const toggleBtn = document.getElementById('chatbot-toggle');
    const closeBtn = document.querySelector('.chatbot-close');
    const sendBtn = document.getElementById('chatbot-send');
    const input = document.getElementById('chatbot-input');

    toggleBtn.addEventListener('click', () => this.toggleChat());
    closeBtn.addEventListener('click', () => this.toggleChat());
    sendBtn.addEventListener('click', () => this.sendMessage());

    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    const window = document.getElementById('chatbot-window');
    const toggleBtn = document.getElementById('chatbot-toggle');

    if (this.isOpen) {
      window.classList.add('active');
      toggleBtn.textContent = '×';
      toggleBtn.style.fontSize = '2rem';
    } else {
      window.classList.remove('active');
      toggleBtn.textContent = '💬';
      toggleBtn.style.fontSize = '1.5rem';
    }
  }

  addInitialMessage() {
    setTimeout(() => {
      const greeting = this.responses.greetings[Math.floor(Math.random() * this.responses.greetings.length)];
      this.addMessage(greeting, 'bot');
    }, 500);
  }

  sendMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();

    if (message === '') return;

    this.addMessage(message, 'user');
    input.value = '';

    setTimeout(() => {
      const response = this.generateResponse(message);
      this.addMessage(response, 'bot');
    }, 500);
  }

  addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}`;
    messageDiv.textContent = text;

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  generateResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Greetings
    if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
      return this.responses.greetings[Math.floor(Math.random() * this.responses.greetings.length)];
    }

    // Services
    if (lowerMessage.match(/\b(service|services|what do you offer|solutions)\b/)) {
      return this.responses.services;
    }

    // SOC
    if (lowerMessage.match(/\b(soc|security operations center|monitoring)\b/)) {
      return this.responses.soc;
    }

    // SOAR
    if (lowerMessage.match(/\b(soar|automation|orchestration)\b/)) {
      return this.responses.soar;
    }

    // Pricing
    if (lowerMessage.match(/\b(price|pricing|cost|how much)\b/)) {
      return this.responses.pricing;
    }

    // Contact
    if (lowerMessage.match(/\b(contact|reach|email|address|location)\b/)) {
      return this.responses.contact;
    }

    // Industries
    if (lowerMessage.match(/\b(industr|sector|healthcare|finance|manufacturing)\b/)) {
      return this.responses.industries;
    }

    // Demo
    if (lowerMessage.match(/\b(demo|demonstration|trial|test)\b/)) {
      return this.responses.demo;
    }

    // Thank you
    if (lowerMessage.match(/\b(thank|thanks)\b/)) {
      return "You're welcome! Is there anything else I can help you with today?";
    }

    // Goodbye
    if (lowerMessage.match(/\b(bye|goodbye|see you)\b/)) {
      return "Thank you for contacting Defendxtech! Feel free to reach out anytime. Stay secure!";
    }

    // Default response
    return this.responses.default;
  }
}

// Initialize chatbot when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new DefendxtechChatbot();
  });
} else {
  new DefendxtechChatbot();
}
