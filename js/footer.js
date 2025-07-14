document.addEventListener("DOMContentLoaded", function () {
  // フッターのHTMLを読み込む
  fetch('/footer.html') // ← footer.htmlを読み込む
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      // footerタグの中にHTMLを挿入
      document.querySelector('footer').innerHTML = html;
    })
    .catch(e => {
      console.error('フッターの読み込みに失敗しました:', e);
    });
});