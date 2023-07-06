import "./App.css";
import Title from "./components/title/title";
import SearchBar from "./components/searchBar/searchBar";
import Content from "./components/content/content";

import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  return (
    <div className="wrapper">
      <Title>Фотогалерея</Title>
      <SearchBar search={handleSearch} />
      <Content searchTerm={searchTerm} />
    </div>
  );
}

export default App;
