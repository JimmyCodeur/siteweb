export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = -190;
    const topPosition = section.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  }
};

export function scrollCarousel(button, direction) {
  const carousel = button.closest(".category-block").querySelector(".sub-category");
  const cardWidth = carousel.querySelector(".card").offsetWidth;
  carousel.scrollBy({
    left: cardWidth * 2 * direction,
    behavior: "smooth"
  });
}
