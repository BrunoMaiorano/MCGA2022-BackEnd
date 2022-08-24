let functions = require('./functions')
const express = require('express')
const products = require('./data/products')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', (req, res) => {
    res.json(
        products
    )
  })

  app.get('/products/:id', (req, res) => {
    res.json(
        products.filter( product => req.params.id == product.id)
    )
  })

  

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:3000/`)
})
