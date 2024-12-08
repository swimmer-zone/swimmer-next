import { useState, useEffect, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
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
    const playlist = albums[0].tracks;
    const player = useRef(null);
    const [ currentTrack, setCurrentTrack ] = useState('');
    const [ state, setState ] = useState({
        currentTime: null,
        duration: null
    });
    const handleClickNext = () => {
        console.log('click next')
        setCurrentTrack((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };

    const handleEnd = () => {
        console.log('end')
        setCurrentTrack((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    }

    let timeLeft = countDown(state.duration, state.currentTime);

    useEffect(() => {
        if (currentTrack) {
            player.current.audio.current.src = currentTrack;
            player.current.audio.current.play();
        }
        player.current.audio.current.addEventListener('timeupdate', e => {
            setState(prevState => ({
                currentTime: e.target.currentTime,
                duration: e.target.duration
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
								<img src={"/images/albums/" + album.title.toLowerCase().replace(/ /g, '-') + ".jpeg"} alt="cover" className="cover" />
							</div>
							<div className="tracklist" data-set={key}>

								<h2 key={key}>
									{album.title}
								</h2>

								<p>{album.intro}</p>

								<ul>
									{Object.keys(album.tracks).map(trackKey => {
										let track = album.tracks[trackKey];
                                        let fileName = '/audio/' + track.local;
                                        let playTime = Math.floor(track.playtime / 60) + ":" + ("0" + Math.floor(track.playtime % 60)).slice(-2);

										if (state.currentTime && state.currentTrack === track.local) {
											timer = <span className="duration">{timeLeft}</span>
										}
										else {
											timer = <span 
													data-seconds="{track.playtime}" 
													className="duration">{playTime}</span>
										}

										return (<>
											<li key={key + track.local}>
												<span className="a">
													<button 
														data-permalink={track.title}
														onClick={() => {
															if (currentTrack === fileName && !player.current.paused) {
																player.current.pause();
															} else if (currentTrack === fileName && player.current.paused) {
																player.current.play();
															} else {
                                                                setCurrentTrack(fileName);
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
                            <AudioPlayer
                                volume="0.5"
                                src={'/audio/' + album.tracks[currentTrack].local}
                                showSkipControls
                                onClickNext={handleClickNext}
                                onEnded={handleEnd}
                                onError={() => {
                                    console.log('play error')
                                }}
                                ref={player}
                            />
						</article>
					)
				})}
			</Slider>
			{currentTrack && <div id="progress" style={{width: ((state.currentTime / state.duration) * 100) + 'vw'}}></div>}
        </section>
    );
};

export default Music;
