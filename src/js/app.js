import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  let url = "https://pokeapi.co/api/v2/pokemon?limit=10";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const pokemons = data.results;
      pokemons.forEach(pokemon => {
        let li = document.createElement("li");
        li.innerText = pokemon.name;
        ul.appendChild(li);
      });
    })
});