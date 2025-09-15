gsap.utils.toArray('.glow').forEach((el) => {
  const amp = el.classList.contains('g2') ? 1.2 : 1; // 第二顆幅度更大（可調）

  gsap.to(el, {
    x: () => gsap.utils.random(-120 * amp, 120 * amp), // 原本 -60~60 → 加大
    y: () => gsap.utils.random(-90  * amp,  90 * amp), // 原本 -40~40 → 加大
    scale: () => gsap.utils.random(0.85, 1.30),        // 縮放幅度更明顯
    rotation: () => gsap.utils.random(-12, 12),        // 加一點旋轉，層次更自然
    duration: () => gsap.utils.random(2, 4),           // 速度稍快（原 4~8 → 3~5）
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    repeatRefresh: true
  });
});
