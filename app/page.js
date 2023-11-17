'use client'
import supabase from '../config/supabase.js';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from "next/image";
import { Me, Music, Intro, Social, Logo, Water } from '../src/Components';
import '../src/assets/home.scss';
import packageJson from '../package.json';

// https://vercel.com
// https://nextjs.org/docs
// https://nextjs.org/learn
// https://vercel.com/templates?framework=next.js
// https://vercel.com/new

const Home = () => {
  	return (<main>
        <header>
            <Logo />

            <Social location="header" />
            <Water />
        </header>
        <Music />
        <footer id="footer">
            <Intro />

            <p className="copy">
                &copy; Swimmer 2005&thinsp;/&thinsp;{(new Date().getFullYear())} - Version {packageJson.version}
            </p>
            <Me />
        </footer>
    </main>);
}

export default Home;
