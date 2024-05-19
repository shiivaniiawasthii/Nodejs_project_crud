const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (err, fileContent) => {
      let products = [];

      console.log(err, "err");
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err, 22);
      });
    });
  }

  static fetchAll(callBackfunc) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return callBackfunc([]);
      }
      return callBackfunc(JSON.parse(fileContent));
    });
  }
};
