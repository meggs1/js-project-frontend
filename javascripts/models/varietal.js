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
        const newWineAnchor = document.createElement("a")
        const wineForm = document.createElement("form")

        h3.innerText = this.name
        p.innerText = this.description
        p.innerHTML = `
            <p> ${this.description} <a id="varietal-${this.id}-wines" href="#">See Wines</a></p>
        `
        newWineAnchor.innerHTML = `
            <a id="new-wine" href="#">New Wine</a>
        `

        wineForm.dataset.id = this.id
        wineForm.id = `wine-form-${this.id}`
        wineForm.setAttribute('class', 'wine-form')
        
        wineForm.innerHTML = `
            <h3>Add a new Wine:</h3>
            <label for="wine-name">Name:</label>
            <input type="text" name="name" id="wine-name" required><br>
            <label for="wine-region">Region:</label>
            <input type="text" name="region" id="wine-region" required><br>
            <label for="wine-description">Description:</label>
            <input type="text" name="description" id="wine-description" required><br>
            <label for="wine-price">Price:</label>
            <input type="number" name="price" id="wine-price" required><br>
            </select><br>
            <input type="submit" value="Add Wine">
        `
        
        varietalList.appendChild(h3)
        varietalList.appendChild(p)
        varietalList.appendChild(newWineAnchor)
        varietalList.appendChild(wineForm)
        p.addEventListener("click", this.renderWines)
        newWineAnchor.addEventListener("click", this.displayWineForm)
                
        wineForm.addEventListener("submit", Wine.createWine)
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

    displayWineForm = (e) => {
        const wineForm = document.getElementById(`wine-form-${this.id}`)
        if (wineForm.style.display === "none") {
            wineForm.style.display = "block";
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
