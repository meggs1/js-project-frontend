class VarietalApi {
    // constructor(baseURL) {
    //     this.baseURL =`${baseURL}/varietals`
    // }

    static fetchVarietals() {
        fetch('http://localhost:3000/varietals')
        .then(resp => resp.json())
        .then(json => json.forEach(varietalObject => {
            let varietal = new Varietal(varietalObject)
            // varietal.addToDropDown()
            varietal.render()
        }))

        .catch(err => console.log(err))
    }
}