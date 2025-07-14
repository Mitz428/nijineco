document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.shopify-faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.shopify-faq-question');
    question.addEventListener('click', function () {
      item.classList.toggle('open');
    });
  });
});
