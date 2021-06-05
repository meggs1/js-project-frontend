class Varietal {
    static all = []
    //destructoring
    constructor({id, name, description, wines = []}) {
        this.id = id
        this.name = name
        this.description = description
        this.wines = wines
        Varietal.all.push(this)
    }

    render() {
        const h4 = document.createElement("h4")
        const a = document.createElement("a")
        const p = document.createElement("p")
        a.id = `varietal-${this.id}`
        a.href = "#"
        a.innerText = this.name
        a.addEventListener("click", this.renderWines)
        p.innerText = this.description
        h4.appendChild(a)

        varietalList.appendChild(h4)
        varietalList.appendChild(p)
    }

    getWines() {
        return Wine.all.filter(wine => this.id === wine.varietal_id )
    }

    renderWines = (e) => {
        const nextLiSibling = e.target.nextSibling
        if (nextLiSibling) {
            const children = Array.from(e.target.parentNode.children)
            const lis = children.slice(1)
            lis.forEach((li) => li.remove())
        } else {
            this.getWines().forEach(element => element.render())
        }
    }

}