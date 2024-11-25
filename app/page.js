'use client';
import { Footer, Menu, Music, Intro } from '../src/Components';
import '../src/pages/_scss/home.scss';

const Home = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

  	return (<main className="home">
		<div className="container">
            <Menu active="home"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">		
                    <Music />
                    <Intro />
                    <Footer/>
				</div>
			</div>
		</div>
    </main>);
}

export default Home;
