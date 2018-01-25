const express = require('express')
const app = express()
const port = 3101
const bodyParser = require('body-parser')

let foods = [
  { id: 1, cuisine: "Thai", dish: "tom kha", price: 9 },
  { id: 2, cuisine: "Hawaiian", dish: "kalua pork", price: 8 },
  { id: 3, cuisine: "Mexican", dish: "tacos dorados", price: 6 },
  { id: 4, cuisine: "Vietnamese", dish: "banh mi", price: 8 },
  { id: 5, cuisine: "American", dish: "mac & cheese", price: 8 },
  { id: 6, cuisine: "Korean", dish: "rice bowl", price: 6 },
  { id: 7, cuisine: "Cuban", dish: "medianoche", price: 8 },
  { id: 8, cuisine: "Japanese", dish: "tuna roll", price: 12 },
  { id: 9, cuisine: "American", dish: "grilled cheese", price: 6 },
  { id: 10, cuisine: "Chinese", dish: "pork bao", price: 4 },
  { id: 11, cuisine: "Italian", dish: "stromboli", price: 11 }
]

let faves = []

// MIDDLEWARE
app.use(bodyParser.json())

// ENDPOINTS
app.get('/api/foods', (req, res) => {
  res.status(200).send(foods)
})

app.get('/api/faves', (req, res) => {
  res.status(200).send(faves)
})

app.post('/api/faves', (req, res) => {
  if (!faves.find(fave => fave.id === req.body.food.id)) faves.push(req.body.food)
  res.status(200).send(faves)
})

app.delete('/api/faves/:id', (req, res) => {
  // console.log("ID", req.params.id)
  const deleteIndex = faves.findIndex(fave => fave.id === +req.params.id);
  faves.splice(deleteIndex, 1);
  res.status(200).send(faves)
})

app.put('/api/foods', (req, res) => {
  // console.log("promo", req.query.promo)
  foods = foods.map(food => {
    let price = food.price - +req.query.promo
    price = price < 0 ? 0 : price
    return Object.assign(food, { price: price })
  })
  res.status(200).send(foods)
})

// LISTEN
app.listen(port, () => {
  console.log(`Listening on ${port}.`)
})