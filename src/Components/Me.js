import React from 'react';
import '../assets/components/me.scss';
import diving from '../assets/components/diving.png';

const Me = () => {
    return (<>
        <div className="diving">
            <img src={diving.src} alt="" />
        </div>
    </>);
};

export default Me;
