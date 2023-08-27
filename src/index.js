import "./style.scss";
import { home } from "./pages/home";
import { container } from "./components/container";
import { navBar } from "./components/nav";
import { menu } from "./pages/menu";
import { contact } from "./pages/contact";

(() => {
  document.body.appendChild(navBar());
  document.body.appendChild(container());

  const navEl = Array.from(document.querySelectorAll(".page-nav ul a"));
  const pages = [
    {
      id: "homeId",
      content: home,
    },
    {
      id: "contactId",
      content: contact,
    },
    {
      id: "menuId",
      content: menu,
    },
  ];
  const containa = document.querySelector(".container");

  containa.appendChild(home());

  navEl.forEach((nav) => {
    nav.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      nav.classList.add("active");

      for (let i = 0; i <= pages.length; i++) {
        if (nav.id == pages[i].id && nav.classList.contains("active")) {
          containa.replaceChild(pages[i].content(), containa.childNodes[0]);
          //innerHTML = pages[i].content().innerHTML;
          return;
        }
      }
    });
  });
})();
