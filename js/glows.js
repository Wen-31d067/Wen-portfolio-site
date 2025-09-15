gsap.utils.toArray('.glow').forEach((el) => {
  const amp = el.classList.contains('g2') ? 1.5 : 1;

  gsap.to(el, {
    x: () => gsap.utils.random(-120 * amp, 150 * amp),
    y: () => gsap.utils.random(-90  * amp,  90 * amp),
    scale: () => gsap.utils.random(0.85, 1.50),
    rotation: () => gsap.utils.random(-12, 12),
    duration: () => gsap.utils.random(2, 4),
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    repeatRefresh: true
  });
});
