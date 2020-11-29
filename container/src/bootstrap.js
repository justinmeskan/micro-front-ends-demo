import { mount as mountProduct } from 'products/ProductsIndex'
import { mount as mountCart } from 'cart/CartShow'

mountProduct(document.querySelector("#prod-products"))
mountCart(document.querySelector("#prod-cart"))

console.log('Container!')