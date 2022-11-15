
const filterType = () => {
    const productsList = products.filter(
        (product) => product.collection.toUpperCase() === tipo.toUpperCase()
      );
      if(!productsContainer){
        return
      }
    productsContainer.innerHTML = "";
    productsList.map(renderCardProducts).join("");
}

const filterTemplate = () => {
    let productFilter = products.filter((producto) => producto.id === Number(idProduct));
    renderProductTemplate(productFilter)
}
const renderFilters = () => {
    if (tipo === "Backend"){

        filters.innerHTML = `
        <label for="category">Category</label>
        <select name="Category" id="category">
            <option value="0"></option>
            <option value="hoddie">Hoddie</option>
            <option value="sweatshirt">Sweatshirt</option>
            <option value="t-shirt">T-Shirt</option>
            <option value="snapback">Snapback</option>
        </select>
        <label for="size">Size</label>
        <select name="size" id="size">
        <option value="0"></option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="extra-large">Extra Large</option>
        <option value="extra-extra-large">Extra Extra Large</option>
        <option value="Only size">Only Size</option>
        </select>
        <label for="technologies">Technologies</label>
        <select name="technologies" id="technologies">
            <option value="0"></option>
            <option value="php">PHP</option>
            <option value="mysql">MYSQL</option>
            <option value="kotlin">KOTLIN</option>
            <option value="c#">C#</option>
            <option value="ruby">RUBY</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="c++">C++</option>
            <option value="python">PYTHON</option>
            <option value="mongodb">MONGODB</option>
        </select>
        `
        return
    }else if (tipo === "Frontend"){
        filters.innerHTML = `
        <label for="category">Category</label>
        <select name="Category" id="category">
            <option value="0"></option>
            <option value="hoddie">Hoddie</option>
            <option value="sweatshirt">Sweatshirt</option>
            <option value="t-shirt">T-Shirt</option>
            <option value="snapback">Snapback</option>
        </select>
        <label for="size">Size</label>
        <select name="size" id="size">
            <option value="0"></option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
            <option value="extra-extra-large">Extra Extra Large</option>
            <option value="Only size">Only Size</option>
        </select>
        <label for="technologies">Technologies</label>
        <select name="technologies" id="technologies">
            <option value="0"></option>
            <option value="html">HTML</option>
            <option value="css3">CSS3</option>
            <option value="react">REACT</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="vue-js">VUE JS</option>
            <option value="unity">UNITY</option>
            <option value="sass">SASS</option>
            <option value="typescript">TYPESCRIPT</option>
            <option value="gatsby">GATSBY</option>
        </select>
        `
    }
}


const handleFilters = () =>{
    const categoryFilter = document.getElementById('category').value
    const sizeFilter = document.getElementById('size').value
    const techFilter = document.getElementById('technologies').value

    filter(categoryFilter, sizeFilter, techFilter)



    
    
}

const filterError = () =>{
    alert("Try to choose some value")
}
const renderFilterResult = (filter) =>{
    if (!filter.length){
        productsContainer.innerHTML = `<h2>Sorry, but there are no matches. Try other values please.</h2>`
        return
    }else{
        productsContainer.innerHTML = ``;
        filter.map(renderCardProducts).join(""); 
    }
}
const filter = (category, size, tech)=> {
    let filterCollection = products.filter(product => product.collection.toLowerCase() === tipo.toLowerCase())

    if(category == 0 && size == 0 && tech == 0 ) {
        filterError()
    }else if(size == 0 && tech == 0){
        let filter = filterCollection.filter(product => product.category.toUpperCase() == category.toUpperCase() )
        renderFilterResult(filter)
    }else if(category == 0 && tech == 0 ){
        let filter = filterCollection.filter(product => product.size.includes(size))
        renderFilterResult(filter)
    }else if (category == 0 && size == 0){
        let filter = filterCollection.filter(product => product.technologie.toUpperCase() == tech.toUpperCase())
        renderFilterResult(filter)
    }else if(category == 0){
        let filter = filterCollection.filter(product => product.size.includes(size) && product.technologie.toUpperCase() == tech.toUpperCase() )
        renderFilterResult(filter)
    }else if(size == 0){
        let filter = filterCollection.filter(product => product.category.toUpperCase() == category.toUpperCase() 
        && product.technologie.toUpperCase() == tech.toUpperCase() )
        renderFilterResult(filter)
    }else if(tech == 0){
        let filter = filterCollection.filter(product => product.category.toUpperCase() == category.toUpperCase() 
        && product.size.includes(size) )
        renderFilterResult(filter)
    }else{
        let filter = filterCollection.filter(product => product.category.toUpperCase() == category.toUpperCase() 
        && product.size.includes(size) && product.technologie.toUpperCase() == tech.toUpperCase() )
        renderFilterResult(filter)
    }

}

const resetFilter = () => {
    renderFilters(tipo)
    filterType()
}



