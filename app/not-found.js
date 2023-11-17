'use client';
import Head from 'next/head';
import { Back, Logo } from '../src/Components';
import '../src/pages/_scss/not-found.scss';

export default function NotFound() {
    return (<main>
        <Head>
            <title>Swimmer ♬ 404</title>
        </Head>
        <div class="error">
            <div>
                <Logo />
            </div>
            <div>
                <h1>404</h1>
                <p>Not found</p>
            </div>
            <Back />
            <div className="bubble_1"></div>
            <div className="bubble_2"></div>
            <div className="bubble_3"></div>
            <div className="bubble_4"></div>
        </div>
    </main>);
}