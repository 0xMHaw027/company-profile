import "./about.scss";
import aboutImage from "../../assets/images/about.png";

const About = () => {
  const about = document.createElement("section");
  about.classList.add("about");
  about.setAttribute("id", "about");

  about.innerHTML = `
    <div class="about__container">

      <div class="about__image">
        <img src="${aboutImage}" alt="About Illustration"/>
      </div>

      <div class="about__content">
        <h2 class="about__title">About <strong>Me</strong></h2>

        <div class="about__description">
          <p>
         I am a Frontend Developer specializing in JavaScript and modern web technologies, focused on building clean, responsive, and interactive web interfaces. My work revolves around creating user-friendly digital experiences while maintaining scalable and maintainable code.
          </p>
          <p>
        Currently, I am expanding my expertise into AI Engineering. I am actively learning about machine learning, large language models, and AI tools to understand how intelligent systems can be integrated into modern applications.
          </p>
          <p>
         My long-term goal is to bridge the gap between web development and artificial intelligence, building smarter digital products that combine intuitive user interfaces with powerful AI capabilities.
          </p>
        </div>
      </div>

    </div>
  `;

  return about;
};

export default About;
