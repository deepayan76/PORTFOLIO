// AOS Initialization
AOS.init({
  duration: 1000,
  once: true
});

window.addEventListener('scroll', () => {
  const sections = ['home', 'about', 'skills', 'contact'];
  let scrollPos = window.scrollY + 200; // Adjust offset if needed

  sections.forEach(id => {
    const section = document.getElementById(id);
    const navItem = document.getElementById(`nav-${id}`);

    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      navItem.classList.add('active');
    } else {
      navItem.classList.remove('active');
    }
  });
});

