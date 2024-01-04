import React from "react";
import "./style.css";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { MainContent } from "./components/MainContent";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Message />
        <MainContent />
      </div>
    </Provider>
  );
};

export default App;
