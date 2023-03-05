document.addEventListener("DOMContentLoaded", () => {
  let OpenMenu, ContainerMenu, LinksMenu;
  let tl = gsap.timeline();
  OpenMenu = document.querySelector(".navbar__icon");
  ContainerMenu = document.querySelector(".navbar__menu");

  OpenMenu.addEventListener("click", (evnt) => {
    ContainerMenu.classList.toggle("is-show");
    if (ContainerMenu.classList.length < 2) {
      Pause();
    } else {
      EffectMenu();
    }
  });

  /**
   * Effect GSAP
   */

  /**
   * @returns void
   */

  function EffectMenu() {
    tl.resume();
    tl.from(".navbar__menu", {
      duration: 0.01,
      opacity: 0
    }).to(".navbar__menu", {
        opacity: 1
    })
      .from(".navbar__menu__links__link", {
        stagger: 0.15,
        opacity: 0,
        y: -30,
        ease: "black",
      })
      .to(".navbar__menu__links__link", {
        opacity: 1,
      })
      .from(".navbar__menu__cta", {
        duration: 0.1,
        y: 20,
        opacity: 0,
        ease: "black",
      })
      .to(".navbar__menu__cta", {
        opacity: 1,
        ease: "black",
      });
  }

  function Pause() {
    tl.pause();
  }

  /**
   * @returns void
   */
  function MoveMouseOverLinks(links) {}
});




