'use client';
import Head from 'next/head';
import { Back } from '../../Components';
import './_scss/diy.scss';

const Tutorials = () => {

    return (<main className="diy-overview-background overview-background">
        <Head>
            <title>Swimmer ♬ DIY Projects</title>
        </Head>
        <Back/>
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
    </main>);
}

export default Tutorials;
