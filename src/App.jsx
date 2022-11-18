import React from "react";
import { CTA, Brand, NavBar } from "./components";
import {
  Blog,
  Footer,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <CTA />
    </div>
  );
}

export default App;
