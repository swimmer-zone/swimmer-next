'use client';
import Head from 'next/head';
import { Footer, Menu } from '../../Components';
import '../_scss/diy.scss';

const DIY = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

    return (<main className="diy-overview-background overview-background">
		<div className="container">
            <Menu active="diy"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">
                    <Head>
                        <title>Swimmer ♬ DIY Projects</title>
                    </Head>
                    <h1>My DIY Projects</h1>
                    <p>I've created some furniture, enjoy,</p>
                    <div className="list">
                        <a href="diy/cabinet">
                            <span>Cabinet</span>
                            <span>March 2022</span>
                            {/* 08 */}
                        </a>
                        <a href="diy/casemod">
                            <span>Casemod</span>
                            <span>July 2009</span>
                            {/* 17 */}
                        </a>
                    </div>
                    <Footer/>
				</div>
			</div>
		</div>
    </main>);
}

export default DIY;
