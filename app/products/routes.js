import controller from './controller'

export function setup(router) {
  router
    .get('/', (req, res) => 
      res.send('this is product routes')
    )
    .get('/category', controller.getProducts)
    .get('/category/:name', controller.getProductsByCategory)
}