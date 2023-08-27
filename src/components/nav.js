function navBar() {
  const nav = document.createElement("nav");
  nav.classList.add("page-nav");
  nav.innerHTML = `
    <a href="#">
        <div class="logo">Food for thought</div>
    </a>
    <ul>
        <a id="homeId" class="active" href="#"><li>Home</li></a>
        <!-- <a href="#">
        <span class="material-symbols-sharp"> shopping_cart </span>
        <li>Deliveries</li></a
        > -->
        <a id="menuId" href="#menu"><li>Menu</li></a>
        <a id="contactId" href="#contact">
        <i class="fa-solid fa-phone"></i>
        <li>contact</li></a
        >
    </ul>
  <i class="fa-solid fa-utensils"></i>
    `;

  return nav;
}

export { navBar };
