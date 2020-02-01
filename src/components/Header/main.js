function HeaderScripts(header, mainWrapper) {
  const menuBtn = header.querySelector(".js-menu-btn");

  menuBtn.addEventListener("click", () => {
    header.classList.toggle("menu_open");
    mainWrapper.classList.toggle("noScroll");
  });
}

export default HeaderScripts;
