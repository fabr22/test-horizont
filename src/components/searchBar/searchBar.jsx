import "./searchBar.css";

const SearchBar = ({ search }) => {
  const handleSearch = (e) => {
    search(e);
  };
  return (
    <div className="searchBarWrapper">
      <input
        className="searchBarInput"
        placeholder="Введите название фотографии"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
