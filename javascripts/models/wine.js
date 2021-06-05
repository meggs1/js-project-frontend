class Wine {
    static all = []

    constructor({id, name,region, price, image_url, description, varietal}) {
        this.id = id
        this.name = name
        this.price = price
        this.image_url = image_url
        this.region = region
        this.description = description
        this.varietal = varietal
        Wine.all.push(this)
    }

    renderWine() {
        const h4 = document.createElement("h4")
        const a = document.createElement("a")
        const p = document.createElement("p")
        a.id = `wine-${this.id}`
        a.href = "#"
        a.innerText = this.name
        p.innerText =  `${this.price} - ${this.region} - ${this.description}`

        h4.appendChild(a)

        wineList.appendChild(h4)
        wineList.appendChild(p)
    }


}