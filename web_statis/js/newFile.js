// ketike menu diklik
document.querySelector("#Menu").onclick = () => {
  navbarNav.classList.toggle("active");
  document.querySelector("#Menu").onclick = () => {
    NavbarNavDropdown.classList.toggle("active");
  };
  // klik di luar sidebar untuk menghilangkan nav
  const Menu = document.querySelector("#Menu");

  document.addEventListener("click", function (e) {
    if (!Menu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarnav.classList.remove("active");
    }
  });
  // active toggle login
  // login
};
