'use client';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ReactSlider from 'react-slider';
import Head from 'next/head';
import { Barrel, Footer, Menu } from '../../Components';
import  {
    whisky_cask_type,
    whisky_country,
    whisky_finish,
    whisky_flavour,
    whisky_region,
    whisky_type
} from '../../json';
import '../_scss/whisky.scss';

const Whisky = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };
    
    // Brand
    const [ brand, setBrand ] = useState('');
    const handleBrandChange = (inputValue) => {
        setBrand(inputValue);
    }
    
    // Name
    const [ name, setName ] = useState('');
    const handleNameChange = (inputValue) => {
        setName(inputValue);
    }
    
    // Strength
    const [ strength, setStrength ] = useState('');

  
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
    const [ region, setRegion ] = useState('');
    const [ type, setType ] = useState('');
    
    // Cask type
    const [ caskType, setCaskType ] = useState('');

    // Date of Tasting
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    const [ dateOfTasting, setDateOfTasting ] = useState(year + "-" + month + "-" + day);

    // Location
    const [location, setLocation] = useState('');

    // Flavour
    const jsonFlavours = [
        { value: "Single Malt", label: "Single Malt" },
    ];
    const [ flavour, setFlavour ] = useState('');
  
    const handleCreateFlavour = (inputValue) => {
        setIsFlavourLoading(true);
        setTimeout(() => {
            const newFlavour = createOption(inputValue);
            setIsLoading(false);
            setFlavourList((prev) => [...prev, newFlavour]);
            setValue(newFlavour);
        }, 1000);
    };

    // Finish
    const jsonFinishes = [
        { value: "Single Malt", label: "Single Malt" },
    ];
    const [ finish, setFinish ] = useState('');
    const [ notes, setNotes ] = useState('');
    const [ rating, setRating ] = useState(2.5);
    const [ input, setInput ] = useState('');
    const submit = async (e) => {
        e.preventDefault();

        let jsonInput = {
            "brand": brand,
            "name": name,
            "strength": strength,
            "country": country.value,
            "region": region.value,
            "type": type.value,
            "cask_type": caskType.value,
            "date_of_tasting": dateOfTasting,
            "location": location,
            "flavour": flavour,
            "finish": finish,
            "notes": notes,
            "rating": rating
        };

        setInput(JSON.stringify(jsonInput, null, 4));
    };

    return (<main>
		<div className="container">
            <Menu active="whisky"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">
                    <Head>
                        <title>Swimmer ♬ Whisky</title>
                    </Head>
                    
                    <form onSubmit={submit}>
                        <Barrel/>
                        
                        <h2>The whisky</h2>

                        <input 
                            type="text"
                            name="brand"
                            placeholder="Brand / Distillery name"
                            value={brand}
                            onChange={(e) => handleBrandChange(e.target.value)}/>
                        <input 
                            type="text"
                            name="name"
                            placeholder="Product name"
                            value={name}
                            onChange={(e) => handleNameChange(e.target.value)}/>
                        <input
                            type="number"
                            inputMode="numeric"
                            name="strength"
                            min="40"
                            max="100"
                            placeholder="Alcohol level in %"
                            value={strength}
                            onChange={(e) => setStrength(e.target.value)}/>
                        <CreatableSelect
                            name="country"
                            className="select"
                            placeholder="Select country..."
                            options={whisky_country} 
                            value={country}
                            onChange={(newCountry) => handleCountryChange(newCountry)}
                            isClearable
                            onCreateOption={handleCreateCountry}/>
                        {isRegionVisible && 
                        <Select
                            name="region"
                            className="select"
                            placeholder="Select region..."
                            options={whisky_region}
                            value={region}
                            onChange={(option) => setRegion(option)}/>}

                        <Select
                            name="type"
                            className="select"
                            placeholder="Select type..."
                            options={whisky_type}
                            value={type}
                            onChange={(option) => setType(option)}/>
                        <ul>
                            <li>See: <a href="https://grimsdyke.com/whisky-types/" target="_blank">whisky types</a></li>
                        </ul>
                        <Select
                            name="cask_type"
                            className="select"
                            placeholder="Select cask type..."
                            options={whisky_cask_type}
                            value={caskType}
                            onChange={(option) => setCaskType(option)}/>

                        <h2>Tasting location and date</h2>

                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)} />
                        <input 
                            type="date"
                            name="date_of_tasting"
                            lang="nl-nl"
                            value={dateOfTasting}
                            onChange={(e) => setDateOfTasting(e.target.value)}/>

                        <h2>Opinions</h2>

                        <CreatableSelect
                            name="flavour"
                            className="select"
                            placeholder="Select flavours..."
                            options={whisky_flavour} 
                            isClearable
                            isMulti
                            onChange={(newValue) => setFlavour(newValue)}
                            onCreateOption={handleCreateFlavour}
                            value={flavour}/>
                        <Select 
                            name="finish"
                            className="select"
                            placeholder="Select finish..."
                            options={whisky_finish}
                            value={finish}
                            onChange={(option) => setFinish(option)}/>
                        <textarea
                            name="notes"
                            placeholder="Some notes..."
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}/>

                        <ReactSlider 
                            className="range-slider"
                            thumbClassName="slider-thumb"
                            trackClassName="slider-track"
                            defaultValue={rating}
                            min={1}
                            max={5}
                            step={0.5}
                            onChange={(value, index) => setRating(value)}/>
                        <div className="slider-label">{rating} stars</div>

                        <button type="submit">Copy JSON</button>
                    </form>
                    <div className="json_output">{input}</div>
                    <Footer/>
				</div>
			</div>
		</div>
    </main>);
}

export default Whisky;
