const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href='/api/products'>products</a>`);
});

app.get("/api/products", (req, res) => {
  const prod = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(prod);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const sp = products.find((product) => product.id === Number(id));
  res.json(sp);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sorted = [...products];
  if (search) {
    sorted = sorted.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if(limit){
    sorted = sorted.slice(0,Number(limit))
  }
  if(sorted.lenght < 1){
    res.status(200).send('no products matched your search')
  }
  res.json(sorted);
});

app.listen(5000, () => {
  console.log("listening on port 5000....");
});
