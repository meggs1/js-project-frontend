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

    static getAll() {
        return this.all
    }

}