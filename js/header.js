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
      setupMobileMenu();
    })
    .catch(e => {
      console.error('ヘッダーの読み込みに失敗しました:', e);
    });
});