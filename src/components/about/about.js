import "./about.scss";

const About = () => {
  const about = document.createElement("section");
  about.classList.add("about");
  about.setAttribute("id", "about");

  about.innerHTML = `
    <div class="about__container">

      <div class="about__image">
        <img src="/src/assets/images/about.png" alt="About Illustration"/>
      </div>

      <div class="about__content">
        <h2 class="about__title">About <strong>Me</strong></h2>

        <div class="about__description">
          <p>
            I'm a passionate, self-proclaimed designer who specializes
            in full stack development (React.js & Node.js). I am very
            enthusiastic about bringing the technical and visual aspects
            of digital products to life.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then,
            I've continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time.
          </p>
        </div>
      </div>

    </div>
  `;

  return about;
};

export default About;
