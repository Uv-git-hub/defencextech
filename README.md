Defendxtech Website
AI-Powered Cybersecurity Solutions

Features
✅ FAQ Toggle - Click on any FAQ question to show/hide the answer ✅ AI Chatbot - Interactive chatbot in the bottom-right corner ✅ Contact Form - Form submissions sent to b.pandey@defendxtech.com via EmailJS ✅ Responsive Design - Works on all devices ✅ Animated Network Background - Dynamic particle network animation

EmailJS Configuration
The contact form is configured to send emails using EmailJS. Current setup:

EmailJS Public Key: VyRhlL2B9IHuDr05g
Service ID: service_x5t0hq6
Template ID: template_j8kspag
Recipient Email: b.pandey@defendxtech.com
To Update EmailJS Settings:
Go to EmailJS Dashboard
Create/verify your email service
Create an email template with these variables:
{{from_name}} - Sender's name
{{from_email}} - Sender's email
{{company}} - Company name
{{message}} - Message content
{{to_email}} - Recipient email (b.pandey@defendxtech.com)
Update the IDs in index.html and script.js if needed
Development
# Install dependencies

bun install


# Start dev server

bun run dev


# Build for production

bun run build
Features Implemented
1. FAQ Accordion
Click any FAQ question to expand/collapse the answer
Only one FAQ can be open at a time
Smooth animations
2. Chatbot
Click the chat icon (💬) in the bottom-right corner
AI-powered responses about services, pricing, contact info
Recognizes keywords and provides relevant information
Can help with:
Services information
SOC/SOAR details
Pricing inquiries
Contact information
Demo requests
3. Contact Form
All fields validated
Submit button sends email via EmailJS
Reset button clears the form
Success/error messages displayed
Form resets automatically after successful submission
Browser Support
Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
License
© 2025 Defendxtech — AI Driven