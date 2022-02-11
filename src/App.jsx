
import React from "react";
import "./style.css";
import Header from "./components/Header";
import Card from "./components/Card"
import SwipeButton from "./components/SwipeButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Card/>
      <SwipeButton />
    </div>
  );
}
export default App;
