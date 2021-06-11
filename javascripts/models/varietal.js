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

        // const h3 = document.createElement("h3")
        // // const a = document.createElement("a")
        // const p = document.createElement("p")

        // h3.innerText = this.name
        // p.innerHTML = `
        //     <p>${this.description}</p>
        //     <a id="varietal-${this.id}" href="#">See Wines</a>
        // `
        // li.class = "varietal"
        // li.id = `varietal-${this.id}`

        // varietalList.appendChild(h3)
        // varietalList.appendChild(p)

        // p.addEventListener("click", this.renderWines)

        const li = document.createElement("li")
        
        li.innerHTML = `
        <li class="varietal" id="varietal-${this.id}">
            <h3> ${this.name} </h3>
            <p>${this.description} <a id="varietal-${this.id}" href="#">See Wines</a></p>
            
            </li>
        `
        
        li.addEventListener("click", this.renderWines)
        varietalList.appendChild(li)

    }

    getWines() {
        return Wine.all.filter(wine => this.id === wine.varietal_id )
    }

    renderWines = (e) => {
        this.getWines().forEach(element => element.render())
    }

    addToDropDown() {
        const varietalOption = document.createElement("option")
        varietalOption.value = this.id
        varietalOption.innerText = this.name
        wineSelectVarietal.append(varietalOption)
    }



}