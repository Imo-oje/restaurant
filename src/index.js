import "./style.scss";

const navEl = Array.from(document.querySelectorAll(".page-nav ul a"));

navEl.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");
    nav.classList.add("active");
  });
});

const componemt = () => {
  const element = document.createElement("div");

  element.textContent = "You're going...";

  return element;
};

//document.body.appendChild(componemt());
