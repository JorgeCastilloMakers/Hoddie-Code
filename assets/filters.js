


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



