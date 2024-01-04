import React from "react";
import "./style.css";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <div>
      <Header />
      <Message />
      <MainContent />
    </div>
  );
}

export default App;
