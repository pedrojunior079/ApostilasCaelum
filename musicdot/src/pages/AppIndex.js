import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Historia from "./Historia";
import { Link } from 'react-router-dom';
import Container from "../layout/Container";


function AppIndex(){
    return(
        <Router>
           <div>
           <Link to="/">Home</Link>
           <Link to="/sobre"> Sobre</Link>
           <Link to="/historia"> Historia</Link>
           </div>
        <Container customClass="minHeight">   
           <Routes> 
              <Route path="/" element={<Home/>}/>
              <Route path="/sobre" element={<Sobre/>}/>
              <Route path="/historia" element={<Historia/>}/>
            </Routes>
        </Container>
        <p>footer</p>    
        </Router>
    )
}

export default AppIndex;