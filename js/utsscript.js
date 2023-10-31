const navbarNav = document.querySelector(".navbarNav");
// ketike menu diklik
document.querySelector("#Menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
// klik di luar sidebar untuk menghilangkan nav
const navbarnav = document.querySelector('#Menu');

document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// active toggle login

// login


