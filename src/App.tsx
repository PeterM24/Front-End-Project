import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListOfReviews from "./components/ListReviews";

function App(): JSX.Element {


  return (
    <div className="App">
      <Header />
      <ListOfReviews />
    </div>
  );
}

export default App;
