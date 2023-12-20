import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const FetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    console.log(data);
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const  selectPageHandler = (selectedPage)=>{
    setPage(selectedPage)
  }

  return (
    <div className="App">
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span> {prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span>⬅️</span>
          {
          [...Array(products.length / 10)].map((_,i)=>{
            return <span onClick={()=>selectPageHandler(i+1)} className={page === i+1 ?"pagination__selected":""}>{i+1}</span>
          })
          }
          <span>➡️</span>
        </div>
      )}
    </div>
  );
}
export default App;
