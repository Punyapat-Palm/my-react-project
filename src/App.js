import { useState } from "react";
import tattoos from "./data/tattoos";
import "./App.css";
import AppHeader from "./components/appheader";
import TattooItem from "./components/tattooItem";
import TattooPost from "./components/TattooPost";
import Search from "./components/Search";

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState("");
  function onPicClick(theTattoo) {
    setSelectedTattoo(theTattoo);
  }
  function onCloseClick() {
    setSelectedTattoo(null);
  }
  const tattooElm = tattoos
    .filter((tattoo) => {
      return tattoo.title.includes(searchText);
    })
    .map((tattoo, index) => {
      return <TattooItem key={index} tattoo={tattoo} onPicClick={onPicClick} />;
    });
  let tattooPost = null;
  if (!!selectedTattoo) {
    tattooPost = (
      <TattooPost tattoo={selectedTattoo} onBgClick={onCloseClick} />
    );
  }
  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <Search value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{tattooElm}</div>
        </div>
      </section>
      {tattooPost}
    </div>
  );
}

export default App;
