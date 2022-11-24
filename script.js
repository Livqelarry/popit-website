const toggleMenu = () => {
  document.getElementById("navTriggerMob").onclick = () => {
    document.getElementById("nav").classList.toggle("header__nav--show");
  };
};

toggleMenu();
