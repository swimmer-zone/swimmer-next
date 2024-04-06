import './_scss/toggle.scss';

const Toggle = ({ darkMode, onClick }) => {
    return (<>
        <div className="toggle-slider">
            {darkMode && <button className="moon" onClick={onClick} title="Click here for light mode">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                </svg>
            </button>}
            {!darkMode && <button className="sun" onClick={onClick} title="Click here for dark mode">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M256,118.125c-76.156,0-137.875,61.719-137.875,137.875S179.844,393.875,256,393.875 S393.875,332.156,393.875,256S332.156,118.125,256,118.125z"/>
                        <rect x="235.906" width="40.156" height="77.297"/>
                        <rect x="235.906" y="434.703" width="40.156" height="77.297"/>
                        
                        <rect x="63.657" y="82.229" transform="matrix(0.7071 0.7071 -0.7071 0.7071 102.3047 -42.376)" width="77.296" height="40.15"/>
                        <polygon points="368.156,396.547 422.828,451.219 451.219,422.813 396.563,368.156"/>
                        <rect y="235.906" width="77.281" height="40.156"/>
                        <polygon points="434.688,235.922 434.688,276.078 512,276.063 512,235.906"/>
                        <polygon points="60.781,422.813 89.156,451.219 143.813,396.547 115.438,368.156"/>
                        <polygon points="451.219,89.156 422.813,60.781 368.156,115.438 396.563,143.844"/>
                    </g>
                </svg>
            </button>}
        </div>
	</>);
}

export default Toggle;
