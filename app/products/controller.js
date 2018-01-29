import Product from './model';

const productController = {
  getProducts(req, res) {
    res.json({products: Product.getProducts()})
  },
  getProductsByCategory(req, res) {
    const {name} = req.params;
    const result = Product.getProductsByCategory(name);
    if (result.length <= 0) {
      res.status(500).send('There is not matched category!')
    } else {
      res.json({products: result})
    }
  }
}

export default productController