import svg4everybody from "svg4everybody";
import Header from "../components/Header/main";
import MainPage from "../containers/PageMain/main";

document.addEventListener("DOMContentLoaded", () => {
  svg4everybody();

  const headerBlock = document.querySelector(".js-header");
  const mainWrapperBlock = document.querySelector("body");
  const pageMain = document.querySelector(".js-main-page");

  new Header(headerBlock, mainWrapperBlock);

  document.addEventListener("scroll", () => {
    /* eslint no-restricted-globals:0 */
    if (pageYOffset > 0) {
      headerBlock.classList.add("header_scroll");
    } else {
      headerBlock.classList.remove("header_scroll");
    }
  });

  if (pageMain) {
    new MainPage(pageMain);
  }
});
