import './App.css';
import Products from "./component/products";
// import { useState, useEffect } from "react";
function App() {
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data));
  // })
  return (
    <div className="App">
      {/* <h1>Vendor Table</h1> */}
      {/* <ul>
        {
          items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))
        }
      </ul> */}
      < Products />
    </div>
  );
}

export default App;
