import { useEffect, useState } from "react";

import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ProductList from "./components/ProductList/ProductList";
import Loader from "./components/Loader/Loader";
import { requestProducts } from "./components/ApiServises/ApiServises";

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

        const data = await requestProducts();

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
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ProductList products={products} />
    </div>
  );
};

export default App;
