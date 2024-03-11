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
        <p>
            The newest tutorial is about Next.js, there already is a part about getting started, but I still
            need to figure out what I want to put in for code examples. After that I might finish the post
            about Laravel which I previously used as a full CMS, but the new version will function as an API
            for headless websites.
        </p>
        <div className="list">
            <a href="tutorials/next">
                <span>Next</span>
                <span>March 2024</span>
            </a>
            <a href="tutorials/laravel">
                <span>Laravel</span>
                <span>May 2019</span>
                {/* 17 */}
            </a>
            <a href="tutorials/anti-patterns">
                <span>Anti Patterns</span>
                <span>October 2018</span>
                {/* 01 */}
            </a>
            <a href="tutorials/codeigniter">
                <span>CodeIgniter</span>
                <span>January 2016</span>
                {/* 21 */}
            </a>
            <a href="tutorials/aurora-vps">
                <span>Aurora VPS</span>
                <span>March 2014</span>
                {/* 02 */}
            </a>
            <a href="tutorials/conky">
                <span>Conky</span>
                <span>April 2013</span>
                {/* 16 */}
            </a>

            <a href="tutorials/sql-joins">
                <span>SQL Joins</span>
                <span>November 2010</span>
                {/* 07 */}
            </a>
            <a href="tutorials/design-patterns">
                <span>Design patterns</span>
                <span>October 2010</span>
                {/* 16 */}
            </a>
            <a href="tutorials/vps-tutorial">
                <span>Setting up a VPS</span>
                <span>June 2009</span>
                {/* 07 */}
            </a>
        </div>
    </main>);
}

export default Tutorials;
