const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
const alllinks = document.querySelectorAll("a:link");
alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
    if (href !== "#" && href.startsWith("#")) {
      const selection = document.querySelector(href);
      selection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
const selectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0, rootMargin: "-80px" }
);
observer.observe(selectionHero);
