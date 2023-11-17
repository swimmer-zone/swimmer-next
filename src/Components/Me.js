import React from 'react';
import './_scss/me.scss';
import diving from '../../public/images/diving.png';

const Me = () => {
    return (<>
        <div className="diving">
            <img src={diving.src} alt="" />
        </div>
    </>);
};

export default Me;
