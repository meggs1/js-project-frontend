class Wine {
    static all = []

    constructor({id, name,region, price, description, varietal}) {
        this.id = id
        this.name = name
        this.price = price
        this.region = region
        this.description = description
        this.varietalId = varietal.id
        Wine.all.push(this)
    }

    render() {
        let varietalAnchor = document.getElementById(`varietal-${this.varietalId}`)

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


    static showWineForm() {
        let anchor = document.getElementById(`new-wine-button`)

        const wineForm = document.createElement('wine-form')

        wineForm.innerHTML = `
            <h3>Add a new Wine:</h3>
            <label for="wine-name">Name:</label>
            <input type="text" name="name" id="wine-name"><br>
            <label for="wine-region">Region:</label>
            <input type="text" name="region" id="wine-region"><br>
            <label for="wine-description">Description:</label>
            <input type="text" name="description" id="wine-description"><br>
            <label for="wine-price">Price:</label>
            <input type="number" name="price" id="wine-price"><br>

            <input type="submit" value="New Wine">
        `
        anchor.parentNode.appendChild(wineForm)
    }
    

}

            // <label for="wine-varietal">Varietal:</label>
            // <select id="varietal_id">
            // </select><br>