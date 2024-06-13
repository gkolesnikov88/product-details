import React, { useEffect, useState } from "react";
import "./App.css";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  const [productData, setProductData] = useState(null);
  const getCurrentProductData = async (productId = "voyager-hoodie") => {
    const result = await fetch(
      `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/${productId}`,
      { method: "GET", headers: { "Content-Type": "appliaction/json" } }
    );

    if (result.ok) {
      setProductData(await result.json());
    }
  };

  useEffect(() => {
    getCurrentProductData();
  }, []);

  return (
    <div className="App">
      {!productData && <div className="loading-message">...Loading</div>}
      {productData && <ProductDetails productData={productData} />}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
