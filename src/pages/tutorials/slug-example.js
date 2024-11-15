import ReactMarkdown from 'react-markdown';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Async from 'react-async';
import { Menu } from '../../Components';
import '../_scss/common.scss';

const Blog = () => {
	let params = useParams();

	const loadTutorial = () =>
	    fetch('../data/markdown/tutorials/' + params.slug + '.md')
	    .then(res => (res.ok ? res : Promise.reject(res)))
	    .then(res => res.text());

	return (<main>
        <Head>
            <title>Swimmer ♬ Tutorials</title>
        </Head>
        <Async promiseFn={loadTutorial}>
            <Async.Loading>Loading...</Async.Loading>
            <Async.Fulfilled>
                {tutorial => {
                    return (
						<section className="tutorial">
							<img className="avatar" src={"../images/tutorials/" + params.slug + ".png"} alt="Avatar"/>
							<div className="article"><ReactMarkdown>{tutorial}</ReactMarkdown></div>
						</section>
                    )
                }}
            </Async.Fulfilled>
            <Async.Rejected>
                {error => `Something went wrong: ${error.message}`}
            </Async.Rejected>
        </Async>
    </main>);
}

export default Blog;