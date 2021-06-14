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
        const p = document.createElement("p")

        h3.innerText = this.name
        p.innerText = this.description
        p.innerHTML = `
            <p> ${this.description} <a id="varietal-${this.id}-wines" href="#">See Wines</a></p>
        `

        
        
        varietalList.appendChild(h3)
        varietalList.appendChild(p)
        p.addEventListener("click", this.renderWines)
    }

    getWines() {
        return Wine.all.filter(wine => this.id === wine.varietal_id )
    }

    renderWines = (e) => {
        const liSibling = e.target.nextSibling
        if (liSibling) {
            const children = Array.from(e.target.parentNode.children)
            const lis = children.slice(1)
            lis.forEach((li) => li.remove())
        } else {
            this.getWines().forEach(element => element.render())
        }
    }

    addToDropDown() {
        const varietalOption = document.createElement("option")
        varietalOption.value = this.id
        varietalOption.innerText = this.name
        wineSelectVarietal.append(varietalOption)
    }



}
