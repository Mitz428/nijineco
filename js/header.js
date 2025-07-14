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
    })
    .catch(e => {
      console.error('ヘッダーの読み込みに失敗しました:', e);
    });
});

// モバイルメニュー（将来的な実装）
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', function () {
    // モバイルメニューの実装
    alert('モバイルメニュー機能は開発中です。');
  });
}