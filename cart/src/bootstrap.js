import faker from 'faker'

const mount = (el) => {
    el.innerHTML = `<div>You have ${faker.random.number()} items in your cart</div>`
    // React.DOM.render(<App />, el)
}

if(process.env.NODE_ENV === 'development') {
    // Assuming the "container" does not have this in the DOM
    // we know we are running in isolation
    const el = document.querySelector("#dev-cart")
    if(el) {
        mount(el)
    }
}

export { mount }