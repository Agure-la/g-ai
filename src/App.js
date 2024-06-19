import React from "react";

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
import { Cta, Brand, Navbar } from "./components";
import './App.css';
import './index.css';

const App = () => {
    return (
        <div>
           <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
           </div>
        </div>
    )
}

export default App;