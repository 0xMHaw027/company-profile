import "./footer.scss";
import logoImage from "/src/assets/images/about.png"; // ← tambah ini

const Footer = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = `
    <div class="footer__container">
      <div class="footer__logo">
        <img src="${logoImage}" alt="Logo"/>
        <span class="footer__logo-text">0xMHaw</span>
      </div>
      <div class="footer__info">
        <span class="footer__copyright">© 2025-2026 Personal</span>
        <span class="footer__made">Made in Figma</span>
      </div>
    </div>
  `;
  return footer;
};
export default Footer;
