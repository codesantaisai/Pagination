import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const FetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data);

    if (data && data.products) {
      console.log(data.products);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
