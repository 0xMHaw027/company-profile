import "./skills.scss";

const Skills = () => {
  const section = document.createElement("section");
  section.classList.add("skills");
  const skills = [
    {
      name: "HTML/CSS",
      icon: "fa-brands fa-html5",
      featured: false,
      mobileHide: false,
    },
    {
      name: "Javascript",
      icon: "fa-brands fa-js",
      featured: false,
      mobileHide: false,
    },
    {
      name: "Node.js",
      icon: "fa-brands fa-node-js",
      featured: false,
      mobileHide: false,
    },
    {
      name: "Github",
      icon: "fa-brands fa-github",
      featured: false,
      mobileHide: false,
    },
    {
      name: "Python",
      icon: "fa-brands fa-python",
      featured: false,
      mobileHide: false,
    },
    {
      name: "Linux",
      icon: "fa-brands fa-linux",
      featured: false,
      mobileHide: false,
    },
    {
      name: "Sass/SCSS",
      icon: "fa-brands fa-sass",
      featured: false,
      mobileHide: false,
    },
    {
      name: "NPM",
      icon: "fa-brands fa-npm",
      featured: false,
      mobileHide: false,
    },
  ];

  const cardsHTML = skills
    .map(
      (skill) => `
    <div class="skills__card ${skill.featured ? "skills__card--featured" : ""} ${skill.mobileHide ? "skills__card--hide-mobile" : ""}">
      <i class="${skill.icon} skills__card-icon"></i>
      <span class="skills__card-name">${skill.name}</span>
    </div>
  `,
    )
    .join("");

  section.innerHTML = `
    <div class="skills__container">
      <div class="skills__header">
        <h2 class="skills__title">My <strong>Skills</strong></h2>
      </div>
      <div class="skills__grid">
        ${cardsHTML}
      </div>
    </div>
  `;

  return section;
};

export default Skills;
