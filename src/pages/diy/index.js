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
            <a href="diy/cabinet">Cabinet</a>
            <a href="diy/casemod">Casemod</a>
        </div>
    </main>);
}

export default Tutorials;
