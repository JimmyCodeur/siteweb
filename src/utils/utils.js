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
