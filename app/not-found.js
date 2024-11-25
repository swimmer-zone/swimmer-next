'use client';
import Head from 'next/head';
import { Logo, Menu } from '../src/Components';
import '../src/pages/_scss/not-found.scss';

export default function NotFound() {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

    return (<main>
		<div className="container">
            <Menu active="blog"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">
                    <Head>
                        <title>Swimmer ♬ 404</title>
                    </Head>
                    <div className="error">
                        <div>
                            <Logo />
                        </div>
                        <div>
                            <h1>404</h1>
                            <p>Not found</p>
                        </div>
                    </div>
				</div>
			</div>
		</div>
    </main>);
}