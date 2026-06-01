const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

let open = false;

toggle.addEventListener("click", function () {
  open = !open;

  if (open) {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Menü schliessen");
  } else {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menü öffnen");
  }
});

const links = menu.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    open = false;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menü öffnen");
  });
}