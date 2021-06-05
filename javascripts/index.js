const ulDiv = document.getElementById("list")
const varietalList = document.getElementById("varietal-list")
const wineList = document.getElementById("wine-list")
const showWinesButton = document.getElementById("show-wines")

document.addEventListener("DOMContentLoaded", () => {
    VarietalApi.fetchVarietals()

    // fetchWines()
})

// const fetchVarietals = () => {
//     fetch('http://localhost:3000/varietals')
//     .then(resp => resp.json())
//     .then(json => renderVarietals(json))
//     .catch(err => console.log(err))
// }

// const renderVarietals = (json) => {
//     json.forEach(element => {
//         const li = document.createElement("li")
//         li.innerHTML = `
//         <h2> ${element.name} </h2>
//         <p> ${element.description}</p>
//         <button id="Show Wines"> Show Wines </button>
//         `
//         varietalList.appendChild(li)
//     });
// }

const fetchWines = () => {
    fetch('http://localhost:3000/wines')
    .then(resp => resp.json())
    .then(json => renderWines(json))
    .catch(err => console.log(err))
}

const renderWines = (json) => {
    json.forEach(element => {
        const wineLi = document.createElement("li")
        wineLi.innerHTML = `
        <h2> ${element.name} </h2>
        <p> ${element.price}</p>
        <p> ${element.varietal.name}</p>
        <p> ${element.reigon}</p>
        <p> ${element.description}</p> 
        `
        wineList.appendChild(wineLi)
    });
}





