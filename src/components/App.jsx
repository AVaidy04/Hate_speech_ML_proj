import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";
import {BrowserRouter, Route, Router} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Category/>
      <Footer />
    </div>
  );
}

export default App;
