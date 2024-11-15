'use client';
import Head from 'next/head';
import { Menu, Carousel } from '../../Components';
import '../_scss/travels.scss';

const Aurora = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

    return (<main>
		<div class="container">
            <Menu active="travels"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content" style={{'backgroundImage': 'url(/images/aurora/panorama.jpg)'}}>
                    <Head>
                        <title>Swimmer ♬ Travels to find Aurora</title>
                    </Head>
                    <div className="travel-background"></div>
                    <div className="article">
                        <h1>Aurora</h1>
                        <h2>Table of contents</h2>
                        <ul>
                            <li><a href="#introduction">Introduction</a></li>
                            <li><a href="#dublin">Dublin</a></li>
                            <li><a href="#rovaniemi">Rovaniemi</a></li>
                            <li><a href="#belfast">Belfast</a></li>
                        </ul>
                        <h2 id="introduction">Introduction</h2>
                        <p><img src="/images/aurora/map.png" alt="Route"/></p>
                        <p>
                            We went to Rovaniemi in Finland to chase the aurora. Unfortunately we didn't manage to see it so I used
                            an image downloaded from internet to function as the background. This story will be continued as we are
                            planning to go on a cruise at some point in the future, which includes a money back guarantee if we don't
                            manage to see it. Of course the background will then be replaced with the real thing.
                        </p>
                        <h2 id="dublin">Dublin</h2>
                        <Carousel directory="aurora/00_dublin" num="6" />
                        <h2 id="rovaniemi">Rovaniemi</h2>
                        <Carousel directory="aurora/01_rovaniemi" num="23" />
                        <h2 id="belfast">Belfast</h2>
                        <Carousel directory="aurora/02_belfast" num="23" />
                    </div>
				</div>
			</div>
		</div>
    </main>);
}

export default Aurora;
