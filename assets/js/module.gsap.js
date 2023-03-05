/**
 * Effect Menu
 */

export function EffectMenu() {
  gsap.timeline()
    .from(".navbar__menu", {
      duration: 0,
    })
    .from(".navbar__menu__logo", {
      duration: 1,
      opacity: 0,
    })
    .from(".navbar__menu__links__link", {
      duration: 0.5,
      stagger: 0.45,
      opacity: 0,
      y: -30,
      ease: "black",
    })
    .from(".navbar__menu__cta", {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: "black",
    });
}
