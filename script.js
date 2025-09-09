const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const links = sidebar.querySelectorAll('a');

let isOpen = false;

menuBtn.addEventListener('click', () => {
    if (!isOpen) {
        sidebar.style.width = "250px";
        overlay.classList.add('active');
        links.forEach((link, index) => {
            setTimeout(() => link.classList.add('show'), index * 100);
        });
    } else {
        sidebar.style.width = "0";
        overlay.classList.remove('active');
        links.forEach(link => link.classList.remove('show'));
    }

    menuBtn.querySelector('i').classList.toggle('fa-bars');
    menuBtn.querySelector('i').classList.toggle('fa-times');

    isOpen = !isOpen;
});

closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

function closeSidebar() {
    sidebar.style.width = "0";
    overlay.classList.remove('active');
    links.forEach(link => link.classList.remove('show'));
    menuBtn.querySelector('i').classList.add('fa-bars');
    menuBtn.querySelector('i').classList.remove('fa-times');
    isOpen = false;
}
menuBtn.addEventListener('click', () => {
    if (!isOpen) {
        // Sidebar open
    } else {
        // Sidebar close
    }
    isOpen = !isOpen;
});
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;
const slideInterval = 4000; // 4 seconds

// Create dots
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dots span');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

setInterval(nextSlide, slideInterval);

  // Touch-friendly overlay toggle for mobile devices:
  (function(){
    const cards = document.querySelectorAll('.product-card');

    // For touch devices show overlay on first tap, follow link on second tap
    cards.forEach(card=>{
      const imgArea = card.querySelector('.product-image');
      const overlay = card.querySelector('.overlay-icons');

      let tapped = false;
      imgArea.addEventListener('click', (e)=>{
        // If viewport is small, toggle overlay instead of navigating
        if (window.innerWidth <= 768) {
          if(!overlay.classList.contains('show')) {
            overlay.classList.add('show');
            // hide after 4s if user doesn't interact
            setTimeout(()=> overlay.classList.remove('show'), 4000);
            e.preventDefault();
          } else {
            // second tap -> proceed normally (you might want to open product)
            overlay.classList.remove('show');
          }
        }
      });

      // Hide overlay when tapping outside icons (for small screens)
      document.addEventListener('click', (e)=>{
        if (window.innerWidth <= 768 && overlay.classList.contains('show')) {
          if (!card.contains(e.target)) overlay.classList.remove('show');
        }
      });
    });

    // Optional: make overlay icon buttons actionable (demo)
    document.querySelectorAll('.icon-btn').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        const title = btn.getAttribute('title') || 'action';
        // Demo behavior: alert (replace with real functions)
        alert(title + ' clicked');
      });
    });
  })();