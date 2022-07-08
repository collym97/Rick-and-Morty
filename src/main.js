const API = "https://rickandmortyapi.com/api/character";

fetch(API)
  .then((res) => res.json())
  .then((data) => {
    {
      // console.log(data);
      const char = data.results;
      char.map((elem) => {
        console.log(elem);
        const name = elem.name;
        const image = elem.image;
        const specie = elem.species;
        const status = elem.status;
        const location = elem.location;
        const character = `<div class="mt-3 pl-4 border border-danger card bg-dark text-white"  style="width: 18rem;">
    <img class="card-img-top" src="${image}" alt="Card image cap">
    <div class=" card-body">
        <h5 class="card-title">${name} </h5>
        <p class="card-text"><strong>species-</strong> ${specie}</p>
        <p class="card-text"><strong>status-</strong>${status}</p>
        <p class="card-text"><strong>location-</strong>${location.name}</p>
    </div>
</div>`;
        document.getElementById("container").innerHTML += character;
      });
    }
  });

// async function FechData(urlAPI) {
//   const res = await fetch(urlAPI);
//   const data = await res.json();
//   return data;
// }
