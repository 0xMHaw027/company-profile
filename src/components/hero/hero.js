import "./hero.scss";
import heroImage from "/src/assets/images/hero.png";

const Hero = () => {
  const hero = document.createElement("section");
  hero.classList.add("hero");

  hero.innerHTML = `
    <div class="hero__container">

      <div class="hero__image">
        <img src="/src/assets/images/hero.png" alt="Hero Illustration"/>
      </div>

      <div class="hero__content">
        <span class="hero__subtitle">Welcome to my portfolio</span>

       <h1 class="hero__title">
  Hello I'm <strong><span class="hero__typed" id="typed-name"></span></strong><br/>
 AI-Focused <strong><span class="hero__typed hero__typed--outline" id="typed-role"></span></strong><br/>
  Based In <strong><span class="hero__typed" id="typed-location"></span></strong>
</h1>

        <p class="hero__description">
     Web Developer and AI Engineer focused on building modern web applications and exploring intelligent systems. Passionate about technology, problem-solving, and continuously learning to develop impactful AI-driven solutions.
        </p>

        <div class="hero__social">
          <a href="#" class="hero__social-link" aria-label="Github" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#" class="hero__social-link" aria-label="Twitter" target="_blank">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" class="hero__social-link" aria-label="Instagram" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" class="hero__social-link" aria-label="Whatsapp" target="_blank">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>

    </div>
  `;

  // ================================
  // TYPING EFFECT
  // ================================
  const typedName = hero.querySelector("#typed-name");
  const typedRole = hero.querySelector("#typed-role");
  const typedLocation = hero.querySelector("#typed-location");

  const typeText = (element, text, callback) => {
    let index = 0;
    element.textContent = "";

    const typing = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typing, 100);
      } else if (callback) {
        setTimeout(callback, 300);
      }
    };

    typing();
  };

  // Jalankan typing secara berurutan
  setTimeout(() => {
    typeText(typedName, "0xMHaw", () => {
      typeText(typedRole, "WebDEV", () => {
        typeText(typedLocation, "Indonesia.");
      });
    });
  }, 500);

  return hero;
};

export default Hero;
