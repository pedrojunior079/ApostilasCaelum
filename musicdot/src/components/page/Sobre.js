import React from "react";
import {Link} from "react-router-dom";

function Sobre(){
    return(
        
        <div>
            <h1>MusicDot | Sobre a empresa</h1>
            <Link href="./img/favicon.icon" rel="icon"/>
            <link	rel="stylesheet" href="css/sobre.css"/>
            <img src="./img/logo.svg" alt="MusicDot"/>

            <h1>Sobre a empresa</h1>

            <p>
               A MusicDot é a maior escola online de música em todo o mundo.
               fundada em 1932, possui estudios em 124 paises, sendo líder de mercado com mais
               de 90 % de participação en 118 deles. 
            </p>

            <p>
            Nossa matriz fica em <a	href="https://maps.google.com.br/?q=190,GabrielDequech,Mafra,SC"></a> Mafra, em Santa Catarina. 
            De lá, saem grande parte das gravações de nossos cursos. Nossa matriz: 
            </p>
            <figure>
                <img src="./img/matriz-musicdot.png" alt="Matriz da musicdot"/>
                <figcaption>
                    Matriz MusicDot
                </figcaption>
            </figure>

            <p>
               Assine os cursos da MusicDot. Acesse <a href="Index.js"> nosso site </a> ou entre em contato se tiver dividas.
               Conheça também <a href="Index.js"> nossa historia </a> e <a href="#diferenciais"> nossos diferencias </a>. 
            </p>

            <h2 id="historia">Historia</h2>

            <figure>
                <img src="./img/familia-tupfeln.jpg" alt="Foto da família tupfeln"/>
                <figcaption>Familia Tupfeln</figcaption>
            </figure>
            <p>
              A fundação em 1932 ocorreu no momento da descoberta econônica de cursos por stream online no interior de Santa Catarina. 
              A família Tüpfeln, tradicional da região, investiu todas as suas economias nessa nova iniciativa, revolucionária para a
              época. A fundadora frau Dagmar Olaf Tüpfeln, dotada de particular visão administrativa, guiou os negócios da empresa durante
              mais de 50 anos, muitos deles ao lado de seu filho Ernst Noten Tüpfeln, atual CEO. O nome da empresa é inspirado no nome
              da família. 
            </p>

            <p>
              O	crescimento	da empresa foi praticamente	instantâneo. Nos primeiros 5 anos, já atendia 18 países.
			  Bateu	a marca	de 100 países em apenas	15 anos	de existência. Até hoje, já	atendeu	2 bilhões de usuários 
              diferentes, em bilhões de	diferentes pedidos.
            </p>

            <p>
              O	crescimento	em número de funcionários é	também assombroso. Hoje, é a maior empregadora do Brasil, mas
              mesmo	após apenas	5 anos de sua existência, já possuía 30	mil	funcionários. Fora do Brasil, há 240 mil
              funcionários,	além dos 890 mil brasileiros nas instalações de	Mafra e nos	escritórios	em todo	país. 
            </p>
            
            <p>
            Dada a importância econômica da	empresa	para o Brasil, a família Tüpfeln já	recebeu	diversos prêmios,
            homenagens e condecorações.	Todos os presidentes do	Brasil já visitaram	as instalações da MusicDot,	além de	
            presidentes	da União Européia,	Ásia e	o secretário-geral da ONU.  
            </p>

            <Link to="/">retorna a página inicial</Link>

        </div>
    );
}

export default Sobre;