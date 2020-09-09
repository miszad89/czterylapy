const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const logo = document.querySelector(".logo");

const handleClickHamburger = () => {
  hamburger.classList.toggle("hamburger--active");
  menu.classList.toggle("menu--active");
};

const scrollPage = (e) => {
  e.preventDefault();
  const aboutTop = document.querySelector(".about").offsetTop;
  const locationsTop = document.querySelector(".locations").offsetTop;
  const offerTop = document.querySelector(".offer").offsetTop;

  switch (e.target.innerText) {
    case "O NAS":
      window.scrollTo({ top: `${aboutTop}`, behavior: "smooth" });
      break;
    case "GABINETY":
      window.scrollTo({ top: `${locationsTop}`, behavior: "smooth" });
      break;
    case "ZAKRES USŁUG":
      window.scrollTo({ top: `${offerTop}`, behavior: "smooth" });
      break;
    case "":
      window.scrollTo({ top: 0, behavior: "smooth" });
      break;
    default:
      console.log(`There is no such section as ${e.target.innerText}`);
  }
  menu.classList.remove("menu--active");
};

hamburger.addEventListener("click", handleClickHamburger);
logo.addEventListener("click", scrollPage);
menuItems.forEach((item) => item.addEventListener("click", scrollPage));
