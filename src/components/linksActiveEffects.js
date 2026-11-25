export function linksActiveEffects() {
  const navLinks = document.querySelectorAll(".nav-link");
  const footerLinks = document.querySelectorAll("footer .link");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((l) => {
        l.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((navLink) => {
        if (link.getAttribute("href") == navLink.getAttribute("href")) {
          navLinks.forEach((l) => {
            l.classList.remove("active");
          });
          navLink.classList.add("active");
        }
      });
    });
  });
}
