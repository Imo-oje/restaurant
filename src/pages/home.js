const home = () => {
  const home = document.createElement("div");
  home.classList.add("home");
  //home.id = "home";

  home.innerHTML = `
  <div class="left">
    <h2><span>Burger</span><br />for everyone</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur<br />elit. Ipsum doloribus,
      voluptatibus inventore culpa distinctio.<br />Sapiente
      tenetur,ratione voluptates. Ea quae rem inventore delectus minus.
    </p>
    <div class="input">
      <input type="search" name="search" placeholder="find foods..." />
      <span class="material-symbols-sharp"> search </span>
      <button type="button">Order</button>
    </div>
  </div>
  <div class="right">
    <img src="../src/img/hamburger.png" alt="special burder" />
  </div>
  `;

  /* container.appendChild(home); */

  return home;
};

export { home };
