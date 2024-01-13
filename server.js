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
    } else if (parsedUrl.pathname == "/products" && req.method == "POST") {
      let productData = "";
      req.on("data", (chunk) => {
        productData += chunk;
      });

      req.on("end", () => {
        // console.log(productData);
        let productArr = JSON.parse(product);
        let newData = JSON.parse(productData);
        productArr.push(newData);
        fs.writeFile("./product.json", JSON.stringify(productArr), (err) => {
          if (err) {
            res.end(err);
          } else {
            res.end("Product added");
          }
        });
      });
    } else if (parsedUrl.pathname == "/products" && req.method == "DELETE") {
      let id = parsedUrl.query.id;
      let productArray = JSON.parse(product);
      let indexProduct = productArray.findIndex((el) => {
        return el.id == id;
      });
      productArray.splice(indexProduct, 1);
      fs.writeFile("./product.json", JSON.stringify(productArray), (err) => {
        if (err) {
          console.log(err);
        } else {
          res.end(JSON.stringify({ message: "data deleted" }));
        }
      });
    } 
    else if (parsedUrl.pathname === "/products" && req.method == "PUT") {
      // let id = parsedUrl.query.id;
      let products = "";
      req.on("data", (chunk) => {
        products += chunk;
      });

      req.on("end", () => {
        let productArr = JSON.parse(product);
        let productOBJ = JSON.parse(products);
        let indexItem = productArr.findIndex((p) => {
          return p.id == parsedUrl.query.id;
        });
        if (indexItem !== -1) {
          productArr[indexItem] = productOBJ;
          fs.writeFile("./product.json", JSON.stringify(productArr), (err) => {
            if (err) {
              console.log(err);
            } 
            else {
              res.end(JSON.stringify({ "message": "Data updated" }));
            }
          });
        } 
        else {
          res.end(JSON.stringify({ message: "no data dound" }));
        }
      });
    }
  })

  .listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
