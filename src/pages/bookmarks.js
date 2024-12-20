'use client';
import Head from 'next/head';
import { Footer, Menu } from '../Components';
import './_scss/common.scss';
import { bookmarks } from '../json';

const Whisky = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

    return (<main>
		<div className="container">
            <Menu active="bookmarks"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">
                    <Head>
                        <title>Swimmer ♬ Bookmarks</title>
                    </Head>
                    <div className="article">
                        <h1>Bookmarks</h1>
                        <p key="intro">
                            Throughout the years I've collected a lot of bookmarks, which are too much to all keep them
                            stored in my browser and most of them are also for sharing, so there you go!
                        </p>

                        {Object.keys(bookmarks).map(key => {
                            let bookmark_list = bookmarks[key];
                            return (<>
                                <h2>{bookmark_list.title}</h2>
                                <ul>
                                    {Object.keys(bookmark_list.links).map(bookmarkKey => {
                                        let bookmark = bookmark_list.links[bookmarkKey];
                                        return (<li><a href={bookmark.url}>{bookmark.title}</a></li>)
                                    })}
                                </ul>
                            </>)
                        })}
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    </main>);
}

export default Whisky;
