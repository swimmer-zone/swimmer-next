'use client';
import { Footer, Menu, Music } from '../src/Components';
import '../src/pages/_scss/home.scss';
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

const Home = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);

	useEffect(()=>{
		setTimeout(()=>{
			setOpen(true)
		}, 2000)
	}, [])

  	return (<main className="home">
		<div className="container">
            <Menu active="home"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">		
                    <Music />
                    <Footer/>
				</div>
			</div>
		</div>
		<div>
			<Popup open={open} closeOnDocumentClick onClose={closeModal}>
				<div className="modal">
					<a className="close" onClick={closeModal}>
						&times;
					</a>
					Visit my new website on <a href="https://ome.gs/">https://ome.gs</a>.
				</div>
			</Popup>
		</div>
    </main>);
}

export default Home;
