import './styles.css';

// Network Animation
class NetworkAnimation {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId: number | null = null;

  constructor() {
    this.canvas = document.getElementById('networkCanvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.init();
  }

  private init() {
    this.resize();
    this.createParticles();
    this.animate();

    window.addEventListener('resize', () => this.resize());
  }

  private resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private createParticles() {
    const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);

    for (let i = 0; i < particleCount; i++) {
      this.particles.push(new Particle(this.canvas.width, this.canvas.height));
    }
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw particles
    this.particles.forEach(particle => {
      particle.update(this.canvas.width, this.canvas.height);
      particle.draw(this.ctx);
    });

    // Draw connections
    this.drawConnections();

    this.animationId = requestAnimationFrame(this.animate);
  };

  private drawConnections() {
    const maxDistance = 150;

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.5;
          this.ctx.strokeStyle = `rgba(62, 196, 200, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  public destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

class Particle {
  public x: number;
  public y: number;
  private vx: number;
  private vy: number;
  private radius: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
  }

  public update(canvasWidth: number, canvasHeight: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(62, 196, 200, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Navigation
class Navigation {
  private navToggle: HTMLElement;
  private navList: HTMLElement;

  constructor() {
    this.navToggle = document.getElementById('nav-toggle')!;
    this.navList = document.getElementById('nav-list')!;
    this.init();
  }

  private init() {
    this.navToggle?.addEventListener('click', () => this.toggleNav());

    // Close nav when clicking on links
    const navLinks = this.navList?.querySelectorAll('a');
    navLinks?.forEach(link => {
      link.addEventListener('click', () => {
        this.navList.classList.remove('active');
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav') && this.navList?.classList.contains('active')) {
        this.navList.classList.remove('active');
      }
    });
  }

  private toggleNav() {
    this.navList?.classList.toggle('active');
  }
}

// FAQ Accordion
class FAQAccordion {
  private faqItems: NodeListOf<Element>;

  constructor() {
    this.faqItems = document.querySelectorAll('.faq-item');
    this.init();
  }

  private init() {
    this.faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question?.addEventListener('click', () => this.toggleItem(item));
    });
  }

  private toggleItem(item: Element) {
    const isActive = item.classList.contains('active');

    // Close all items
    this.faqItems.forEach(faqItem => {
      faqItem.classList.remove('active');
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  }
}

// Contact Form
class ContactForm {
  private form: HTMLFormElement;
  private status: HTMLElement;

  constructor() {
    this.form = document.getElementById('contactForm') as HTMLFormElement;
    this.status = document.getElementById('status')!;
    this.init();
  }

  private init() {
    this.form?.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();

    // Show loading state
    this.status.textContent = 'Sending...';

    // Simulate form submission
    setTimeout(() => {
      this.status.textContent = 'Thank you! We will get back to you soon.';
      this.form.reset();

      setTimeout(() => {
        this.status.textContent = '';
      }, 5000);
    }, 1000);
  }
}

// Smooth Scroll
class SmoothScroll {
  constructor() {
    this.init();
  }

  private init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
}

// Intersection Observer for animations
class ScrollAnimations {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    this.init();
  }

  private init() {
    const animateElements = document.querySelectorAll(
      '.service-category, .benefit-card, .detailed-benefit, .process-step, .why-card, .industry-card'
    );

    animateElements.forEach(el => {
      this.observer.observe(el);
    });
  }
}

// Footer year
const updateYear = () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
};

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  new NetworkAnimation();
  new Navigation();
  new FAQAccordion();
  new ContactForm();
  new SmoothScroll();
  new ScrollAnimations();
  updateYear();
});

// Typing effect for hero title (optional)
const typingEffect = () => {
  const element = document.getElementById('typed');
  if (!element) return;

  const text = element.textContent || '';
  element.textContent = '';
  let i = 0;

  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  };

  // Start typing after a small delay
  setTimeout(type, 500);
};

// Call typing effect after DOM is loaded
window.addEventListener('load', typingEffect);
