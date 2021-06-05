class VarietalApi {
    static fetchVarietals() {
        fetch('http://localhost:3000/varietals')
        .then(resp => resp.json())
        .then(json => json.forEach(varietalObject => new Varietal(varietalObject)))
        .catch(err => console.log(err))
    }
}