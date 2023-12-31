import React from 'react';
import '../assets/components/back.scss';

const Back = () => {
    return (<>
    	<a href="/" className="homeButton">
	    	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30">
				<polygon points="20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30" transform="rotate(180 10 15)"/>
			</svg>
			<span>Back home</span>
		</a>
	</>);
}

export default Back;