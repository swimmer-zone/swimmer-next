import React from 'react';
import { Me, Social, Logo, Water } from '../Components';
import './_scss/footer.scss';
import packageJson from '../../package.json';

const Footer = ({noBubbles}) => {
    return (<>
        <footer id="footer">
            <Logo />
            <Social location="header" />
            <Water noBubbles={noBubbles}/>

            <p className="copy">
                v{packageJson.version}<br/>
                &copy; 2005&thinsp;/&thinsp;{(new Date().getFullYear())}
            </p>
            <Me />
        </footer>
	</>);
};

export default Footer;
