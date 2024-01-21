const newData = {
  "id": 1200,
  "title": "English FA CUP",
  "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
  "price": 310,
  "discountPercentage": 2.92,
  "rating": 4.92,
  "stock": 514,
  "brand": "Golden",
  "category": "home-decoration",
  "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/30/1.jpg",
    "https://i.dummyjson.com/data/products/30/2.jpg",
    "https://i.dummyjson.com/data/products/30/3.jpg",
    "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
  ]
}


  fetch("http://localhost:4500/products",{
    method:"POST",
    body:JSON.stringify(newData),
    headers:{
      "Content-Type":"application/json"
    }
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });



