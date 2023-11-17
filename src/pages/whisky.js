'use client'
import supabase from '../../config/supabase.js';
import { useState, useEffect } from 'react';
import { Back, Rating } from '../Components';
import '../assets/whisky.scss';

const Whisky = () => {
	const [ error, setError ] = useState(null);
	const [ tastings, setTastings ] = useState([]);

	useEffect(() => {
		const fetchTastings = async () => {
			let { data, error } = await supabase
				.from('tasting')
				.select(`
                    id,
                    brand,
                    date_of_tasting,
                    country("*"),
                    region("*"),
                    distillery("*"),
                    nearest_town,
                    cask_strength,
                    chill_filtered,
                    type("*"),
                    age,
                    strength,
                    taster,
                    tasting_location,
                    tasting_flavours,
                    tasting_glance,
                    color("*"),
                    finish("*"),
                    tasting_rating,
                    tasting_would_buy,
                    tasting_notes,
                    created_at,
                    user("*"),
                    url`);
				// .eq('page_identifier', 'home');

			if (error) {
				setError('Could not fetch tastings');
				setTastings(null);
				console.log(error);
			}
			if (data) {
				setTastings(data);
				setError(null);
			}
		};

		fetchTastings();
	}, []);
    
    // const [ sorted, setSorted ] = useState(tastings);

// console.log(sorted)
    const sortByBrand = () => {
        sorted.sort(function (a, b) {
            return a.brand.localeCompare(b.brand);
        });
        setSorted(sorted);
    };
    const sortByCountry = () => {
        sorted.sort(function (a, b) {
            return a.country.localeCompare(b.country);
        });
        setSorted(sorted);
    };
    const sortByDate = () => {
        sorted.sort(function (a, b) {
            return a.dateOfTasting.localeCompare(b.dateOfTasting);
        });
        setSorted(sorted);
    };
    const sortByRating = () => {
        sorted.sort(function (a, b) {
            return a.tasting.rating.localeCompare(b.tasting.rating);
        });
        setSorted(sorted);
    };

    const filterByFlavour = (flavour) => {
        // sorted.filter((sort) => sort.tasting.flavour === flavour);
        // setSorted(sorted);
    };
    const filterByWouldBuy = () => {
        // console.log('filterByWouldBuy');
        // sorted.filter((sort) => sort.tasting.wouldBuy === true);
        // console.log(sorted);
        // setSorted(sorted);
    }


    // return (
    //     <div>
    //         {faq && <Faq
    //             data={data}
    //             styles={styles}
    //             config={config}
    //         />}
    //     </div>
    // );
  	return (<section key="whisky_section" className="whisky">
        <p key="intro">
            My love for whisky began quite some time ago when I went to the liquor store and let them advise me a whisky
            that was not too peaty and I came home with the Tomatin Legacy, which was more of the spicy and fruity kind
            (vanilla and citrus). It really took off when I went to Edinburgh and visited the whisky museum. From that
            moment on I've tried {tastings.length} whisky's, starting with Scotch, but after visiting the Teeling
            distillery and the whiskey museum in Dublin my interest in Irish whiskey grew as well.
        </p>
        <nav key="sorting">
            <span key="label">Sort:</span>
            <button key="brand" onClick={sortByBrand}>Brand</button>
            <button key="country" onClick={sortByCountry}>Country / Region</button>
            <button key="rating" onClick={sortByRating}>Rating</button>
            <button key="dateOfTasting" onClick={sortByDate}>Date of Tasting</button>
        </nav>
        <nav key="filtering">
            <span key="label">Filter:</span>
            <button key="flavour">Flavour</button> [
                <button key="flavour-peaty" onClick={filterByFlavour('Peaty')}>Peaty</button>
                <button key="flavour-fruity" onClick={filterByFlavour('Fruity')}>Fruity</button>]
            <button key="wouldBuy" onClick={filterByWouldBuy}>Would Buy</button>
        </nav>
    	{error && <p className="error">{error}</p>}
	    {!error && tastings.map(tasting => {
            // console.log(tasting)
            return (<div className="whisky-wrapper" key={tasting.id + '_wrapper'}>
    		 	<h2 key={tasting.id + '_title'}>{tasting.brand}</h2>
    		 	<div className="whisky-map" key={tasting.id + '_map'}>
                 	<img src={"../data/whisky/" + (tasting.region ? tasting.region.value : tasting.country.value) + ".svg"} alt="" height="300" className="map" />
             	</div>
        	 	<div className="whisky-origin" key={tasting.id + '_origin'}>
                 	<h3>Origin</h3>
                 	{tasting.country.value} {tasting.nearest_town && <>(Nearest town: {tasting.nearest_town})</>}<br/>
                 	<ul>
                        <li key="type">Type: <strong>{tasting.type.value}</strong></li>
                 		<li key="age">Age: <strong>{tasting.age} years</strong></li>
                        <li key="strength">Strength: <strong>{tasting.strength} %</strong></li>
                        {tasting.cask_strength && <li key="caskStrength">Cask strength</li>}
                        {tasting.chill_filtered && <li key="chillFiltered">Chill filtered</li>}
                 	</ul>
                 	<a href={tasting.url} className="buy">Buy</a>
    		 	</div>
    		 	<div className="whisky-tasting" key={tasting.id + '_tasting'}>
                 	<h3>Tasting</h3>
                    Location: <strong>{tasting.tasting_location}</strong> @ <strong>{tasting.date_of_tasting}</strong><br />
                 	<ul>
                        {tasting.taster && <li key="taster"><strong>Taster</strong></li>}
                        <li key="color">Color: <strong>{tasting.color.value}</strong> <div style={{'width': '50px', 'height': '25px', 'borderRadius': '12px', 'backgroundColor': tasting.color.hex}}>&nbsp;</div></li>
                        <li key="glance">Glance: <strong>{tasting.tasting_glance}% oily</strong></li>
                		<li key="flavour">Flavour: <strong>{tasting.tasting_flavours}</strong> with <strong>{tasting.finish.value}</strong> finish</li>
                        {tasting.notes && <>Other notes: <strong>{tasting.tasting_notes}</strong><br/></>}
                 	</ul>
                    <Rating value={tasting.tasting_rating}/>
                    {tasting.tasting_would_buy && <small>Would buy again</small>}
                </div><br/>
            </div>);
        })}
        <Back />
    </section>);
}

export default Whisky;
