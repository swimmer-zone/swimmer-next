import './_scss/menu.scss';

const Menu = ({ active }) => {
	let bodyEl = null;
	let content = null;
	let openbtn = null;

	if (typeof document !== 'undefined') {
		bodyEl = document.body;
		content = document.querySelector('.content-wrap');
		openbtn = document.getElementById('open-button');
	}
  
	const toggleMenu = () => {
		bodyEl.classList.add('show-menu');
	};

	let home = '',
		blog = '',
		tutorials = '',
		whisky = '';

	switch (active) {
		case 'home': home = 'active'; break;
		case 'blog': blog = 'active'; break;
		case 'tutorials': tutorials = 'active'; break;
		case 'whisky': whisky = 'active'; break;
	}

    return (<>
		<div className="menu-wrap">
			<nav className="menu">
				<div className="icon-list">
					<a href="/" className={home}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.398 495.398">
							<path
								d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391      v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158      c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747      c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path>
							<path
								d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401      c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79      c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path>
						</svg>
						<span>Home</span>
					</a>
					<a href="/tutorials" className={tutorials}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								d="M433.985,443.717l-89.55-191.894c0-7.466,0-199.236,0-210.69h20.564c11.358,0,20.567-9.208,20.567-20.567      S376.358,0,364.999,0c-7.995,0-207.944,0-217.996,0c-11.358,0-20.567,9.208-20.567,20.567s9.208,20.567,20.567,20.567h20.564      c0,11.737,0,203.47,0,210.69l-89.55,191.894C63.162,475.548,86.431,512,121.504,512h268.995      C425.626,512,448.819,475.5,433.985,443.717z M208.701,41.133h94.601v113.163h-94.601V41.133z M207.043,393.402      c-9.814,0-17.771-7.957-17.771-17.771s7.957-17.771,17.771-17.771c9.814,0,17.771,7.957,17.771,17.771      S216.858,393.402,207.043,393.402z M295.668,402.694c-14.946,0-27.063-12.117-27.063-27.063s12.117-27.063,27.063-27.063      s27.063,12.117,27.063,27.063C322.731,390.577,310.614,402.694,295.668,402.694z"></path>
						</svg>
						<span>Tutorials</span>
					</a>
					<a href="/blog" className={blog}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
							<path
								d="M28 8v-4h-28v22c0 1.105 0.895 2 2 2h27c1.657 0 3-1.343 3-3v-17h-4zM26 26h-24v-20h24v20zM4 10h20v2h-20zM16 14h8v2h-8zM16 18h8v2h-8zM16 22h6v2h-6zM4 14h10v10h-10z"></path>
						</svg>
						<span>Blog</span>
					</a>
					<a href="/whisky" className={whisky}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
							<path
								d="M28 8v-4h-28v22c0 1.105 0.895 2 2 2h27c1.657 0 3-1.343 3-3v-17h-4zM26 26h-24v-20h24v20zM4 10h20v2h-20zM16 14h8v2h-8zM16 18h8v2h-8zM16 22h6v2h-6zM4 14h10v10h-10z"></path>
						</svg>
						<span>Whisky</span>
					</a>
				</div>
			</nav>
		</div>
		<button className="menu-button" id="open-button" onClick={toggleMenu}></button>
	</>);
}

export default Menu;
