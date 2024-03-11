'use client';
import Head from 'next/head';
import { Back } from '../../Components';
import './_scss/travels.scss';

// 2024-01-08
// 2023-02-20
// ?
// 2022-11-28
// 2021-11-28
// 2018-08-31
// 2008-05-19

const Travels = () => {

    const travels = [
        {
            "title": "Georgia",
            "destination": "georgia",
            "images": 367,
            "posted": "January 2024",
            "description": ""
        },
        {
            "title": "Aurora",
            "destination": "aurora",
            "images": 51,
            "posted": "February 2023",
            "description": ""
        },
        {
            "title": "Edinburgh",
            "destination": "whisky",
            "images": 24,
            "posted": "ongoing",
            "description": " - includes a database of all my whisky tastings"
        },
        {
            "title": "Vietnam",
            "destination": "vietnam",
            "images": 286,
            "posted": "November 2022",
            "description": ""
        },
        {
            "title": "Thailand",
            "destination": "thailand",
            "images": 87,
            "posted": "November 2021",
            "description": ""
        },
        {
            "title": "Boom",
            "destination": "boom",
            "images": 206,
            "posted": "August 2018",
            "description": " - includes 4 visits to Boom festival and a visit to Sziget and Dour"
        },
        {
            "title": "Europe",
            "destination": "europe",
            "images": 176,
            "posted": "May 2008",
            "description": " - about my Eurotrip through 15 countries"
        }
    ];

    let totalImages = 0;

    Object.keys(travels).map(key => {
        let travel = travels[key];

        totalImages += travel.images;
    })

    return (<main className="travel-overview-background overview-background">
        <Head>
            <title>Swimmer ♬ Travels</title>
        </Head>
        <h1>Travels</h1>
        <p>
            This is a list of all my travels in descending order. Cutting back on the amount of images wass quite a
            challenge. Especially Georgia, where we had a total of more than 2000 images. The total amount of images
            is currently {totalImages}.
        </p>

        {Object.keys(travels).map(key => {
            let travel = travels[key];

            return (<a href={'travels/' + travel.destination} className="banner" style={{ 'backgroundImage': 'url(/images/' + travel.destination + '/panorama.jpg)' }}>
                <h2>{travel['title']}</h2>
                <small>Posted: {travel.posted} {travel.description}<br />{travel.images} images</small>
            </a>);
        })}
       
        <Back/>
        <p className="mobile">There are a lot of images involved in my travel blogs, so it is highly recommended to not view it on a mobile phone.</p>
    </main>);
}

export default Travels;
