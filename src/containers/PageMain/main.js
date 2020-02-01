import Swiper from "swiper";

function mainPage(pagemain) {
  const slider = pagemain.querySelector(".js-slider");
  const sliderPagination = slider.querySelector(".js-slider-pagination");
  const nextBtn = slider.querySelector(".js-next-slide");
  const prevBtn = slider.querySelector(".js-prev-slide");

  new Swiper(slider, {
    loop: false,
    spaceBetween: 93,
    pagination: {
      el: sliderPagination,
      type: "custom",
      renderCustom(swiper, current, total) {
        return `<p>${current} из ${total}</p>`;
      }
    },
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn
    }
  });
}

export default mainPage;
