export default function toggleMenu() {
  const nav = document.querySelector('.site-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
