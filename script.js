// --- 1. SLIDER LOGIC ---
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

let currentIndex = 0;
const totalSlides = slides.length;

// Buat Dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

// Fungsi Pindah Slide
function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    
    currentIndex = index;
    
    slider.scrollTo({
        left: slider.clientWidth * currentIndex,
        behavior: 'smooth'
    });
    
    updateActiveSlide();
}

// Update Slide Active & Animasi Fade
function updateActiveSlide() {
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
    
    // Update class active pada slide (untuk memicu animasi fade di CSS)
    slides.forEach((slide, i) => {
        if (i === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Event Listener Tombol
prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

// Deteksi Scroll manual (swipe) untuk update dots
slider.addEventListener('scroll', () => {
    const scrollPos = slider.scrollLeft;
    const slideWidth = slider.clientWidth;
    const newIndex = Math.round(scrollPos / slideWidth);
    
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalSlides) {
        currentIndex = newIndex;
        updateActiveSlide();
    }
});

// Set slide pertama aktif saat load
updateActiveSlide();


// --- 2. FLOATING LOVE ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + 's';
    heart.style.fontSize = (Math.random() * 10 + 10) + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;

    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => { heart.remove(); }, duration * 1000);
}
setInterval(createHeart, 400);


// --- 3. MUSIK ---
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.classList.remove('playing');
        musicBtn.style.background = 'white';
    } else {
        bgMusic.play();
        musicBtn.classList.add('playing');
        musicBtn.style.background = '#ffe4e1';
    }
    isPlaying = !isPlaying;
});

// --- 4. PREVENT ZOOM ---
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);