document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.studio-faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.studio-faq-question');
    question.addEventListener('click', function() {
      item.classList.toggle('open');
    });
  });
});
