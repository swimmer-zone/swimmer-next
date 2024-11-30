'use client';
import Head from 'next/head';
import { Menu, Carousel, Rating } from '../../Components/index.js';
import '../_scss/travels.scss';

const Whisky = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

    return (<main>
		<div className="container">
            <Menu active="travels"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content" style={{'backgroundImage': 'url(/images/uk/panorama.jpg)'}}>
                    <Head>
                        <title>Swimmer ♬ Travels to Edinburgh and discovers whisky</title>
                    </Head>
                    <div className="travel-background"></div>
                    <div className="article">
                        <h1>United Kingdom & Ireland</h1>
                        <h2>Table of contents</h2>
                        <ul>
                            <li><a href="#introduction">Introduction</a></li>
                            <li><a href="#edinburgh">Edinburgh</a></li>
                            <li><a href="#dublin">Dublin</a></li>
                            <li><a href="#belfast">Belfast</a></li>
                            <li><a href="#liverpool">Liverpool</a></li>
                            <li><a href="#manchester">Manchester</a></li>
                            <li><a href="#chester">Chester</a></li>
                            <li><a href="#llandudno">LLandudno</a></li>
                            <li><a href="#london">London</a></li>
                        </ul>
                        <h2 id="introduction">Introduction</h2>
                        <p key="intro">
                            ...
                        </p>
                        <p><img src="/images/uk/map.svg" alt="Regions" className="noshade" /></p>
                        <h2 id="edinburgh">Edinburgh</h2>
                        <Carousel directory="uk/00_edinburgh" num="24" />
                    </div>
				</div>
			</div>
		</div>
    </main>);
}

export default Whisky;
