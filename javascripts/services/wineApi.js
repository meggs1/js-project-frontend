class WineApi {
    static fetchWines() {
        fetch('http://localhost:3000/wines')
        .then(resp => resp.json())
        .then(json => json.forEach(wineObject => new Wine(wineObject)))
        .catch(err => console.log(err))
    }
}