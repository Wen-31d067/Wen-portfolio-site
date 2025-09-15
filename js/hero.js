gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero_title", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "restart none restart reset",
  }
});

gsap.from(".hero_desc", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.6,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "restart none restart reset"
  }
});
