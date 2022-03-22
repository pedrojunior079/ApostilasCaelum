import React from 'react';

import styles from "./Home.module.css";

const Home = () =>{
  return (
    <section className={styles.home_container}>
      <h1>MusicDot</h1>
      <h2>Bem-vindo a MusicDot, seu portal de cursos de musicas online.</h2>
      <nav>
        <ul>
          <li>Confira nossas promoções.</li>
          <li>Receba informações sobre nossos lançamentos por email.</li>
          <li>Navegue por todos os nossos cursos disponiveis.</li>
          <li>Aprenda sem sair de casa.</li>
        </ul>
      </nav>
    </section>
  );
}

export default Home;