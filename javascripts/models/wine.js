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

}