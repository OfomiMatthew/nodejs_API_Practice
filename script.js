// async function fetchData() {
//   const res = await fetch(`http://localhost:4500/products`);
//   const data = await res.json();
//   console.log(data);
// }

// fetchData();

function getData(x){
  fetch(`http://localhost:4500/products?id=${x}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
}

getData(1);

