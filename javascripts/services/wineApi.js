class WineApi {
    static fetchWines() {
        fetch('http://localhost:3000/wines')
        .then(resp => resp.json())
        .then(json => json.forEach(wineObject => {
            let wine = new Wine(wineObject)
            wine.renderWine()
        }))
        .catch(err => console.log(err))
    }
}