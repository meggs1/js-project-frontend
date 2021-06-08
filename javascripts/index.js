const baseURL = "http://localhost:3000"
const ulDiv = document.getElementById("list")
const varietalList = document.getElementById("varietal-list")
const wineList = document.getElementById("wine-list")
const showWinesButton = document.getElementById("show-wines")
const wineForm = document.getElementById("wine-form")
const wineName = document.getElementById("wine-name")
const winePrice = document.getElementById("wine-price")
const wineDescription = document.getElementById("wine-description")
const wineRegion = document.getElementById("wine-region")
const wineSelectVarietal = document.getElementById("varietal_id")


document.addEventListener("DOMContentLoaded", () => {
    VarietalApi.fetchVarietals()
    WineApi.fetchWines()
    wineForm.addEventListener("submit", WineApi.handleNewWine)
})







