'use client';
import Head from 'next/head';
import supabase from '../../../config/supabase.js';
import { useState, useEffect } from 'react';
import { Menu, Carousel, Rating } from '../../Components';
import '../_scss/travels.scss';

const Whisky = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

	const [ error, setError ] = useState(null);
	const [ tastings, setTastings ] = useState([]);
    const [ orderBy, setOrderBy ] = useState({'field': 'brand', 'direction': 'true'});
    const [ filterBy, setFilterBy ] = useState({});

	useEffect(() => {
		const fetchTastings = async () => {
            const fields = `
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
                url`;
console.log(filterBy)
            if (typeof filterBy.field !== "undefined") {
                let { data, error } = await supabase
                    .from('tasting')
                    .select(fields)
                    .order(orderBy.field, {ascending: orderBy.direction})
                    .eq(filterBy.field, filterBy.value);
                    
                if (error) {
                    setError('Could not fetch tastings');
                    setTastings(null);
                    console.log(error);
                }
                if (data) {
                    setTastings(data);
                    setError(null);
                }
            } else {
                let { data, error } = await supabase
                    .from('tasting')
                    .select(fields)
                    .order(orderBy.field, {ascending: orderBy.direction});

                if (error) {
                    setError('Could not fetch tastings');
                    setTastings(null);
                    console.log(error);
                }
                if (data) {
                    setTastings(data);
                    setError(null);
                }
            }

		};

		fetchTastings();
	}, [orderBy, filterBy]);

    const [ countryList, setCountryList ] = useState([]);
	useEffect(() => {
		const fetchCountries = async () => {
			let { data, error } = await supabase
				.from('country')
				.select(`id, value, label`);

			if (error) {
				setError('Could not fetch countries');
				setCountryList(null);
				console.log(error);
			}
			if (data) {
				setCountryList(data);
				setError(null);
			}
		};

		fetchCountries();
	}, []);

    const [ regionList, setRegionList ] = useState([]);
	useEffect(() => {
		const fetchRegions = async () => {
			let { data, error } = await supabase
				.from('region')
				.select(`id, value, label`);

			if (error) {
				setError('Could not fetch regions');
				setRegionList(null);
				console.log(error);
			}
			if (data) {
				setRegionList(data);
				setError(null);
			}
		};

		fetchRegions();
	}, []);

    const [ typeList, setTypeList ] = useState([]);
	useEffect(() => {
		const fetchTypes = async () => {
			let { data, error } = await supabase
				.from('type')
				.select(`id, value, label`);

			if (error) {
				setError('Could not fetch types');
				setTypeList(null);
				console.log(error);
			}
			if (data) {
				setTypeList(data);
				setError(null);
			}
		};

		fetchTypes();
	}, []);

    const [ flavourList, setFlavourList ] = useState([]);
	useEffect(() => {
		const fetchFlavours = async () => {
			let { data, error } = await supabase
				.from('flavour')
				.select(`id, value, label`);

			if (error) {
				setError('Could not fetch flavours');
				setFlavourList(null);
				console.log(error);
			}
			if (data) {
				setFlavourList(data);
				setError(null);
			}
		};

		fetchFlavours();
	}, []);

    return (<main>
		<div className="container">
            <Menu active="travels"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content" style={{'backgroundImage': 'url(/images/whisky/panorama.jpg)'}}>
                    <Head>
                        <title>Swimmer ♬ Travels to Edinburgh and discovers whisky</title>
                    </Head>
                    <div className="travel-background"></div>
                    <div className="article">
                        <h1>Whisky</h1>
                        <h2>Table of contents</h2>
                        <ul>
                            <li><a href="#introduction">Introduction</a></li>
                            <li><a href="#whiskys">Whisky's</a></li>
                        </ul>
                        <h2 id="introduction">Introduction</h2>
                        <p key="intro">
                            My love for whisky began quite some time ago when I went to the liquor store and let them advise me a whisky
                            that was not too peaty and I came home with the Tomatin Legacy, which was more of the spicy and fruity kind
                            (vanilla and citrus). It really took off when I went to Edinburgh and visited the whisky museum. From that
                            moment on I've tried {tastings.length} whisky's, starting with Scotch, but after visiting the Teeling
                            distillery and the whiskey museum in Dublin my interest in Irish whiskey grew as well.
                        </p>
                        <p><img src="/images/whisky/map.svg" alt="Regions" className="noshade" /></p>
                        <p>A couple of resources to explore whisky</p>
                        <ul>
                            <li><a href="https://blog.thewhiskyexchange.com/2022/11/whisky-101-part-one-a-beginners-guide/">Whisky 101 - A beginner's guide</a></li>
                            <li><a href="https://blog.thewhiskyexchange.com/2022/11/whisky-101-part-two-whiskey-around-the-world/">Whisky 101 - Whisk(e)y around the world</a></li>
                        </ul>
                        <h2 id="whiskys">Whisky's</h2>
                        <nav key="sorting">
                            Sort:<br />
                            <select name="order" onChange={(e) => setOrderBy({'field': e.target.value, 'value': e.target.value})}>
                                <option>Sort by ...</option>
                                <option value="brand">Brand</option>
                                <option value="tasting_rating">Rating</option>
                                <option value="date_of_tasting">Date of Tasting</option>
                            </select>
                        </nav>
                        <nav key="filtering" id="filtering">
                            Filter:<br />
                            <select name="filter-country" onChange={(value) => setFilterBy({'field': 'country', 'value': value})}>
                                <option>Country ...</option>
                                <option value="Featy">Peaty</option>
                                <option value="Fruity">Fruity</option>
                            </select>
                            
                            <select name="filter-region" onChange={(value) => setFilterBy({'field': 'region', 'value': value})}>
                                <option>Region ...</option>
                                <option value="...">...</option>
                            </select>
                            
                            <select name="filter-distillery" onChange={(value) => setFilterBy({'field': 'distillery', 'value': value})}>
                                <option>Distillery ...</option>
                                <option value="...">...</option>
                            </select>

                            <select name="filter-type" onChange={(value) => setFilterBy({'field': 'type', 'value': value})}>
                                <option>Type ...</option>
                                <option value="...">...</option>
                            </select>
                            
                            <select name="filter-cask-strength" onChange={(value) => setFilterBy({'field': 'cask_strength', 'value': value})}>
                                <option>Cask strength ...</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                            
                            <select name="filter-chill-filtered" onChange={(value) => setFilterBy({'field': 'chill_filtered', 'value': value})}>
                                <option>Chill filtered ...</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                            
                            <select name="filter-taster" onChange={(value) => setFilterBy({'field': 'taster', 'value': value})}>
                                <option>Taster ...</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                            
                            <select name="filter-flavour" onChange={(value) => setFilterBy({'field': 'tasting_flavour', 'value': value})}>
                                <option>Flavour ...</option>
                                <option value="...">...</option>
                            </select>
                            
                            <select name="filter-would-buy" onChange={(value) => setFilterBy({'field': 'tasting_would_buy', 'value': value})}>
                                <option>Would Buy ...</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </nav>
                        {error && <p className="error">{error}</p>}
                        {!error && tastings.map(tasting => {
                            return (<>
                                <div className="title">
                                    <h2 key={tasting.id + '_title'}>{tasting.brand}</h2>
                                    <Rating value={tasting.tasting_rating}/>
                                    <a href={tasting.url} className="buy">Buy</a>
                                </div>
                                <div className="whisky-wrapper" key={tasting.id + '_wrapper'}>
                                    Origin: {tasting.country.value} {tasting.nearest_town && <>(Near {tasting.nearest_town})</>}<br/>
                                    Type: <strong>{tasting.type.value}</strong><br/>
                                    Age: <strong>{!tasting.age && <>4</>}{tasting.age} years</strong><br/>
                                    <strong>{tasting.strength}% abv</strong><br/>
                                    {tasting.cask_strength && <>Cask strength<br/></>}
                                    {tasting.chill_filtered && <>Chill filtered<br/></>}

                                    Tasted @ <strong>{tasting.tasting_location}</strong> (<strong>{tasting.date_of_tasting}</strong>)<br />
                                    Color: <div style={{'display': 'inline-block', 'padding-inline': '8px', 'borderRadius': '4px', 'backgroundColor': tasting.color.hex}}>{tasting.color.value}</div><br/>
                                    Glance: <strong>{tasting.tasting_glance}% oily</strong><br/>
                                    Flavour: <strong>{tasting.tasting_flavours}</strong> with <strong>{tasting.finish.value}</strong> finish<br/>
                                    {tasting.notes && <>Other notes: <strong>{tasting.tasting_notes}</strong><br/></>}

                                    {tasting.tasting_would_buy && <small>Would buy again</small>}
                                </div>
                            </>);
                        })}
                        <Carousel directory="whisky/00_edinburgh" num="24" />
                    </div>
				</div>
			</div>
		</div>
    </main>);
}

export default Whisky;
