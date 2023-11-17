'use client';
import Head from 'next/head';
import { Back } from '../../Components';
import './_scss/tutorials.scss';

const Tutorials = () => {

    return (<main className="tutorial-overview-background overview-background">
        <Head>
            <title>Swimmer ♬ Tutorials</title>
        </Head>
        <Back/>
        <h1>Tutorials</h1>
        <p>
            I've written a couple of tutorials, most of them are quite outdated, but can still be some nice 
            reference. This section is in dark mode because... dev's like dark mode :)
        </p>
        <div className="list">
            <a href="tutorials/design-patterns" title="Posted: 2010-10-16">Design patterns</a>
            <a href="tutorials/anti-patterns" title="Posted: 2018-10-01">Anti patterns</a>
            <a href="tutorials/sql-joins" title="Posted: 2010-11-07">SQL joins</a>
            <a href="tutorials/vps-tutorial" title="Posted: 2009-06-07">Setting up a VPS</a>
            <a href="tutorials/aurora-vps" title="Posted: 2014-03-02">Aurora VPS</a>
            <a href="tutorials/codeigniter" title="Posted: 2016-01-21">CodeIgniter</a>
            <a href="tutorials/laravel" title="Posted: 2019-05-17">Laravel</a>
            <a href="tutorials/conky" title="Posted: 2013-04-16">Conky</a>
        </div>
    </main>);
}

export default Tutorials;
