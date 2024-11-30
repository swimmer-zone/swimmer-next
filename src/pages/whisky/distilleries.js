import React from "react";
import { ComposableMap, Geographies, Geography, Marker, Graticule, ZoomableGroup } from "react-simple-maps";
import  { whisky_distillery } from '../../json';
import Head from 'next/head';
import '../_scss/whisky.scss';
import { Footer, Menu } from '../../Components';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Distilleries = () => {
    const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

    const highlighted = ["SCO"];
    return (<main>
        <div className="container">
            <Menu active="whisky"/>
            <div className="content-wrap" onClick={toggleMenu}>
                <div className="content">
                    <Head>
                        <title>Swimmer ♬ Whisky Distilleries</title>
                    </Head>

                    <ComposableMap
                        width={800}
                        height={800}
                        projection="geoAzimuthalEqualArea"
                        projectionConfig={{
                            rotate: [-10.0, -53.0, 0],
                            scale: 500
                        }}
                    >
                        <ZoomableGroup center={[10, 45]} zoom={9}>
                            <Graticule stroke="#222222"/>
                            <Geographies geography={geoUrl}>
                                {({geographies}) =>
                                    geographies.map((geo) => {
                                        const isHighlighted = highlighted.indexOf(geo.id) !== -1;
                                        return (<Geography
                                            style={{
                                                default: {
                                                    fill: "#6c6eec",
                                                },
                                                hover: {
                                                    fill: "#888888",
                                                },
                                                pressed: {
                                                    fill: "#aaaaaa",
                                                },
                                            }}
                                            key={geo.rsmKey}
                                            geography={geo}
                                            stroke="#111111"
                                            fill={isHighlighted ? "#eeeeee" : "#6c6eec"}
                                        />)
                                    })
                                }
                            </Geographies>
                            {whisky_distillery.map(({name, coordinates, markerOffset}) => (
                                <Marker key={name} coordinates={coordinates} style={{width: "16px", height: "16px"}}>
                                    <circle r="3" fill="#ffc917" />
                                    <text
                                        textAnchor="middle"
                                        y={markerOffset}
                                        style={{fontFamily: "Afacad", fontSize: "8px", fill: "#dddddd", letterSpacing: 0}}
                                    >
                                        {name}
                                    </text>
                                </Marker>
                            ))}
                        </ZoomableGroup>
                    </ComposableMap>
                    <Footer/>
                </div>
            </div>
        </div>
    </main>);
};

export default Distilleries;