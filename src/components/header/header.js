import "./header.scss";
import logoImage from "../../assets/images/logo.png"; // ← tambah ini

const Header = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  header.innerHTML = `
    <nav class="header__nav">
      <div class="header__logo">
        <span class="header__logo-icon">
         <img src="${logoImage}" alt="Company Logo">
        </span>
        <span class="header__logo-text"></span>
      </div>
      <ul class="header__menu" id="headerMenu">
        <li><a href="#about" class="header__menu-link" data-text="About Me">About Me</a></li>
        <li><a href="#services" class="header__menu-link" data-text="Services">Services</a></li>
        <li><a href="#project" class="header__menu-link" data-text="Project">Project</a></li>
        <li><a href="#contact" class="header__menu-link" data-text="Contact Me">Contact Me</a></li>
      </ul>
      <a href="#contact" class="header__btn">Contact Us</a>
      <button class="header__hamburger" id="hamburger" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  `;

  // ================================
  // HAMBURGER LOGIC
  // ================================
  const hamburger = header.querySelector("#hamburger");
  const menu = header.querySelector("#headerMenu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  header.querySelectorAll(".header__menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    }
  });

  // ================================
  // TYPING EFFECT - LOGO
  // ================================
  const logoText = header.querySelector(".header__logo-text");
  const brandName = "0xMHaw";
  let index = 0;

  const typing = () => {
    if (index < brandName.length) {
      logoText.textContent += brandName.charAt(index);
      index++;
      setTimeout(typing, 150);
    }
  };

  setTimeout(typing, 500);

  return header;
};

export default Header;
