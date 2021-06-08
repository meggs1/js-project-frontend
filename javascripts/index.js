const baseURL = "http://localhost:3000"
const ulDiv = document.getElementById("list")
const varietalList = document.getElementById("varietal-list")
const wineList = document.getElementById("wine-list")
const showWinesButton = document.getElementById("show-wines")
const wineSelectVarietal = document.getElementById("varietal_id")

document.addEventListener("DOMContentLoaded", () => {
    VarietalApi.fetchVarietals()
    WineApi.fetchWines()
})







