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
      <div className="page-wrapper">
        <div className="content-wrapper">
          {!productData && <div className="loading-message">...Loading</div>}
          {productData && <ProductDetails productData={productData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
