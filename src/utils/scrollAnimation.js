const scrollAnimation = () => {
  const leftElements = document.querySelectorAll(
    ".hero__content, .contact__form-wrapper, .about__content",
  );

  const rightElements = document.querySelectorAll(
    ".hero__image, .contact__info, .about__image",
  );

  const bottomElements = document.querySelectorAll(
    ".footer__container, .skills__container",
  );

  leftElements.forEach((el) => el.classList.add("animate-left"));
  rightElements.forEach((el) => el.classList.add("animate-right"));
  bottomElements.forEach((el) => el.classList.add("animate-bottom"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  [...leftElements, ...rightElements, ...bottomElements].forEach((el) => {
    observer.observe(el);
  });
};

export default scrollAnimation;
