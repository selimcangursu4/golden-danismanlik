document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header Effect
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Active Link State
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    // If running from root '/' index.html
    const linkPath = link.getAttribute('href');
    if (linkPath === currentLocation || (currentLocation === '/' && linkPath === '/index.html')) {
      link.style.color = 'var(--color-accent)';
    }
  });

  // Hero Lead Form Handler
  const leadForm = document.getElementById('hero-lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('lead-name').value;
      const country = document.getElementById('lead-country').value;
      const visa = document.getElementById('lead-visa').value;
      const phone = document.getElementById('lead-phone').value;
      
      const message = `Merhaba, Golden Visa Danışmanlık.\nÖn değerlendirme talebim var:\n\nAd Soyad: ${name}\nTelefon: ${phone}\nÜlke: ${country}\nVize Türü: ${visa}`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/48731847745?text=${encodedMessage}`, '_blank');
      
      leadForm.reset();
    });
  }

  // Contact Page Form Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const visaSelect = document.getElementById('visaType');
      const visaType = visaSelect.options[visaSelect.selectedIndex].text;
      const userMessage = document.getElementById('message').value;
      
      const message = `Merhaba, Golden Visa Danışmanlık.\nİletişim formundan ulaşıyorum:\n\nAd Soyad: ${name}\nE-posta: ${email}\nTelefon: ${phone}\nİlgilendiğim Vize: ${visaType}\nMesajım: ${userMessage}`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/48731847745?text=${encodedMessage}`, '_blank');
      
      contactForm.reset();
    });
  }

  // Video Slider Mouse Drag to Scroll
  const slider = document.querySelector('.video-slider');
  if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    });
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('mobile-menu');
  const navLinksList = document.querySelector('.nav-links');
  
  if (menuToggle && navLinksList) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinksList.classList.toggle('active');
    });
  }
});
