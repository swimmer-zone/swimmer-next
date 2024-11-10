'use client';
import Head from 'next/head';
import { Back, Logo, Me, Social, Water } from '../../Components';
import './_scss/diy.scss';
import packageJson from '../../../package.json';

const Tutorials = () => {

    return (<main className="diy-overview-background overview-background">
        <Head>
            <title>Swimmer ♬ DIY Projects</title>
        </Head>
        <Back/>
        <h1>My DIY Projects</h1>
        <p>I've created some furniture, enjoy,</p>
        <div className="list">
            <a href="diy/cabinet">
                <span>Cabinet</span>
                <span>March 2022</span>
                {/* 08 */}
            </a>
            <a href="diy/casemod">
                <span>Casemod</span>
                <span>July 2009</span>
                {/* 17 */}
            </a>
        </div>
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

export default Tutorials;
