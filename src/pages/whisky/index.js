'use client';
import Head from 'next/head';
import { Footer, Menu, Rating } from '../../Components';
import '../_scss/whisky.scss';
import  {
    whisky_cask_type,
    whisky_country,
    whisky_finish,
    whisky_flavour,
    whisky_region,
    whisky_tasting,
    whisky_type
} from '../../json';

const Whisky = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

    return (<main>
		<div className="container">
            <Menu active="whisky"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">
                    <Head>
                        <title>Swimmer ♬ Whisky</title>
                    </Head>
                    <div className="article">
                        <h1>Whisky</h1>
                        <h2>Table of contents</h2>
                        <ul>
                            <li><a href="#introduction">Introduction</a></li>
                            <li><a href="#whiskys">Whisky's</a></li>
                        </ul>
                        <h2 id="introduction">Introduction</h2>
                        <p key="intro">
                            My love for whisky began quite some time ago when I went to the liquor store and let them
                            advise me a whisky that was not too peaty and I came home with the Tomatin Legacy, which was
                            more of the spicy and fruity kind (vanilla and citrus). It really took off when I went to
                            <a href="/travels/uk#edinburgh">Edinburgh</a> and visited the whisky museum. From that
                            moment on I've tried {whisky_tasting.length} whisky's, starting with Scotch, but after
                            visiting the Teeling distillery and the whiskey museum in
                            <a href="/travels/uk#dublin">Dublin</a> my interest in Irish whiskey grew as well.
                        </p>
                        <p>A couple of resources to explore whisky</p>
                        <ul>
                            <li><a
                                href="https://blog.thewhiskyexchange.com/2022/11/whisky-101-part-one-a-beginners-guide/">Whisky
                                101 - A beginner's guide</a></li>
                            <li><a
                                href="https://blog.thewhiskyexchange.com/2022/11/whisky-101-part-two-whiskey-around-the-world/">Whisky
                                101 - Whisk(e)y around the world</a></li>
                        </ul>

                        <h2 id="whiskys">Whisky's</h2>

                        {whisky_tasting.map(tasting => {
                            return (<>
                                <div className="title">
                                    <h2 key={tasting.id + '_title'}>{tasting.brand}</h2>
                                    <h3 key={tasting.id + '_name'}>{tasting.name}</h3>
                                    <Rating value={tasting.rating}/>
                                </div>

                                <div className="whisky-wrapper" key={tasting.id + '_wrapper'}>
                                    {tasting.region && <div className="whisky-map">
                                        <img src={"/images/whisky/" + tasting.region + ".svg"} alt="" height="200"
                                             className="map"/>
                                    </div>}
                                    {!tasting.region && <div className="whisky-map">
                                        <img src={"/images/whisky/" + tasting.country + ".svg"} alt="" height="200"
                                             className="map"/>
                                    </div>}
                                    <div className="whisky">
                                        Origin: {tasting.country} {tasting.region && <>&gt; {tasting.region}</>}<br/>
                                        Type: <strong>{tasting.type}</strong><br/>
                                        Cask Type: <strong>{tasting.cask_type}</strong><br/>
                                        <strong>{tasting.strength}% abv</strong><br/>

                                        Tasted
                                        @ <strong>{tasting.location}</strong> (<strong>{tasting.date_of_tasting}</strong>)<br/>
                                        Flavour: <strong>{tasting.flavour}</strong> with <strong>{tasting.finish}</strong> finish<br/>
                                        {tasting.notes && <>Other notes: <strong>{tasting.notes}</strong><br/></>}<br/>
                                    </div>
                                    <a href={tasting.url} className="buy">Buy</a>
                                </div>
                            </>);
                        })}

                        <h2 id="cask_types">Possible cask types</h2>
                        <ul className="tags">
                            {whisky_cask_type.map(cask_type => {
                                return (<li key={cask_type.id}>{cask_type.label}</li>)
                            })}
                        </ul>

                        <h2 id="countries">Possible countries</h2>
                        <ul className="tags">
                            {whisky_country.map(country => {
                                return (<li key={country.id}>{country.label}</li>)
                            })}
                        </ul>

                        <h2 id="cask_types">Possible finishes</h2>
                        <ul className="tags">
                            {whisky_finish.map(finish => {
                                return (<li key={finish.id}>{finish.label}</li>)
                            })}
                        </ul>

                        <h2 id="flavours">Possible flavours</h2>
                        <ul className="tags">
                            {whisky_flavour.map(flavour => {
                                return (<li key={flavour.id}>{flavour.label}</li>)
                            })}
                        </ul>

                        <h2 id="regions">Possible regions</h2>
                        <ul className="tags">
                            {whisky_region.map(region => {
                                return (<li key={region.id}>{region.label}</li>)
                            })}
                        </ul>

                        <h2 id="types">Possible types</h2>
                        <ul className="tags">
                            {whisky_type.map(type => {
                                return (<li key={type.id}>{type.label}</li>)
                            })}
                        </ul>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    </main>);
}

export default Whisky;
