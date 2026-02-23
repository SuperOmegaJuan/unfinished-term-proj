const modal = document.getElementById("loginModal");
const openBtn = document.querySelector(".user-icon");
const closeBtn = document.querySelector(".close-btn");

openBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};