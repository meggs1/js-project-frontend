class WineApi {

    static fetchWines() {
        fetch('http://localhost:3000/wines')
        .then(resp => resp.json())
        .then(json => json.forEach(wineObject => {
             new Wine(wineObject)
            // wine.render()
        }))
        .catch(this.handleError)
    }

    static handleNewWine(wineName, wineRegion, wineDescription, winePrice, varietalId) {
        const data = {
            name: wineName,
            region: wineRegion,
            description: wineDescription,
            price: winePrice,
            varietal_id: varietalId
        }
        fetch('http://localhost:3000/wines', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            let wine = new Wine(json)
        })
    }


}