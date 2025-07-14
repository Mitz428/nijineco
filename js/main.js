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

// フォーム送信処理
var contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('お問い合わせありがとうございます。後日担当者よりご連絡いたします。');
    this.reset();
  });
}

// モバイルメニュー（将来的な実装）
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', function () {
    alert('モバイルメニュー機能は開発中です。');
  });
}

// スライドショー
(function() {
  var slideshow = document.getElementById('slideshow');
  if (!slideshow) return;
  var wrapper = slideshow.querySelector('.slides-wrapper');
  var slides = wrapper.querySelectorAll('img');
  var slideWidth = 800;
  var total = slides.length;
  var current = 1; // 1枚目（クローンを考慮）

  // 初期位置
  wrapper.style.transform = 'translateX(' + (-slideWidth * current) + 'px)';

  function showSlide(index, animate = true) {
    if (!animate) {
      wrapper.style.transition = 'none';
    } else {
      wrapper.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
    }
    wrapper.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
    if (!animate) {
      // 強制再描画
      void wrapper.offsetWidth;
      wrapper.style.transition = 'transform 0.7s cubic-bezier(.77,0,.18,1)';
    }
  }

  function nextSlide() {
    current++;
    showSlide(current);
    if (current === total - 1) {
      setTimeout(function() {
        current = 1;
        showSlide(current, false);
      }, 700);
    }
  }

  setInterval(nextSlide, 3000);
})();