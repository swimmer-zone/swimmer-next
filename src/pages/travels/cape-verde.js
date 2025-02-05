'use client';
import Head from 'next/head';
import { Menu, Carousel } from '../../Components';
import '../_scss/travels.scss';

const CapeVerde = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

    return (<main>
		<div className="container">
            <Menu active="travels"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content" style={{'backgroundImage': 'url(/images/cape-verde/panorama.jpeg)'}}>
                    <Head>
                        <title>Swimmer ♬ Travels to Cape Verde</title>
                    </Head>
                    <div className="travel-background"></div>
                    <div className="article">
                        <h1>Cape Verde</h1>
                        <h2>Table of contents</h2>
                        <ul>
                            <li><a href="#introduction">Introduction</a></li>
                            <li><a href="#praia">Praia</a></li>
                            <li><a href="#cidade-velha">Cidade Velha</a></li>
                            <li><a href="#tarrafal">Tarrafal</a></li>
                            <li><a href="#lisbon">Lisbon</a></li>
                        </ul>
                        <h2 id="introduction">Introduction</h2>
                        <p>
                            We went to Cape Verde, the original plan was to go to China, we had a ticket to Beijing, but
                            unfortunately (or fortunately) that flight got canceled. We both wanted to see another
                            continent and Cape Verde was an option. However, they don't consider themselves to be
                            Africans, so that is to be continued...
                        </p>
                        <h2 id="praia">Praia</h2>
                        <Carousel directory="cape-verde/00_praia" num="6"/>
                        <h2 id="cidade-velha">Cidade Velha</h2>
                        <Carousel directory="cape-verde/01_cidade_velha" num="26"/>
                        <h2 id="tarrafal">Tarrafal</h2>
                        <Carousel directory="cape-verde/02_tarrafal" num="38"/>
                        <h2 id="assomada">Assomada</h2>
                        <Carousel directory="cape-verde/03_assomada" num="0"/>
                        <h2 id="praia2">Praia</h2>
                        <Carousel directory="cape-verde/04_praia" num="54"/>
                        <h2 id="tarrafal">Lisbon</h2>
                        <Carousel directory="cape-verde/05_lisbon" num="35"/>
                        <h2 id="tarrafal">Sintra</h2>
                        <Carousel directory="cape-verde/06_sintra" num="56"/>
                        <h2 id="tarrafal">Cascais</h2>
                        <Carousel directory="cape-verde/07_cascais" num="47"/>
                    </div>
                </div>
            </div>
        </div>
    </main>);
}

export default CapeVerde;
