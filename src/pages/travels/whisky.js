'use client'
import { Carousel } from '../../Components';
import '../../assets/travels.scss';

const Whisky = () => {

    const slideshows = [[
        { "src": "01_phuket_01.jpg", "alt": "Phuket" }
    ]];

    return (<main>
        <div className="travel-background" style={{'backgroundImage': 'url(/data/travels/panoramas/edinburgh-2.jpg)'}}></div>
        <div className="article">
            <h1>Whisky</h1>
            <p>...</p>
        </div>
        <a href="/" className="homeButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30">
                <polygon points="20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30" transform="rotate(180 10 15)"></polygon>
            </svg>
            <span>Back home</span>
        </a>
    </main>);
}

export default Whisky;
