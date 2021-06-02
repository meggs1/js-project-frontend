const ulDiv = document.getElementById("list")
const ul = document.getElementById("varietal-list")

document.addEventListener("DOMContentLoaded", () => {
    fetchVarietals()
})

const fetchVarietals = () => {
    fetch('http://localhost:3000/varietals')
    .then(resp => resp.json())
    .then(json => renderVarietals(json))
    .catch(err => console.log(err))
}

const renderVarietals = (json) => {
    json.forEach(element => {
        const li = document.createElement("li")
        li.innerHTML = `
        <h2> ${element.name} </h2>
        <p> ${element.description}</p>
        `
        ul.appendChild(li)
    });
}

