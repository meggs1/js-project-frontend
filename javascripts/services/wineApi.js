class WineApi {

    static fetchWines() {
        fetch('http://localhost:3000/wines')
        .then(resp => resp.json())
        .then(json => json.forEach(wineObject => {
             new Wine(wineObject)
            // wine.render()
        }))
        .catch(err => console.log(err))
    }

    static handleNewWine(e) {
        e.preventDefault()
        const data = {
            name: wineName.value,
            region: wineRegion.value,
            description: wineDescription.value,
            price: winePrice.value,
            varietal_id: wineSelectVarietal.value
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