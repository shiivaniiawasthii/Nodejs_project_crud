const db = require("../utils/database");

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
  static findById(id, cb) {
    console.log(id, "id in model");
  }
};
