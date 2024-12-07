import { useState, useEffect, useRef } from 'react';
import Slider from './Slider';
import './_scss/music.scss';
import { albums } from '../json';

function countDown(duration, time) {
    if (!isNaN(time)) {
        let timeLeft = duration - time;
        return (
            Math.floor(timeLeft / 60) + ":" + ("0" + Math.floor(timeLeft % 60)).slice(-2)
        );
    }
}

const Music = () => {
    const player = useRef(null);
    const [ state, setState ] = useState({
        currentTrack: null,
        currentTime: null,
        duration: null
    });

    let timeLeft = countDown(state.duration, state.currentTime);

    useEffect(() => {
        if (state.currentTrack) {
            player.current.src = state.currentTrack;
            player.current.play();
        }
        player.current.addEventListener('timeupdate', e => {
            setState(prevState => ({
                currentTime: e.target.currentTime,
                duration: e.target.duration,
                currentTrack: prevState.currentTrack
            }));
        });
    }, [state.currentTrack]);
	
  	return (
		<section className="music" id="music">
			<Slider infinite={false}>
	      		{Object.keys(albums).map(key => {
	      			let album = albums[key];
					let timer;

	      			return(
						<article key={"album_" + key} id={"album_" + key}>
							<div className="cover-wrapper">
								<img src={"/images/albums/" + album.title.toLowerCase().replace(/ /g, '-') + ".jpg"} alt="cover" className="cover" />
							</div>
							<div className="tracklist" data-set={key}>

								<h2 key={key}>
									{album.title}
								</h2>

								<p>{album.intro}</p>

								<ul>
									{Object.keys(album.tracks).map(trackKey => {
										let track = album.tracks[trackKey];
										let scName = 'https://feeds.soundcloud.com/stream/' + track.filename + '.mp3';
										let playTime = Math.floor(track.playtime / 60) + ":" + ("0" + Math.floor(track.playtime % 60)).slice(-2);

										if (state.currentTime && state.currentTrack === scName) {
											timer = <span className="duration">{timeLeft}</span>
										}
										else {
											timer = <span 
													data-seconds="{track.playtime}" 
													className="duration">{playTime}</span>
										}

										return (<>
											<li key={track.filename}>
												<span className="a">
													<button 
														data-permalink={track.title}
														onClick={() => {
															if (state.currentTrack === scName && !player.current.paused) {
																player.current.pause();
															} else if (state.currentTrack === scName && player.current.paused) {
																player.current.play();
															} else {
																setState({currentTrack: scName});
															}
														}}>
														{track.title}
													</button>
												</span>
												{timer}
											</li>
										</>);
									})}
								</ul>
							</div>
						</article>
					)
				})}
			</Slider>
			{state.currentTrack && <div id="progress" style={{width: ((state.currentTime / state.duration) * 100) + 'vw'}}></div>}
			<audio ref={player} />
		</section>
  	);
};

export default Music;
