'use client'
import '../../assets/travels.scss';

const Boom = () => {
    return (<main>
        <div className="travel-background" style={{'backgroundImage': 'url(/data/travels/panoramas/boom.jpg)'}}></div>
        <div className="article">
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#boom">Boom</a></li>
                <li><a href="#dour">Dour</a></li>
                <li><a href="#sziget">Sziget</a></li>
            </ul>
            <h1 id="boom">Boom</h1>
            <p>
                Once I wrote stories about Dour (on July 19th, 2007) and Sziget (on July 5th, 2009), summarized below, but I never 
                actually wrote a story about <a href="https://www.boomfestival.org/">Boom</a>. This really has been the most 
                impressive festival I've been to, which is why I went for a second, third and fourth time. It's much less about 
                the music and more about the ambiance, artwork and workshops. So the line-up is mostly unknown.
            </p>
            <p>
                We spent the first night alongside the road in France, just before Bordeaux. The second day we crossed the border 
                with Spain and spent the night at the coast of the Atlantic, in Getaria. On the third day we already arrived in 
                Portugal, but decided to spend the night on a camping, next to a mountain spring. The next day we arrived at the 
                entrance of the festival, but we had to spend two more nights outside of the gates, at a pre-parking. Then there 
                was the festival! An amazing eight days and nights.
            </p>
            <p>
                <a href="https://www.youtube.com/watch?v=UABFY1AHihw">
                    <img className="small" src="https://img.youtube.com/vi/UABFY1AHihw/0.jpg" alt="Boom Festival"/>
                </a>
            </p>
            <p>
                After Boom 2018, we had a little roadtrip, we went for a citytrip in Porto, where we spent 2 nights in the Garden 
                House hostel and another hostel. Then we went to a nature reserve in Guimaraes, just north of Porto.\nThe 17th 
                night we also spent alongside the road, we were trying to get to Switzerland as fast as possible. As we almost 
                managed to do that, we went for a burger and a beer in Chamonix, at the foot of the Mont Blanc. But the mission 
                was to camp somewhere high in the mountains, so we drove some more, spent a night on a parking space in Locarno 
                and the next day we were on our destination, at an altitude of 2.5 km, nearby Fusio and the Italian border.
            </p>
            <p>
                After this we went more or less straight to home, with a citytrip in Luzern and a night in Jugendhostel am Rotsee.
            </p>
            <h2 id="dour">Dour</h2>
            <p>
                Finally the time is come, I'm going to <a href="https://www.dourfestival.be/nl/">Dour festival</a>. It's no Lowlands, 
                but rumours have it that it's even bigger, namely Dour festival in Belgium. I've ordered the ticket and the festival 
                will be between 12th and 15th of july. We can sleep in a tent on the terrain.
            </p>
            <p>
                Dour is behind us. Four exhausting, but very exciting days. The biggest act we've seen was of course Wutang Clan and 
                KRS One. It mostly were Reggae and Dub bands, like High Tone, and some Drum &amp; Bass, like Venetian Snares. I'll 
                put a list below with the bands we saw, I don't know all of them anymore, because I didn't know any of them before, 
                but all worth it to listen to again. We needed energy drinks to keep us standing in the mud, but of course beer and 
                wodka were also very important.
            </p>
            <p>
                <a href="https://www.youtube.com/watch?v=ulWNM0KKEh0">
                    <img className="small" src="https://img.youtube.com/vi/ulWNM0KKEh0/0.jpg" alt="Dour Festival"/>
                </a>
            </p>
            <p>
                There was an hidden lake between the mountains, which you couldn't have seen from a distance of 10 metres, so we 
                discovered it only the third time:
            </p>
            <h2 id="sziget">Sziget</h2>
            <p>
                After some speculations I've decided to order a ticket for <a href="https://www.szigetfestival.nl">Sziget festival</a> 
                in Budapest. I've had a couple of doubts about the price tag, but there are so many artists, this will be worth while. 
                The Prodigy is the most important, but also Fatboy Slim; Pendulum; Crystal Method; Squarepusher; Paul Oakenfold; Dillinja 
                and The Offspring I would like to see. The duration of the festival is 8 days, so there will be many more to see.
            </p>
        </div>
        <a href="/" className="homeButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30">
                <polygon points="20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30" transform="rotate(180 10 15)"></polygon>
            </svg>
            <span>Back home</span>
        </a>
    </main>);
}

export default Boom;
