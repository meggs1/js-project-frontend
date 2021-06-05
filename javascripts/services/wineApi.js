class WineApi {
    constructor(baseURL) {
        this.baseURL =`${baseURL}/wines`
    }

    static fetchWines() {
        fetch('http://localhost:3000/wines')
        .then(resp => resp.json())
        .then(json => json.forEach(wineObject => {
             new Wine(wineObject)
            // wine.render()
        }))
        .catch(err => console.log(err))
    }

}