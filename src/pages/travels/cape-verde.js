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
                            <li><a href="#lisbon">Lisbon</a></li>
                            <li><a href="#praia">Praia</a></li>
                            <li><a href="#cidade-velha">Cidade Velha</a></li>
                            <li><a href="#tarrafal">Tarrafal</a></li>
                            <li><a href="#assomada">Assomada</a></li>
                            <li><a href="#lisbon">Lisbon</a></li>
                            <li><a href="#sintra">Sintra</a></li>
                            <li><a href="#cascais">Cascais</a></li>
                        </ul>
                        <h2 id="introduction">Introduction</h2>
                        <p>
                            We went to Cape Verde, the original plan was to go to China, we had a ticket to Beijing, but
                            unfortunately (or fortunately) that flight got canceled. We both wanted to see another
                            continent and Cape Verde was an option. However, they don't consider themselves to be
                            Africans, so that is to be continued...
                        </p>
                        <h2 id="lisbon">Lisbon</h2>
                        <p>
                            We arrived in Praia at 2am, which makes it 1,5 nights without sleep, because I had to go to
                            Lisbon first to get to Praia. The plane to Lisbon left around 7am, so I had to cycle to the
                            airport during night. I arrived pretty early in Lisbon and Thais told me to explore, so I
                            did. After a terrible breakfast (I just walked away, paying only partly. I ordered a
                            croissant and a croquette, the croquette was cold and the croissant tasted like it sat there
                            for days) I went to the "elevador" to get a nice view of the river mounding into the ocean.
                        </p>
                        <Carousel directory="cape-verde/05_lisbon" num="35"/>
                        <h2 id="praia">Praia</h2>
                        <p>
                            Because of the two previous nights we were destroyed so we didn't do a lot on the first day,
                            on the second day we booked a free tour through the city centre and he told us several
                            things, like the Cape Verdians don't see themselves as Africans, that Cape Verde has a lot
                            in common with Brazil, because back then the islands were used as an in between stop for
                            Portugal to colonize Brazil and to ship slaves. So it shares a lot of the foods and also
                            because of the similar climate, they tend to grow the same fruits and vegetables.
                        </p>
                        <Carousel directory="cape-verde/00_praia" num="6"/>
                        <h2 id="cidade-velha">Cidade Velha</h2>
                        <Carousel directory="cape-verde/01_cidade_velha" num="26"/>
                        <h2 id="tarrafal">Tarrafal</h2>
                        <Carousel directory="cape-verde/02_tarrafal" num="37"/>
                        <h2 id="assomada">Assomada</h2>
                        <Carousel directory="cape-verde/03_assomada" num="2"/>
                        <h2 id="praia2">Praia</h2>
                        <Carousel directory="cape-verde/04_praia" num="52"/>
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
