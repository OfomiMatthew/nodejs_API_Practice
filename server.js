const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 4500;

http
  .createServer((req, res) => {
    let parsedUrl = url.parse(req.url, true);
    let product = fs.readFileSync("./product.json", "utf-8");
    console.log(parsedUrl);
    if (
      parsedUrl.pathname == "/products" &&
      parsedUrl.query.id === undefined &&
      req.method == "GET"
    ) {
      res.end(product);
    } else if (
      parsedUrl.pathname == "/products" &&
      parsedUrl.query.id !== undefined &&
      req.method == "GET"
    ) {
      let productArr = JSON.parse(product);
      let productData = productArr.find((data) => {
        return data.id == parsedUrl.query.id;
      });
      console.log(productData);
      if (!productData) {
        res.end("No data found!");
      }
      res.end(JSON.stringify(productData));
    }
  })

  .listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
