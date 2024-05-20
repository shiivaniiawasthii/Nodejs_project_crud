const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err, 22);
      });
    });
  }

  static fetchAll(callBackfunc) {
    getProductsFromFile(callBackfunc);
  }
  static findById(id, cb) {
    console.log(id, "id in model");
    getProductsFromFile((products) => {
      console.log(products, "search");
      const product = products.find((p) => p.id == id);
      cb(product);
      console.log(product, "product");
    });
  }
};
