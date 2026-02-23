const sliders = document.querySelectorAll(".product-slider");

sliders.forEach(slider => {

  const track = slider.querySelector(".product-track");
  const nextBtn = slider.querySelector(".product-arrow.next");
  const prevBtn = slider.querySelector(".product-arrow.prev");

  let position = 0;
  const card = slider.querySelector(".product-card");
  const cardWidth = card.offsetWidth + 20;

  nextBtn.onclick = () => {
    position -= cardWidth;
    track.style.transform = `translateX(${position}px)`;
  };

  prevBtn.onclick = () => {
    position += cardWidth;
    if (position > 0) position = 0;
    track.style.transform = `translateX(${position}px)`;
  };

});