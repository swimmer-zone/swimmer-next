'use client'
import { Me, Music, Intro, Social, Logo, Water } from '../src/Components';
import '../src/pages/_scss/home.scss';
import packageJson from '../package.json';

const Home = () => {
  	return (<main>
        <header>
            <Logo />

            <Social location="header" />
            <Water />
        </header>
        <Music />
        <footer id="footer">
            <Intro />

            <p className="copy">
                &copy; Swimmer 2005&thinsp;/&thinsp;{(new Date().getFullYear())} - Version {packageJson.version}
            </p>
            <Me />
        </footer>
    </main>);
}

export default Home;
