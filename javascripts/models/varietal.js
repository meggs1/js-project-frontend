class Varietal {
    static all = []
    static dropDownOptions = []
    //destructoring
    constructor({id, name, description}) {
        this.id = id
        this.name = name
        this.description = description
        Varietal.all.push(this)
    }

    render() {
        const h3 = document.createElement("h3")
        const a = document.createElement("a")
        const p = document.createElement("p")
        const newWineA = document.createElement("a")
        h3.innerText = this.name
        p.innerHTML = `
            <p>${this.description}</p>
            <a id="varietal-${this.id}" href="#">See Wines</a>
        `
        newWineA.innerHTML = `
        <a id="new-wine-button" href="#">Add New ${this.name}</a>
    `

        varietalList.appendChild(h3)
        varietalList.appendChild(p)
        varietalList.appendChild(newWineA)

        newWineA.addEventListener("click", Wine.showWineForm)
        p.addEventListener("click", this.renderWines)
    }

    getWines() {
        return Wine.all.filter(wine => this.id === wine.varietalId )
    }

    renderWines = (e) => {
        this.getWines().forEach(element => element.render())
    }

    addToDropDown() {
        const varietalOption = document.createElement("option")
        varietalOption.value = this.id
        varietalOption.innerText = this.name
        // wineSelectVarietal.append(varietalOption)

    }

}
