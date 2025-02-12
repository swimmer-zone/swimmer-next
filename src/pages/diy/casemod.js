import Head from 'next/head';
import {Footer, Menu } from '../../Components';
import '../_scss/diy.scss';

const Casemod = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

    return(<main>
		<div className="container">
            <Menu active="diy"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">
                    <Head>
                        <title>Swimmer ♬ Case DIY Project</title>
                    </Head>
                    <section className="diy">
                        <div className="article">
                            <h1>Casemod</h1>
                            <p>
                                For a long time I was lurking on  the Casemodding forum of Tweakers.net and watched a lot of great 
                                cases coming by, that I finally decided to start one of my own. I've had a design before, but that 
                                one didn't allow for any upgrades in the future. This design is a bit more straight forward and it 
                                fits my previous made table and audio cabinet. It will be 369mm high, 206mm wide and a depth of 
                                600mm. The materials I'm going to use are MDF, which I'll paint black. The windows and parts of 
                                the front panel will be a black acryl. You can't see through unless the lights in the case are on.
                            </p>
                            <p>
                                Other materials are a 140mm fan, magnets for the side panels. An SD cardreader with an eject 
                                mechanism which I pulled out of an MP3 player, and feet, that came off my amplifier, for my stereo 
                                installation to fit the audio cabinet.
                            </p>
                            <p>
                                I made slides to fit 5 HDD's without any screws and sew some holes out of the acrylic panel for air 
                                inlet. The side panels will be held by 4 magnets, which I will fitt seamlessly into the wood. I 
                                don't know yet if this experiment will succeed. I bought a modular PSU, so that I don't have any 
                                cables in the case that I don't use.
                            </p>
                            <p>
                                At the DIY store they weren't able to saw pieces smaller than 100mm, but then the front HDD slide 
                                would be in the way. It would be nice if all drives are visible through the window. Upside is that 
                                the drives are further away from the PSU and its magnetic field.
                            </p>
                            <p>
                                The optical drive is a Plextor PX-716AL, with a slot-in mechanism, so I only have to make a hole 
                                big enough to fit a DVD.
                            </p>
                            <p>
                                One week after the Sziget festival, I received a package. It contains an on-button, reset-button 
                                and the acrylic panels. I had to do some research to find out how the buttons have to be connected 
                                (5 pins: + and - for the LED, a Common, a Normally Open and a Normally Closed pin) and the pin 
                                layout of the header on the main board, but in the end this all wasn't a problem. I had to remove 
                                the molex connector of the fan controller and solder the connection to the PSU directly on it, 
                                here it's also nice to have a modular PSU. I had some trouble with the GPU though, I didn't get 
                                any signal on my monitor, but the GPU is a new one and I didn't get any beeps from the main board. 
                                I tried my old GPU, but no signal either. I was afraid the main board was broken, that has happened 
                                before, but after some searching it became clear that it all was because of a loose memory strip.
                            </p>
                            <img src="/images/casemod/2009_pc_01.jpeg" alt="Casemod" className="rounded"/>
                            <img src="/images/casemod/2009_pc_02.jpeg" alt="Casemod" className="rounded"/>
                            <img src="/images/casemod/2009_pc_03.jpeg" alt="Casemod" className="rounded"/>
                            <img src="/images/casemod/2009_pc_04.jpeg" alt="Casemod" className="rounded"/>

                            <h2>Some other projects</h2>
                            <img src="/images/casemod/2003_delfzijl_01.jpeg" alt="Kamer Delfzijl" className="rounded"/>
                            <img src="/images/casemod/2006_tafeltje_01.jpeg" alt="Tafeltje" className="rounded"/>
                            <img src="/images/casemod/2006_venlo_01.jpeg" alt="Kamer Venlo" className="rounded"/>
                            <img src="/images/casemod/2009_kastje_01.jpeg" alt="Audiomeubel" className="rounded"/>
                            <img src="/images/casemod/2009_kastje_02.jpeg" alt="Audiomeubel" className="rounded"/>
                            <img src="/images/casemod/2009_plank_01.jpeg" alt="Plank" className="rounded"/>
                            <img src="/images/casemod/2009_tafel_01.jpeg" alt="Tafel" className="rounded"/>
                            <img src="/images/casemod/2012_pc_01.jpeg" alt="PC" className="rounded"/>
                            <img src="/images/casemod/2017_bar_01.jpeg" alt="Bar" className="rounded"/>
                            <img src="/images/casemod/2017_terras_01.jpeg" alt="Lounge" className="rounded"/>
                        </div>
                    </section>
                    <Footer/>
				</div>
			</div>
		</div>
    </main>);
}

export default Casemod;
