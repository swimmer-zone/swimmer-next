'use client';
import { useState } from 'react';
import { Me, Music, Intro, Social, Logo, Toggle, Water } from '../src/Components';
import '../src/pages/_scss/home.scss';
import packageJson from '../package.json';

const Home = () => {
    const [ darkMode, setDarkMode ] = useState(false);

    const handleSetDarkMode = () => {
        setDarkMode(!darkMode);
        console.log('test')
    }

  	return (<main className={darkMode ? 'dark' : 'light'}>
        <header>
            {darkMode && <div className="stars"></div>}
            <Logo />
            <Toggle onClick={handleSetDarkMode} darkMode={darkMode}/>

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
