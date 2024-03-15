import { useEffect, useState } from "react";

import styles from "./App.module.css";

import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://api.unsplash.com");
      console.log("response", response);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
}

export default App;
