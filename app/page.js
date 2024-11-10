'use client';
import { useState } from 'react';
import { Me, Music, Intro, Social, Logo, Water } from '../src/Components';
import '../src/pages/_scss/home.scss';
import packageJson from '../package.json';

const Home = () => {
    const [ darkMode, setDarkMode ] = useState(false);

    const handleSetDarkMode = () => {
        setDarkMode(!darkMode);
        console.log('test')
    }

  	return (<main>
        <Music />
        <Intro />
        <footer id="footer">            
            <Logo />
            <Social location="header" />
            <Water />

            <p className="copy">
                v{packageJson.version}<br/>
                &copy; 2005&thinsp;/&thinsp;{(new Date().getFullYear())}
            </p>
            <Me />
        </footer>
    </main>);
}

export default Home;
