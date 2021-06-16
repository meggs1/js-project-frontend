class Wine {
    static all = []

    constructor({id, name,region, price, description, varietal}) {
        this.id = id
        this.name = name
        this.price = price
        this.region = region
        this.description = description
        this.varietal_id = varietal.id
        Wine.all.push(this)
    }

    render() {
        let varietalAnchor = document.getElementById(`varietal-${this.varietal_id}-wines`)
        const li = document.createElement('li')

        li.innerHTML = `
            <h3>${this.name}</h3>
            <p>Price: $${this.price}</p>
            <p>Region: ${this.region}</p>
            <p>Description: ${this.description}</p>
        `
        li.id = `${this.id}`
        li.setAttribute('class', 'wine')

        varietalAnchor.parentNode.appendChild(li)
    }

    static createWine(e) {
        e.preventDefault()
        debugger
        const wineName = e.target.children[2].value
        const wineRegion = e.target.children[4].value
        const wineDescription = e.target.children[6].value
        const winePrice = e.target.children[8].value
        const varietalId = e.target.dataset.id
        WineApi.handleNewWine(wineName, wineRegion, wineDescription, winePrice, varietalId)
    }

    // static findByNameOrKeyword() {
        
    // }

    // by name or keyword (description)
    static handleSearch(e) {
        e.preventDefault()
        const searchString = e.target.value.toLowerCase()

        const filteredWines = Wine.all.filter( wine => {
            if (searchString === "") {
                wineList.style.display = "block"
            } else {
                return wine.name.toLowerCase().includes(searchString)
            }
        })
        Wine.displaySearchResults(filteredWines)
    }

    static displaySearchResults(filteredWines) {
        const wines = filteredWines
        .map((wine) => {
            return `
            <li id="wine${wine.id}" class = "wine">
                <h3>${wine.name}</h3>
                <p>Price: $${wine.price}</p>
                <p>Region: ${wine.region}</p>
                <p>Description: ${wine.description}</p>
            </li>
        `
        }).join('') // takes away comma

        wineList.innerHTML = wines
    }   

    // static displayWineForm() {
    //     const wineForm = document.getElementById("new-wine-section")
    //     if (wineForm.style.display === "none") {
    //         wineForm.style.display = "block";
    //       } else {
    //         wineForm.style.display = "none";
    //     }
    // }

}