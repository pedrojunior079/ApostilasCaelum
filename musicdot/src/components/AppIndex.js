import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Index from "./page/Index.js";
import Sobre from "./page/Sobre.js";

function AppIndex() {
    return (
      <Router>
          <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="/Sobre" element={<Sobre/>}/>
          </Routes>
      </Router>
    );
  }
  
  export default AppIndex;