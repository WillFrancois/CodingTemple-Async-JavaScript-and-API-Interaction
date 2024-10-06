// Task 2
const attribution = document.querySelector("#attribution");
const heroDisplay = document.querySelector("#hero-display");

// INSTRUCTOR: Please provide your own keys. With my API key and hash, people can make requests as me.
const APIKey = "";
const Hash = "";

// Task 2
async function retreiveMarvelData() {
  const data = await fetch(
    `https://gateway.marvel.com/v1/public/characters?apikey=${APIKey}&ts=1&hash=${Hash}&nameStartsWith=Arm`,
  );
  const json = await data.json();
  return json;
}

const marvelCharacters = retreiveMarvelData("arm");

function addAttribution(full_results) {
  attribution.textContent = full_results["attributionText"];

  document.querySelector("body").innerHTML =
    document.querySelector("body").innerHTML +
    full_results["attributionHTML"];
}

function updatePage(res) {
  res.forEach((element) => {
    console.log(element["name"]);

    // Task 3
    const listItem = document.createElement("li");
    listItem.innerHTML = `<h2>${element["name"]}</h2><br>
      <img src=${element["thumbnail"]["path"]}.${
      element["thumbnail"]["extension"]
    } \>`;
    heroDisplay.appendChild(listItem);
  });
}

Promise.allSettled([marvelCharacters]).then((results) => {
  const full_results = results[0]["value"];
  const res = results[0]["value"]["data"]["results"];

  updatePage(res);
  addAttribution(full_results);
});
