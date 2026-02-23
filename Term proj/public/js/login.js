const loginBtn = document.querySelector(".login-button");
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close-btn");

loginBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};