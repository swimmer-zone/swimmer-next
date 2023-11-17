import Head from 'next/head';
import '../assets/app.scss';

const MyApp = ({ Component, pageProps }) => {
	return (<>
		<main>
			<Component {...pageProps} />
		</main>
	</>);
}

export default MyApp;
