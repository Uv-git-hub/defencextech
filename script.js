// script.js — save in same folder and referenced by index.html
// Handles: typed hero text, mobile nav toggle, contact form demo behavior

document.addEventListener('DOMContentLoaded', () => {
  // Typing effect (non-blocking, accessible)
  const words = [
    'Detect. Defend. Dominate.',
    'AI-driven threat hunting.',
    'Zero-Trust for modern infra.',
    'Defendxtech — live SOC, always on.'
  ];
  const typedEl = document.getElementById('typed');
  let widx = 0, cidx = 0, forward = true;

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

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    if (!expanded) {
      navList.style.display = 'flex';
      navList.style.flexDirection = 'column';
      navList.style.position = 'absolute';
      navList.style.top = '64px';
      navList.style.right = '28px';
      navList.style.background = 'rgba(3,6,20,0.9)';
      navList.style.padding = '12px';
      navList.style.borderRadius = '10px';
      navList.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)';
    } else {
      navList.style.display = '';
      navList.style.position = '';
      navList.style.top = '';
    }
  });

  // Contact form (demo only — no backend)
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic client-side validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      showStatus('Please fill all required fields.', true);
      return;
    }

    showStatus('Submitting…');

    // Simulate async send
    setTimeout(() => {
      // Reset form
      form.reset();
      showStatus('Thanks — your demo request has been received. We will contact you within 24 hours.');
    }, 900);
  });

  document.getElementById('demo-quick').addEventListener('click', () => {
    showStatus('Launching quick demo… (this is a static template).');
    setTimeout(() => showStatus('Demo ready. Check the Live Demos section.'), 900);
  });

  function showStatus(msg, isError=false) {
    formStatus.hidden = false;
    formStatus.textContent = msg;
    formStatus.style.color = isError ? '#ff8a8a' : '';
    // hide after 6s
    clearTimeout(showStatus._t);
    showStatus._t = setTimeout(() => { formStatus.hidden = true; }, 6000);
  }

  // footer year
  document.getElementById('year').textContent = new Date().getFullYear();
});
