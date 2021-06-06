const baseURL = "http://localhost:3000"
const ulDiv = document.getElementById("list")
const varietalList = document.getElementById("varietal-list")
const wineList = document.getElementById("wine-list")
const showWinesButton = document.getElementById("show-wines")

document.addEventListener("DOMContentLoaded", () => {
    VarietalApi.fetchVarietals()
    WineApi.fetchWines()
})







