'use client';
import Head from 'next/head';
import supabase from '../../config/supabase.js';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import Toggle from 'react-toggle'
import ReactSlider from 'react-slider';
import "react-toggle/style.css"
import './_scss/whiskyform.scss';
import { tastings } from '../json/index.js';
import { Barrel } from '../Components';

const WhiskyForm = () => {
	const [ error, setError ] = useState(null);
    // {error && <p className="error">{error}</p>}
    // {!error && tastings.map(tasting => {})}
    const [ success, setSuccess ] = useState(false);

    // Tastings
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

    // Distilleries
    const [ distilleryList, setDistilleryList ] = useState([]);
	useEffect(() => {
		const fetchDistilleries = async () => {
			let { data, error } = await supabase
				.from('distillery')
				.select(`id, name, latitude, longitude`);

			if (error) {
				setError('Could not fetch distilleries');
				setDistilleryList(null);
				console.log(error);
			}
			if (data) {
				setDistilleryList(data);
				setError(null);
			}
		};

		fetchDistilleries();
	}, []);

    // Nearest Town
    const [ nearestTown, setNearestTown ] = useState('');

    // Brand
    const [ brand, setBrand ] = useState('');
    const handleBrandChange = (inputValue) => {
        if (nearestTown === '') {
            setNearestTown(inputValue);
        }
        setBrand(inputValue);
    }

    // Date of Tasting
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    const [ dateOfTasting, setDateOfTasting ] = useState(year + "-" + month + "-" + day);

    // Country
    const [ isCountryLoading, setIsCountryLoading ] = useState(false);
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
  
    const handleCreateCountry = (inputValue) => {
        setIsCountryLoading(true);
        setTimeout(() => {
            const newColor = createOption(inputValue);
            setIsLoading(false);
            setColorList((prev) => [...prev, newColor]);
            setValue(newColor);
        }, 1000);
    };

    const [ isRegionVisible, setIsRegionVisible] = useState(false);
    const handleCountryChange = (input) => {
        if (input && input.value === 'Scotland') {
            setIsRegionVisible(true);
        } else {
            setIsRegionVisible(false);console.log(input)
        }
        setCountry(input);
    }

    const [ country, setCountry ] = useState('');

    // Region
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
    const [ region, setRegion ] = useState('');

    // Cask Strength
    const [ caskStrength, setCaskStrength ] = useState(false);

    // Chill Filtered
    const [ chillFiltered, setChillFiltered ] = useState(false);

    // Type
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
    const [ type, setType ] = useState('');

    // Age
    const [ age, setAge ] = useState('');

    // Strength
    const [ strength, setStrength ] = useState('');

    // Taster
    const [ taster, setTaster ] = useState(true);

    // URL
    const [ url, setUrl ] = useState('');

    // Notes
    const [ notes, setNotes ] = useState('');

    // Flavour
    const [ isFlavourLoading, setIsFlavourLoading ] = useState(false);
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
  
    const handleCreateFlavour = (inputValue) => {
        setIsFlavourLoading(true);
        setTimeout(() => {
            const newFlavour = createOption(inputValue);
            setIsLoading(false);
            setFlavourList((prev) => [...prev, newFlavour]);
            setValue(newFlavour);
        }, 1000);
    };
    const [ tastingFlavour, setTastingFlavour ] = useState('');

    // Glance
    const [ tastingGlance, setTastingGlance ] = useState(50);

    // Color
    const [ colorList, setColorList ] = useState([]);
    // const [ color, setColor ] = useState({});
    const [ tastingColor, setTastingColor ] = useState(5);
	useEffect(() => {
		const fetchColors = async () => {
			let { data, error } = await supabase
				.from('color')
				.select(`id, value, hex`);

			if (error) {
				setError('Could not fetch color');
				setColorList(null);
				console.log(error);
			}
			if (data) {
				setColorList(data);
				setError(null);
			}
		};

		fetchColors();
	}, []);
	// useEffect(() => {
	// 	const fetchColor = async () => {
	// 		let { data, error } = await supabase
	// 			.from('color')
	// 			.select(`id, value, hex`)
    //             .eq('id', tastingColor);

	// 		if (error) {
	// 			setError('Could not fetch color');
	// 			setColor(null);
	// 			console.log(error);
	// 		}
	// 		if (data) {
	// 			setColor(data);
	// 			setError(null);
	// 		}
	// 	};

	// 	fetchColor();
	// }, []);

    // Finish
    const [ finishList, setFinishList ] = useState([]);
    const [ tastingFinish, setTastingFinish ] = useState('');
	useEffect(() => {
		const fetchFinishes = async () => {
			let { data, error } = await supabase
				.from('finish')
				.select(`id, value, label`);

			if (error) {
				setError('Could not fetch finishes');
				setFinishList(null);
				console.log(error);
			}
			if (data) {
				setFinishList(data);
				setError(null);
			}
		};

		fetchFinishes();
	}, []);

    // Rating
    const [ tastingRating, setTastingRating ] = useState(2.5);

    // Would Buy Again
    const [ tastingWouldBuy, setTastingWouldBuy ] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        Object.keys(tastings).map(async key => {
            let tasting = tastings[key];
            let regionB = null;
            console.log(tasting);

            if (tasting.country == 7) {
                regionB = tasting.region;
            }

            let input = {
                "brand": tasting.brand,
                "date_of_tasting": tasting.dateOfTasting,
                "country_id": tasting.country,
                "region_id": regionB,
                "distillery_id": null,
                "nearest_town": null,
                "cask_strength": tasting.caskStrength,
                "chill_filtered": tasting.chillFiltered,
                "type_id": tasting.type,
                "age": tasting.age,
                "strength": tasting.strength,
                "taster": tasting.taster,
                "url": tasting.url,
                "tasting_notes": tasting.notes,
                "tasting_location": "",
                "tasting_flavours": [tasting.tasting.flavour],
                "tasting_glance": tasting.tasting.glance,
                "tasting_color_id": tasting.tasting.color,
                "tasting_finish_id": tasting.tasting.finish,
                "tasting_rating": tasting.tasting.rating,
                "tasting_would_buy": tasting.tasting.wouldBuy,
                "user_id": 1
            };

            const { data, error } = await supabase
                .from('tasting')
                .insert(input);

            if (error) {
                setError('Could not insert data');
                console.log(error);
            }
            if (data) {
                setError(null);
                setSuccess(true);
            }
        });

		// if (!name || !email || !comment) {
		// 	setFormError('Niet alle verplichte velden zijn ingevuld');
		// 	return;
		// }

        const input = {
            "brand": brand,
            "date_of_tasting": dateOfTasting,
            "country_id": country.id,
            "region_id": region.id,
            "distillery_id": null,
            "nearest_town": nearestTown,
            "cask_strength": caskStrength,
            "chill_filtered": chillFiltered,
            "type_id": type.id,
            "age": age,
            "strength": strength,
            "taster": taster,
            "url": url,
            "tasting_notes": notes,
            "tasting_location": "",
            "tasting_flavours": [tastingFlavour.value],
            "tasting_glance": tastingGlance,
            "tasting_color_id": tastingColor,
            "tasting_finish_id": tastingFinish.id,
            "tasting_rating": tastingRating,
            "tasting_would_buy": tastingWouldBuy,
            "user_id": 1
        };
        console.log(input);

        // const { data, error } = await supabase
        //     .from('tasting')
        //     .insert(input);

        // if (error) {
        //     setError('Could not insert data');
        //     console.log(error);
        // }
        // if (data) {
        //     setError(null);
        //     setSuccess(true);
        // }
    };

  	return (<>
        <form onSubmit={submit}>
            <Barrel/>

            <input 
                type="text"
                name="brand"
                id="brand"
                placeholder="Brand / Distillery name"
                value={brand}
                onChange={(e) => handleBrandChange(e.target.value)}/>
            <input 
                type="date"
                name="date_of_tasting"
                id="date_of_tasting"
                lang="nl-nl"
                value={dateOfTasting}
                onChange={(e) => setDateOfTasting(e.target.value)}/>
            <CreatableSelect
                name="country"
                className="select"
                options={countryList} 
                value={country}
                onChange={(newCountry) => handleCountryChange(newCountry)}
                isClearable
                isDisabled={isCountryLoading}
                isLoading={isCountryLoading}
                onCreateOption={handleCreateCountry}/>
            {isRegionVisible && 
            <Select
                name="region"
                className="select"
                options={regionList}
                value={region}
                onChange={(option) => setRegion(option)}/>}
            <input
                type="text"
                name="nearest_town"
                id="nearest_town"
                placeholder="Nearest Town"
                value={nearestTown}
                onChange={(e) => setNearestTown(e.target.value)}/>
            <Toggle
                id='cask_strength'
                icons={{
                    checked: 'Cask strength',
                    unchecked: 'Regular',
                  }}
                defaultChecked={caskStrength}
                onChange={(e) => setCaskStrength(e.target.checked)}/>
            <Toggle
                id='chill_filtered'
                icons={{
                    checked: 'Chill filtered',
                    unchecked: 'Not filtered',
                    }}
                defaultChecked={chillFiltered}
                onChange={(e) => setChillFiltered(e.target.checked)}/>

            <Select
                name="type"
                className="select"
                options={typeList}
                value={type}
                onChange={(option) => setType(option)}/>
            <ul>
                <li>See: <a href="https://grimsdyke.com/whisky-types/" target="_blank">whisky types</a></li>
            </ul>

            <input
                type="number"
                inputMode="numeric"
                name="age"
                id="age"
                placeholder="How many years has it aged in the cask"
                value={age}
                onChange={(e) => setAge(e.target.value)}/>
            <input
                type="number"
                inputMode="numeric"
                name="strength"
                id="strength"
                min="40"
                max="100"
                placeholder="Alcohol level in %"
                value={strength}
                onChange={(e) => setStrength(e.target.value)}/>
            <Toggle
                id='taster'
                icons={{
                    checked: 'Taster',
                    unchecked: 'Regular bottle',
                  }}
                defaultChecked={taster}
                onChange={(e) => setTaster(e.target.checked)} />

            <input
                type="text"
                name="url"
                id="url"
                placeholder="URL: Preferably https://www.heijdenwijnimport.nl/"
                value={url}
                onChange={(e) => setUrl(e.target.value)}/>
            <ul>
                <li><a href="https://www.heijdenwijnimport.nl/" target="_blank">Van der Heijden</a></li>
                <li><a href="https://www.topdrinks.nl/" target="_blank">Topdrinks</a></li>
                <li><a href="https://www.drankgigant.nl/" target="_blank">Drankgigant</a></li>
                <li><a href="https://www.gall.nl/" target="_blank">Gall & Gall</a></li>
                <li><a href="https://whisky-me.com/">Whisky Me</a></li>
            </ul>

            <textarea
                name="notes"
                id="notes"
                placeholder="Some notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}/>

            <hr/>

            <CreatableSelect
                name="flavour"
                className="select"
                options={flavourList} 
                isClearable
                isDisabled={isFlavourLoading}
                isLoading={isFlavourLoading}
                onChange={(newValue) => setTastingFlavour(newValue)}
                onCreateOption={handleCreateFlavour}
                value={tastingFlavour}/>

            <ReactSlider 
                id="glance"
                className="range-slider"
                thumbClassName="slider-thumb"
                trackClassName="slider-track"
                defaultValue={tastingGlance}
                min={0}
                max={100}
                step={10}
                onChange={(value, index) => setTastingGlance(value)}/>
            <div id="glance_text" className="slider-label">{tastingGlance}% oily</div>

            <ReactSlider 
                id="color"
                className="range-slider color-slider"
                thumbClassName="slider-thumb"
                trackClassName="slider-track"
                defaultValue={5}
                min={0}
                max={8}
                onChange={(value, index) => setTastingColor(value)}/>
            <div id="color_text" className="slider-label"></div>

            <Select 
                name="finish"
                className="select"
                options={finishList}
                value={tastingFinish}
                onChange={(option) => setTastingFinish(option)}/>

            <ReactSlider 
                id="rating"
                className="range-slider"
                thumbClassName="slider-thumb"
                trackClassName="slider-track"
                defaultValue={tastingRating}
                min={1}
                max={5}
                step={0.5}
                onChange={(value, index) => setTastingRating(value)}/>
            <div id="rating_text" className="slider-label">{tastingRating} stars</div>
            <Toggle
                id='would_buy'
                icons={{
                    checked: 'Would buy again',
                    unchecked: 'Not again',
                  }}
                defaultChecked={tastingWouldBuy}
                onChange={(e) => setTastingWouldBuy(e.target.checked)} />

            <button id="submit">Submit</button>
            {success && <div id="success">Record successfully inserted</div>}
        </form>
    </>);
}

export default WhiskyForm;
