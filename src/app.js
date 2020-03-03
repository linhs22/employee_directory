import React from "react";
import Main from "./components/main/main";
import Wrapper from "./components/wrapper/wrapper";
import Header from "./components/header/header";
import SearchName from "./components/search/search";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <SearchName />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;