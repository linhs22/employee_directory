import React from "react";
// import Main from "./components/main/main";
import Wrapper from "./components/wrapper/wrapper";
import Header from "./components/header/header";
import SearchName from "./components/search/search";
import employeeList from "./components/employeeList/employeeList";


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <SearchName />
        <employeeList />
      </Wrapper>
    </div>
  );
}

export default App;