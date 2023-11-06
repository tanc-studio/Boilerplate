// Navigation

var toggle = document.getElementById("darkmodeToggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};



var isNavOpen = false;
function toggleNav() {
  var toggleBtn = document.getElementById("tofBurger");
  var sidenav = document.getElementById("tofNavtray");
  if (isNavOpen) {
    sidenav.classList.remove("open");
    toggleBtn.classList.remove("open");
    isNavOpen = false;
  } else {
    sidenav.classList.add("open");
    toggleBtn.classList.add("open");
    isNavOpen = true;
  }
}


