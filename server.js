import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'

function setupRoutes(app) {
  const APP_DIR = `${__dirname}/app`
  const features = fs.readdirSync(APP_DIR).filter(
    file => fs.statSync(`${APP_DIR}/${file}`).isDirectory()
  )

  features.forEach(feature => {
    const router = express.Router()
    const routes = require(`${APP_DIR}/${feature}/routes.js`)

    routes.setup(router)
    app.get('/', (req, res) => res.send('Hello backend-challenge'))
    app.use(`/${feature}`, router)
  })
}

export function setup() {
  const app = express()
  const PORT = 3000

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  setupRoutes(app)

  app.listen(PORT, () => {
    console.log('Start server');
  })  
}
