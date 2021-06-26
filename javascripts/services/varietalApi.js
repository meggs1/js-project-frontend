class VarietalApi {

    static fetchVarietals() {
        fetch('http://localhost:3000/varietals')
        .then(resp => resp.json())
        .then(json => json.forEach(varietalObject => {
            let varietal = new Varietal(varietalObject)
            varietal.render()
        }))

        .catch(err => console.log(err))
    }
}