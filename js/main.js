// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// スクロールアニメーション
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ヘッダーのスクロール効果
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = 'none';
  }
});

// ===== カルーセルスライドショー =====
document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.slides-wrapper');
  if (!wrapper) return;
  let slides = Array.from(wrapper.querySelectorAll('img'));
  let slideWidth = slides[0].offsetWidth;
  let position = 0;
  let speed = 1;

  function animate() {
    position -= speed;
    wrapper.style.transform = `translateX(${position}px)`;

    // 先頭画像が完全に左に消えたら末尾に移動
    if (Math.abs(position) >= slideWidth) {
      wrapper.appendChild(wrapper.firstElementChild);
      position += slideWidth;
      wrapper.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(animate);
  }

  // 画像の読み込み完了後に幅を再取得
  window.addEventListener('load', () => {
    slides = Array.from(wrapper.querySelectorAll('img'));
    slideWidth = slides[0].offsetWidth;
    position = 0;
    wrapper.style.transform = `translateX(0px)`;
    animate();
  });
});