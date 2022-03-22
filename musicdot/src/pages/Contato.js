import React from 'react';

import styles from "./Contato.module.css";


function Contato(){
    return (
        <section className={styles.contato_container}>
            
            <h2>Contato</h2>

            <h3>Correspondencia</h3>
            <small>(todos os dias, das 9h às 18h)</small>
            <address>
                AOVS Sistemas de Informatica S.A
                <br/>
                Rua Vergueiro, 3185 8º andar
                <br/>
                Vila Mariana
                <br/>
                São Paulo
            </address>

            <h3>Telefones</h3>
            <small>(segunda a sexta, das 9h as 18h)</small>
            <dl>
                <dt>Pesssoal Física: </dt>
                <dd><a href="tel://114118-3319">(11) 4118-3319</a></dd>

                <dt>Pessoa Jurídica: </dt>
                <dd><a href="tel://114118-2172">(11) 4118-2172</a></dd>
            </dl>
        </section>
    );
}

export default Contato;