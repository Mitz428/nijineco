document.addEventListener("DOMContentLoaded", function () {
  fetch('/header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      document.querySelector('header').innerHTML = html;
      // ハンバーガーメニューの初期化
      initMobileMenu();
    })
    .catch(e => {
      console.error('ヘッダーの読み込みに失敗しました:', e);
    });

  function initMobileMenu() {
    var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    var navMenu = document.querySelector('.nav-menu');
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('open');
        mobileMenuBtn.classList.toggle('active');
      });
      // メニューリンククリックで自動的に閉じる
      navMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          navMenu.classList.remove('open');
          mobileMenuBtn.classList.remove('active');
        });
      });
    }
  }
});