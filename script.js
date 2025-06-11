// Mostrar alerta de "Mais informações"
document.querySelectorAll('.more-info').forEach(button => {
  button.addEventListener('click', () => {
    alert('Mais informações do produto em breve!');
  });
});

// Animação ao rolar (scroll)
function revealOnScroll() {
  const elements = document.querySelectorAll('.product-card');
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
