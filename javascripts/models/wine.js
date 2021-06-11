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

    // renderWine() {
    //     const h4 = document.createElement("h4")
    //     const a = document.createElement("a")
    //     const p = document.createElement("p")
    //     a.id = `wine-${this.id}`
    //     a.href = "#"
    //     a.innerText = this.name
    //     p.innerText =  `${this.price} - ${this.region} - ${this.description}`

    //     h4.appendChild(a)

    //     wineList.appendChild(h4)
    //     wineList.appendChild(p)
    // }

    render() {
        let varietalAnchor = document.getElementById(`varietal-${this.varietal_id}`)

        const li = document.createElement('li')

        li.innerHTML = `
            <h4><a href="#" id="wine-${this.id}">${this.name} </a></h4>
            <p>Price: $${this.price} </p>
            <p>Region: ${this.region} </p>
            <p>Description: ${this.description} </p>
        `
        // parentNode is 'p'
        varietalAnchor.parentNode.appendChild(li)
        // add 'new wine' button
    }

    static handleSearch(e) {
        e.preventDefault()
        const searchString = e.target.value.toLowerCase()
        const filteredWines = Wine.all.filter( wine => {
            return wine.name.toLowerCase().includes(searchString)
        })
        console.log(filteredWines)
    }
   
}