import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import AboutContent from "./components/AboutContent"
import "./App.css"

function App() {
  return(
      <div className="container">
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}

export default App;