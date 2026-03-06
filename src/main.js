import "./styles/main.scss"; // ← tambah ini
import Header from "./components/header/header.js";
import Hero from "./components/hero/hero.js";
import Skills from "./components/services/skills.js";
import About from "./components/about/about.js";
import Contact from "./components/contact/contact.js";
import Footer from "./components/footer/footer.js";
import scrollAnimation from "./utils/scrollAnimation.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

const app = document.querySelector("#app");

app.appendChild(Header());
app.appendChild(Hero());
app.appendChild(Skills());
app.appendChild(About());
app.appendChild(Contact());
app.appendChild(Footer());
// Panggil setelah semua component di render
scrollAnimation();

// Tunggu semua element ter-render dulu
setTimeout(() => {
  scrollAnimation();
}, 100);
