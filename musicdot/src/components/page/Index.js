import React from "react";
import {Link} from "react-router-dom";


function Index() {
    return (
      <div>
         <h1>MusicDot</h1>
         <h2>Bem-vindo a MusicDot, seu portal sde cursos de musica online.</h2>
         <ul>
            <li>Confira nossas promoções</li>
            <li>Receba informações sobre nossos lançamentos por email</li>
            <li>Navegue por todos nossos cursos disponiveis</li>
            <li>Aprenda sem sair de casa</li>
            <li>
                <Link to="/Sobre">Sobre</Link>
            </li> 
         </ul>
      </div>
    );
  }
  
  export default Index;