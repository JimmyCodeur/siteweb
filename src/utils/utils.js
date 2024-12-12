export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = -190; // Ajustez cette valeur (négative) pour remonter un peu plus
    const topPosition = section.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth", // Scroll avec animation fluide
    });
  }
};

export function scrollCarousel(button, direction) {
  const carousel = button.closest(".category-block").querySelector(".sub-category");
  const cardWidth = carousel.querySelector(".card").offsetWidth;
  carousel.scrollBy({
    left: cardWidth * 2 * direction, // Défilez de deux cartes à la fois
    behavior: "smooth"
  });
}
