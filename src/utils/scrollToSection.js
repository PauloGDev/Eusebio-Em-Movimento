export const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (!element) return;

  const offset = 90;

  const top =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};