const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const aboutTop = document.querySelector(".about").offsetTop;
const locationsTop = document.querySelector(".locations").offsetTop;
const offerTop = document.querySelector(".offer").offsetTop;

const handleClickHamburger = () => {
  hamburger.classList.toggle("hamburger--active");
  menu.classList.toggle("menu--active");
};

const scrollPage = (e) => {
  const resetScroll = () => window.scrollTo({ top: 0, behavior: "smooth" });

  switch (e.target.innerText) {
    case "O NAS":
      resetScroll();
      window.scrollTo({ top: `${aboutTop}`, behavior: "smooth" });
      break;
    case "GABINETY":
      resetScroll();
      window.scrollTo({ top: `${locationsTop}`, behavior: "smooth" });
      break;
    case "ZAKRES USŁUG":
      resetScroll();
      window.scrollTo({ top: `${offerTop}`, behavior: "smooth" });
      break;
    default:
      console.log(`There is no such section as ${e.target.innerText}`);
  }
  handleClickHamburger();
};

hamburger.addEventListener("click", handleClickHamburger);
menuItems.forEach((item) => item.addEventListener("click", scrollPage));
