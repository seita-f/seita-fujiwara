console.log("slide show ;)")

const swiper = new Swiper(".swiper", {
  // Add pagination if needed
  pagination: {
    el: ".swiper-pagination"
  },
  // Add a nav button if needed
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});