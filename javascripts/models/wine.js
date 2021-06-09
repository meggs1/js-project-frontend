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

}