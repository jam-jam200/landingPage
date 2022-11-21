import React, { Suspense, lazy } from "react";
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

const Hero = lazy(() => <Header />);
const BrandSection = lazy(() => <Brand />);

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Suspense
          className="loading"
          fallback={<div>Please Wait...Hero Page is Loading</div>}
        >
          <Hero />
        </Suspense>
      </div>
      <Suspense
        className="loading"
        fallback={<div>Please Wait...Section is Loading</div>}
      >
        <BrandSection />
      </Suspense>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Suspense
        className="loading"
        fallback={<div>Please Wait...Blog is Loading</div>}
      >
        <Blog />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
