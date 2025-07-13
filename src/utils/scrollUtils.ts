export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};