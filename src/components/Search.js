import "./Search.css";

function Search(props) {
  const { value, onValueChange } = props;
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="search one to buy"
        value={value}
        onChange={(event) => {
          onValueChange(event.target.value);
        }}
      />
    </div>
  );
}

export default Search;
