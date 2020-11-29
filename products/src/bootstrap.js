import faker from 'faker'


const mount = (el) => {
    let products = ''
    for (let i = 0; i <5; i++) {
        const name = faker.commerce.productName()
        products += `<div> ${name} </div>`
    }
    el.innerHTML = products
    // React.DOM.render(<App />, el)
}

if(process.env.NODE_ENV === 'development') {
    // Assuming the "container" does not have this in the DOM
    // we know we are running in isolation
    const el = document.querySelector("#dev-products")
    if(el) {
        mount(el)
    }
}

export { mount }