class Wine {
    static all = []

    constructor({id, name, region, price, description, varietal}) {
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
        if (Wine.validateForm(this) === true) {
            const wineName = e.target.children[2].value
            const wineRegion = e.target.children[5].value
            const wineDescription = e.target.children[8].value
            const winePrice = e.target.children[11].value
            const varietalId = e.target.dataset.id

            this.remove()
            return WineApi.handleNewWine(wineName, wineRegion, wineDescription, winePrice, varietalId)
        }
    }

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

    static validateForm(form) {
        const wineName = form.querySelector("#wine-name")
        const wineRegion = form.querySelector("#wine-region")
        const wineDescription = form.querySelector("#wine-description")
        const winePrice = form.querySelector("#wine-price")
        if(wineName.value == "" || wineRegion.value == "" || wineDescription.value == "" || winePrice.value == "") {
            alert("Error: You must fill out all fields!")
            return false
        } else if (Wine.findByName(wineName.value)) {
            alert("Error: This wine has already been added!")
            return false
        }
        alert("New wine added!")
        return true
    }

    static findByName(name) {
        return this.all.find(function(wine){
            return wine.name===name
        })
    }

    



}