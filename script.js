// Initialize EmailJS
(function () {
  if (typeof emailjs !== 'undefined') {
    emailjs.init("VyRhlL2B9IHuDr05g");
  }
})();

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------
     TYPING EFFECT
  -------------------------------------------- */
  const words = [
    'We automate incident response through AI-driven optimization.',
  ];

  const typedEl = document.getElementById('typed');
  let widx = 0, cidx = 0, forward = true;

  function tick() {
    const word = words[widx];

    if (forward) {
      cidx++;
      typedEl.textContent = word.slice(0, cidx);
      if (cidx === word.length) {
        forward = false;
        return setTimeout(tick, 1200);
      }
    } else {
      cidx--;
      typedEl.textContent = word.slice(0, cidx);
      if (cidx === 0) {
        forward = true;
        widx = (widx + 1) % words.length;
      }
    }

    setTimeout(tick, forward ? 60 : 28);
  }
  tick();
  function tick() {
    const word = words[widx];
    if (forward) {
      cidx++;
      typedEl.textContent = word.slice(0, cidx);
      if (cidx === word.length) { forward = false; setTimeout(tick, 1200); return; }
    } else {
      cidx--;
      typedEl.textContent = word.slice(0, cidx);
      if (cidx === 0) { forward = true; widx = (widx + 1) % words.length; }
    }
    setTimeout(tick, forward ? 60 : 28);
  }
  tick();
});

// Network Animation Canvas
const canvas = document.getElementById('networkCanvas');
const ctx = canvas?.getContext('2d');

if (canvas && ctx) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 50;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = 2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(78, 208, 248, 0.5)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(78, 208, 248, ${0.2 * (1 - distance / 150)})`;
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const isExpanded = navList.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
  });
}

// FAQ Toggle Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Close all other FAQ items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // Toggle current item
    item.classList.toggle('active');
  });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        if (navList) {
          navList.classList.remove('active');
        }
      }
    }
  });
});

// Contact Form Handling with EmailJS
const contactForm = document.getElementById('contactForm');
const statusMessage = document.getElementById('status');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const companyInput = document.getElementById('company');
    const messageInput = document.getElementById('message');

    // Show loading state
    statusMessage.textContent = 'Sending...';
    statusMessage.style.color = '#4ED0F8';

    // Prepare template parameters
    const templateParams = {
      from_name: nameInput.value,
      from_email: emailInput.value,
      company: companyInput.value || 'Not provided',
      message: messageInput.value,
      to_email: 'b.pandey@defendxtech.com'
    };

    // Send email using EmailJS
    emailjs.send('service_x5t0hq6', 'template_j8kspag', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        statusMessage.textContent = 'Message sent successfully! We will get back to you soon.';
        statusMessage.style.color = '#4ED0F8';

        // Reset form
        contactForm.reset();

        // Clear success message after 5 seconds
        setTimeout(() => {
          statusMessage.textContent = '';
        }, 5000);
      }, function (error) {
        console.log('FAILED...', error);
        statusMessage.textContent = 'Failed to send message. Please try again or email us directly.';
        statusMessage.style.color = '#f5576c';

        // Clear error message after 5 seconds
        setTimeout(() => {
          statusMessage.textContent = '';
        }, 5000);
      });
  });

  // Reset button functionality
  const resetBtn = contactForm.querySelector('.btn.ghost');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      contactForm.reset();
      statusMessage.textContent = '';
    });
  }
}

// Update year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// All sections visible by default - no fade animation issues
