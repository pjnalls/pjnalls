/* 
 * Credit to @Maclinz.
 *
 * (https://github.com/Maclinz/JS_CSS_PortfolioProject)
 */

class PageTransitions {
  #sections = document.querySelectorAll(".section");
  #controlsParent = document.querySelectorAll(".controls");
  #controlsChildren = document.querySelectorAll(".control");
  #allSections = document.querySelector(".main-content");

  constructor() {
    this.#setupActivateOnButtonClick();
    this.#setupActivateSectionOnButtonClick();
    this.#setupThemeToggle();
  }

  #setupActivateOnButtonClick = () => {
    this.#controlsChildren.forEach((button) => {
      button.addEventListener("click", function () {
        let activeButton = document.querySelectorAll(".active-btn")[0];
        activeButton.className = activeButton.className.replace(
          "active-btn",
          ""
        );
        this.className += " active-btn";
      });
    });
  };

  #setupActivateSectionOnButtonClick = () => {
    this.#allSections.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      if (id) {
        /*
         * Remove selected section from the other buttons
         */
        this.#controlsParent.forEach((button) => {
          button.classList.remove("active-btn");
        });
        e.target.classList.add("active-btn");

        /*
         * Hide other sections
         */
        this.#sections.forEach((section) => {
          section.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
      }
    });
  };

  #setupThemeToggle = () => {
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
      let element = document.body;
      element.classList.toggle("light-mode");
    });
  };
}

new PageTransitions();
