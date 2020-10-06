
const navSlide = () => {
  const ham = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-list");

  ham.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    ham.classList.toggle("openn");
  });

  nav.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    ham.classList.toggle("openn");
  });
};

navSlide();
smoothie();

AOS.init({
  easing: "ease-in",
  duration: 1000,
  once: true,
});
