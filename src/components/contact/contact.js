import "./contact.scss";

const Contact = () => {
  const contact = document.createElement("section");
  contact.classList.add("contact");

  contact.innerHTML = `
    <div class="contact__container">

      <div class="contact__form-wrapper">
        <input type="text" class="contact__input" placeholder="Your name"/>
        <input type="email" class="contact__input" placeholder="Email"/>
        <input type="url" class="contact__input" placeholder="Your website (if exists)"/>
        <textarea class="contact__textarea" placeholder="How can I help?*"></textarea>

        <div class="contact__bottom">
          <button class="contact__btn">Get In Touch</button>

          <div class="contact__social">
            <a href="#" class="contact__social-link" aria-label="Github" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" class="contact__social-link" aria-label="Instagram" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" class="contact__social-link" aria-label="Twitter" target="_blank">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" class="contact__social-link" aria-label="Whatsapp" target="_blank">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="contact__info">
        <h2 class="contact__title">
          Let's <span class="contact__title-outline">talk</span> for<br/>
          Something special
        </h2>
        <p class="contact__description">
          I seek to push the limits of creativity to create
          high-engaging, user-friendly, and memorable
          interactive experiences.
        </p>
        <a href="mailto:mhaw027@gmail.com" class="contact__email">
          Mhaw027@gmail.com
        </a>
        <a href="tel:089508169258" class="contact__phone">
          089508169258
        </a>
      </div>

    </div>
  `;

  return contact;
};

export default Contact;
