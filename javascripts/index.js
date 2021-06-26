const baseURL = "http://localhost:3000"
const ulDiv = document.getElementById("list")
const varietalList = document.getElementById("varietal-list")
const wineList = document.getElementById("wine-list")
const showWinesButton = document.getElementById("show-wines")
const wineName = document.getElementById("wine-name")
const winePrice = document.getElementById("wine-price")
const wineDescription = document.getElementById("wine-description")
const wineRegion = document.getElementById("wine-region")
const searchBar = document.getElementById("search-bar")


document.addEventListener("DOMContentLoaded", () => {
    VarietalApi.fetchVarietals()
    WineApi.fetchWines()

    searchBar.addEventListener("keyup", Wine.handleSearch)
})










