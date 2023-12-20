import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const FetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="App">
      {products.length > 0 && (
        <div className="products">
          {products.map((prod) => {
            return <span className="products__single" key={prod.id}>
                     <img src={prod.thumbnail} alt= {prod.title}/>
                     <span> {prod.title}</span>
                   </span>;
          })}
        </div>
      )}
    </div>
  );
}
export default App;
