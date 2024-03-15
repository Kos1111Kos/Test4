import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.css";

import SearchBox from "./components/SearchBox/SearchBox";
import { Grid } from "react-loader-spinner";

const App = () => {
  //мережеві запити обовьязкові
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  //выводим данные
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get("https://dummyjson.com/products");
        setProducts(data.products);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>photo</h1>
      {isError && (
        <p style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
          шось пішло не так
        </p>
      )}
      {isLoading && (
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      )}
      <ul>
        {products !== null &&
          Array.isArray(products) &&
          products.map((product) => (
            <li key={product.id}>
              <img width={300} src={product.thumbnail} alt={product.title} />
              <h3>Product: {product.title}</h3>
              <p>{product.description}</p>
              <div>
                <span>Brand: {product.brand}</span>
                <span>Price: ${product.price}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
