export function scrollEffects() {
  const links = document.querySelectorAll(".navbar-nav .nav-link");
  const sectionsId = [
    "home",
    "products",
    "contacts",
    "about",
    "faqts",
    "services",
  ];
  sectionsId.forEach((section) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) => {
              link.classList.remove("active");
            });
            links.forEach((link) => {
              if (
                `#${entry.target.getAttribute("id")}` ==
                `${link.getAttribute("href")}`
              ) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      { threshold: 0.9 },
    );
    observer.observe(document.querySelector(`#${section}`));
  });
}
