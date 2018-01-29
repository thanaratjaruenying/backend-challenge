import db from '../../db'

const Product = {
  getProducts() {
    return db.products.map(p => p.brand)
  },
  getProductsByCategory(name) {
    const products = db.products.filter(p => p.category === name)
    return products.map(p => p.brand)
  }
}

export default Product