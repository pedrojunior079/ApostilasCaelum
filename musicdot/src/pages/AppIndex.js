import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";

import Container from "../layout/Container";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";


function AppIndex(){
    return(
        <Router>
           <Navbar/>
        <Container customClass="minHeight">   
           <Routes> 
              <Route path="/" element={<Home/>}/>
              <Route path="/sobre" element={<Sobre/>}/>
              <Route path="/contato" element={<Contato/>}/>
            </Routes>
        </Container>
        <Footer/>    
        </Router>
    )
}

export default AppIndex;