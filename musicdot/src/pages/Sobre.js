import React from 'react';
import styles from "./Sobre.module.css";
import matriz from "../img/matriz-musicdot.png";
import {Link} from "react-router-dom";
import familia from "../img/familia-tupfeln.jpg";


function Sobre(){
    return (
        
        <section className={styles.sobre_container}>
                       
            <h1>Sobre a empresa</h1>
             
            <p>
               A MusicDot é a maior escola online de música em todo o mundo.
			   Fundada em 1932, possui estúdios em 124 países, sendo líder de 
               mercado com mais de 90% de participação em 118 deles.
               Nossa matriz fica em <a href="https://maps.google.com.br/?q=190,GabrielDequech,Mafra,SC">
               Mafra, em Santa Catarina</a>. De lá saém grande parte de nossas gravações de nossos cursos. Nossa matriz:
            </p>
                 <img src={matriz} alt="Matriz da MusicDot"/>
                 <p>
                     Matriz da MusicDot
                 </p>       
            <p>
                Assine os cursos da MusicDot. Acesse <Link to="/">nosso site </Link>ou entre em contato
                se tiver dúvidas. Conheça também nossa historia e nossos diferenciais.
            </p>

            
                <h2>Historia</h2>

                  <img src={familia} alt="Familia Tupfeln"/> 
              <p>
                Familia Tupfeln
              </p>

              <p>
                A fundação em 1932 ocorreu no momento da descoberta economica de cursos por stream online
                no interior de Santa Catarina. A família Tupfeln, tradicional da região, invsestiu todas as
                suas economias nessa nova inciativa revolucionario para a época. A fundadora Frau Olaf Tupfeln,
                dotada de particular visão administrativa, guiou os negocios da empresa durante mais de 50 anos, 
                muitos deles ao lado de seu filho Ernst Noten Tupfeln, atual CEO. O nome da empresa é inspirado
                no nome da família.
              </p>

              <p>
			  	O crescimento da empresa foi praticamente instantâneo. Nos primeiros 5 anos, já atendia 18 países.
			    Bateu a	marca de 100 países	em apenas 15 anos de existência. Até hoje, já atendeu 2 bilhões de usuários	
                diferentes, em bilhões de diferentes pedidos.
	          </p>
	
	          <p>
			    O crescimento em número de funcionários	é também assombroso. Hoje, é a maior empregadora do Brasil,	
                mas	mesmo após apenas 5	anos de	sua	existência,	já possuía 30 mil funcionários.	Fora do Brasil,	
                há 240 mil funcionários, além dos 890 mil brasileiros nas instalações de Mafra e nos escritórios
                em todo	país.
	          </p>
           
              <p>
                Dada a importância econômica da	empresa	para o Brasil, a família Tüpfeln já	recebeu	diversos prêmios,
                homenagens e condecorações.	Todos os presidentes do	Brasil já visitaram	as instalações da MusicDot,	
                além de	presidentes	da União Européia, Ásia	e o	secretário-geral da	ONU.
              </p>

            

            <h2>Diferenciais</h2>
            <ul>
                <li>Menor preço do mercado, garantido</li>
                <li>Se voce achar um serviço maier barato, leva 1 mes de graça</li>
                <li>Pague em reais, dolares, euros, libras, doggecoins, litecoins ou bitecoins</li>
                <li>Todas as compras acompanham acesso a Alura</li>
                <li>Maior escolar de música online do mundo</li>
                <li>Atendimento	via	telefone, email, chat, twitter, facebook, instagram, ICQ, WhatsApp,
                 SMS, carta, fax e telegrama</li>
                 <li>Presente em 124 paises</li>
                 <li>Mais de um milhão de funcionarios em todo o mundo</li>
            </ul>         
            
        </section>
    );
}

export default Sobre;