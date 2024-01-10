const express = require('express');
const app= express();

const products = [
  {
    id: 1,
    name: "table wooden",
    price: 200,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 2,
    name: "chair leather",
    price: 150,
    image: "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    name: "lamp modern",
    price: 50,
    image: "https://images.pexels.com/photos/911014/pexels-photo-911014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 4,
    name: "sofa fabric",
    price: 500,
    image: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 5,
    name: "bedroom set",
    price: 800,
    image: "https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 6,
    name: "bookshelf oak",
    price: 120,
    image: "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 7,
    name: "coffee table glass",
    price: 180,
    image: "https://images.pexels.com/photos/705707/pexels-photo-705707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 8,
    name: "dining chair set",
    price: 250,
    image: "https://images.pexels.com/photos/211189/pexels-photo-211189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 9,
    name: "desk wooden",
    price: 300,
    image: "https://images.pexels.com/photos/261620/pexels-photo-261620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 10,
    name: "mirror vintage",
    price: 70,
    image: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

app.get('/api/products', (req, res) => {
    let filterProducts = [];
    if(req.query.search) {
        filterProducts = products.filter((product) => product.name.includes(req.query.search));
        return res.send(filterProducts)
    }
    setTimeout(() => {
        res.send(products)
    }, 3000)
})

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`)
})
