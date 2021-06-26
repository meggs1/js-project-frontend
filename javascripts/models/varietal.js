class Varietal {
    static all = []
    // static dropDownOptions = []
    //destructoring

    constructor({id, name, description}) {
        this.id = id
        this.name = name
        this.description = description
        Varietal.all.push(this)
    }

    render() {
        const li = document.createElement("li")
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        const newWineAnchor = document.createElement("a")
        const wineForm = document.createElement("form")
        const showWinesAnchor = document.createElement("a")
        
        wineForm.id = `wine-form-${this.id}`
        li.id = `varietal-li`

        h2.innerText = this.name
        p.innerHTML = `
            <p>${this.description}</p>
        `
        showWinesAnchor.innerHTML = `
            <a id="varietal-${this.id}-wines" href="##">See Wines</a>
        `
        newWineAnchor.innerHTML = `
            <a id="new-wine" href="###">New Wine</a>
        `

        varietalList.appendChild(li)
        li.appendChild(h2)
        li.appendChild(p)
        p.appendChild(showWinesAnchor)
        p.appendChild(newWineAnchor)
        li.appendChild(wineForm)
        showWinesAnchor.addEventListener("click", this.renderWines)
        newWineAnchor.addEventListener("click", this.displayWineForm)
    }

    getWines() {
        return Wine.all.filter(wine => this.id === wine.varietal_id )
    }

    renderWines = (e) => {
        debugger
        const wines = document.querySelector(".wine")

        if (wines) {
            //esc6
            const children = Array.from(e.target.parentNode.children)
            const wines = children.slice(1)
            wines.forEach((wine) => wine.remove())
        } else {
            this.getWines().forEach(element => element.render())
        }

        
    }

    displayWineForm = (e) => { // check why this needs to be an arrow function
        const wineForm = document.getElementById(`wine-form-${this.id}`)

        if (wineForm.style.display === "none") {
            wineForm.style.display = "block"
            
            wineForm.setAttribute('class', 'wine-form')
            // wineForm.setAttribute('onsubmit', 'return Wine.validateForm(this)')
            wineForm.dataset.id = this.id
            
            wineForm.innerHTML = `
                <h3>Add a new Wine:</h3>
                <label for="wine-name">Name</label>
                <input type="text" name="name" id="wine-name"><br>
                <label for="wine-region">Region</label>
                <input type="text" name="region" id="wine-region"><br>
                <label for="wine-description">Description</label>
                <textarea name="description" id="wine-description"></textarea>
                <br>
                <label for="wine-price">Price</label>
                <input type="number" name="price" id="wine-price" step="0.01"><br>
                </select><br>
                <input type="submit" value="Add Wine">
            `
            wineForm.addEventListener("submit", Wine.createWine)
            // wineForm.clear()
        } else {
            wineForm.style.display = "none";
        }
    }

    // addToDropDown() {
    //     const varietalOption = document.createElement("option")
    //     varietalOption.value = this.id
    //     varietalOption.innerText = this.name
    //     wineSelectVarietal.append(varietalOption)
    // }



}
