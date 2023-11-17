import ReactMarkdown from 'react-markdown';
import { useParams } from 'next/navigation';
import Async from 'react-async';
import { Back } from '../../Components';
// import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import '../../assets/blog.scss';

const Blog = () => {
	let params = useParams();

	const loadBlog = () =>
	    fetch('../data/blogs/' + params.slug + '/README.md')
	    .then(res => (res.ok ? res : Promise.reject(res)))
	    .then(res => res.text());

	const options = {
  		settings: {
			autoplaySpeed: 3000
		},
  		buttons: {
	    	backgroundColor: 'rgba(30,30,36,0)',
	    	iconColor: 'rgba(108, 110, 236, 0.9)',
    		showDownloadButton: false
  		},
  		caption: {
		    captionColor: 'rgba(108, 110, 236, 1)',
	    	captionFontSize: '1.2rem',
		    captionFontWeight: 'bold'
  		},
		progressBar: {
			backgroundColor: 'rgba(108, 110, 236, 0)',
			fillColor: 'rgba(108, 110, 236, 1)'
		}
	};

	return (<main>
        <Async promiseFn={loadBlog}>
            <Async.Loading>Loading...</Async.Loading>
            <Async.Fulfilled>
                {blog => {
                    return (
	                    <>
	                        <section className="blog">
	                        	<img className="avatar" src={"../data/blogs/" + params.slug + "/avatar.png"} alt="Avatar"/>
		                        		<div className="article"><ReactMarkdown>{blog}</ReactMarkdown></div>
								
								{/* <SimpleReactLightbox>
		      						<SRLWrapper options={options}>
		                        		<div className="article"><ReactMarkdown>{blog}</ReactMarkdown></div>
		      						</SRLWrapper>
		      					</SimpleReactLightbox> */}
	                        </section>
	                    </>
                    )
                }}
            </Async.Fulfilled>
            <Async.Rejected>
                {error => `Something went wrong: ${error.message}`}
            </Async.Rejected>
        </Async>
        <Back />
    </main>);
}

export default Blog;