window.sr = ScrollReveal();

sr.reveal(".navDesktop", {
  duration: 3000,
  origin: "bottom",
  distance: "-100px",
});
sr.reveal(".mainInfo", {
  duration: 5000,
  origin: "right",
  distance: "-300px",
});

sr.reveal(".perfil", {
  duration: 5000,
  origin: "left",
  distance: "-300px",
});

window,
  addEventListener("scroll", function () {
    let header = document.querySelector(".navDesktop");
    header.classList.toggle("abajo", window.scrollY > 0);
  });
