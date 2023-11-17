'use client'
import { Carousel } from '../../Components';
import '../../assets/travels.scss';

const Thailand = () => {

    const slideshows = [[
        { "src": "01_phuket_01.jpg", "alt": "Phuket" }
    ], [
        { "src": "01_phuket_03.jpg", "alt": "Phuket" },
        { "src": "01_phuket_05.jpg", "alt": "Phuket" },
        { "src": "01_phuket_06.jpg", "alt": "Phuket" },
        { "src": "01_phuket_07.jpg", "alt": "Phuket" },
        { "src": "01_phuket_10.jpg", "alt": "Phuket" },
        { "src": "01_phuket_11.jpg", "alt": "Phuket" },
        { "src": "01_phuket_14.jpg", "alt": "Phuket" },
        { "src": "01_phuket_16.jpg", "alt": "Phuket" },
        { "src": "01_phuket_19.jpg", "alt": "Phuket" },
        { "src": "01_phuket_21.jpg", "alt": "Phuket" },
        { "src": "01_phuket_23.jpg", "alt": "Phuket" },
        { "src": "01_phuket_25.jpg", "alt": "Phuket" },
        { "src": "01_phuket_27.jpg", "alt": "Phuket" },
        { "src": "01_phuket_28.jpg", "alt": "Phuket" },
        { "src": "01_phuket_31.jpg", "alt": "Phuket" },
        { "src": "01_phuket_32.jpg", "alt": "Phuket" },
        { "src": "01_phuket_35.jpg", "alt": "Phuket" },
        { "src": "01_phuket_40.jpg", "alt": "Phuket" },
        { "src": "01_phuket_42.jpg", "alt": "Phuket" },
        { "src": "01_phuket_48.jpg", "alt": "Phuket" },
        { "src": "01_phuket_53.jpg", "alt": "Phuket" },
        { "src": "01_phuket_55.jpg", "alt": "Phuket" },
        { "src": "01_phuket_58.jpg", "alt": "Phuket" },
        { "src": "01_phuket_62.jpg", "alt": "Phuket" },
        { "src": "01_phuket_70.jpg", "alt": "Phuket" },
        { "src": "01_phuket_76.jpg", "alt": "Phuket" },
        { "src": "01_phuket_79.jpg", "alt": "Phuket" },
        { "src": "01_phuket_82.jpg", "alt": "Phuket" },
        { "src": "01_phuket_83.jpg", "alt": "Phuket" },
        { "src": "01_phuket_84.jpg", "alt": "Phuket" }
    ], [
        { "src": "02_koh-racha-yai_001.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_009.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_015.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_016.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_024.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_025.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_027.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_031.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_043.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_045.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_049.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_051.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_060.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_062.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_065.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_069.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_077.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_095.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_096.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_098.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_100.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_103.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_109.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_114.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_118.jpg", "alt": "Diving" },
        { "src": "02_koh-racha-yai_131.jpg", "alt": "Diving" }
    ], [
        { "src": "03_chiang-mai_02.jpg", "alt": "Chiang Mai" },
        { "src": "03_chiang-mai_04.jpg", "alt": "Chiang Mai" },
        { "src": "03_chiang-mai_05.jpg", "alt": "Chiang Mai" },
        { "src": "03_chiang-mai_08.jpg", "alt": "Chiang Mai" },
        { "src": "03_chiang-mai_10.jpg", "alt": "Chiang Mai" },
        { "src": "03_chiang-mai_11.jpg", "alt": "Chiang Mai" },
        { "src": "03_chiang-mai_12.jpg", "alt": "Chiang Mai" },
        { "src": "03_chiang-mai_13.jpg", "alt": "Chiang Mai" },
        { "src": "03_chiang-mai_14.jpg", "alt": "Chiang Mai" },
        { "src": "03_chiang-mai_16.jpg", "alt": "Chiang Mai" }
    ], [
        { "src": "04_pai_01.jpg", "alt": "Pai" },
        { "src": "04_pai_04.jpg", "alt": "Pai" },
        { "src": "04_pai_06.jpg", "alt": "Pai" },
        { "src": "04_pai_07.jpg", "alt": "Pai" },
        { "src": "04_pai_08.jpg", "alt": "Pai" },
        { "src": "04_pai_09.jpg", "alt": "Pai" },
        { "src": "04_pai_10.jpg", "alt": "Pai" },
        { "src": "04_pai_13.jpg", "alt": "Pai" },
        { "src": "04_pai_14.jpg", "alt": "Pai" },
        { "src": "04_pai_17.jpg", "alt": "Pai" },
        { "src": "04_pai_18.jpg", "alt": "Pai" },
        { "src": "04_pai_21.jpg", "alt": "Pai" },
        { "src": "04_pai_24.jpg", "alt": "Pai" }
    ], [
        { "src": "05_bangkok_01.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_03.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_07.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_11.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_13.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_14.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_18.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_22.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_24.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_26.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_28.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_32.jpg", "alt": "Bangkok" },
        { "src": "05_bangkok_35.jpg", "alt": "Bangkok" }
    ], [
        { "src": "06_pattaya_01.jpg", "alt": "Pattaya" },
        { "src": "06_pattaya_03.jpg", "alt": "Pattaya" },
        { "src": "06_pattaya_04.jpg", "alt": "Pattaya" },
        { "src": "06_pattaya_07.jpg", "alt": "Pattaya" },
        { "src": "06_pattaya_09.jpg", "alt": "Pattaya" },
        { "src": "06_pattaya_10.jpg", "alt": "Pattaya" },
        { "src": "06_pattaya_11.jpg", "alt": "Pattaya" },
        { "src": "06_pattaya_13.jpg", "alt": "Pattaya" }
    ]];

    return (<main>
        <div className="travel-background" style={{'backgroundImage': 'url(/data/travels/panoramas/thailand.jpg)'}}></div>
        <div className="article">
            <h1>Thailand</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#phuket">Phuket</a></li>
                <li><a href="#chiang-mai">Chiang Mai</a></li>
                <li><a href="#pai">Pai</a></li>
                <li><a href="#bangkok">Bangkok</a></li>
                <li><a href="#pattaya">Pattaya</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p>
                <img src="/data/travels/thailand/images/map_thailand.png" alt="Route"/>
            </p>
            <Carousel gallery={slideshows[0]} directory="thailand" />
            <h2 id="phuket">Phuket</h2>
            <p>
                Back home again from our Thailand trip, so it's time to post some pictures. It was my first time outside of Europe and also the 
                first time I took a plane, and what a difference it was. You notice the open way of living right away, often homes or restaurants 
                didn't have doors or windows, cats and dogs and even chickens were everywhere on the streets. Powerlines everywhere, giant knots 
                and even loose cables, so watch out :) In Phuket we went for a diving course, rented a scooter, got a Thai massage and of course 
                went out on Bangla Road. We had to stay here for 7 days because of Covid restrictions, but it was a great resort with a pool and 
                spa, so it was no punishment at all.
            </p>
            <Carousel gallery={slideshows[1]} directory="thailand" />
            <p>
                The first day of diving was in a pool in the south of Phuket, but on the second and third day we went to Koh Racha Yai, for 6 
                seperate dives in Marina Bay, Camera Bay and Bay One. During this course we had to do some studying, but me and Robbert both got 
                our PADI. We now are certified to dive up until 18 metres deep. During those dives we saw quite a few different creatures and 
                coral, but we plan to do a lot more diving, most likely in Egypt, but I also plan to go back to Thailand and get the second PADI 
                certificate up until 30 metres in Koh Tao.
            </p>
            <Carousel gallery={slideshows[2]} directory="thailand" />
            <h2 id="chiang-mai">Chiang Mai</h2>
            <p>
                From Phuket we took the plane to Chiang Mai, we went to a hostel which Robbert had visited before on his previous trip, but this 
                time we were the only guests, so we went for a VIP room instead of a dorm. After walking around and getting some food (the food 
                was always very good, I mostly liked the green curry soup), we noticed pretty soon that Chiang Mai was pretty dead. After 9pm 
                the sale of alcohol was prohibited and most bars were already closed, even in the main area no single soul was to be found. 
                Thankfully we found some underground parties that were going on through dating apps, so after all we had a great time.
            </p>
            <p>
                The preparations for the lantern festival (Loy Krathong) were in full swing, everywhere paper lanterns were hanging and monks 
                were busy decorating the temples. Unfortunately we had to miss this festival. In Chaing Mai lots of lanterns would have been 
                released in the air and in Bangkok little decorated boats with candles were released in the Chao Phraya river.
            </p>
            <Carousel gallery={slideshows[3]} directory="thailand" />
            <h2 id="pai">Pai</h2>
            <p>
                From Chiang Mai we took a bus to Pai. It took about 3 hours, at first I wanted to rent a scooter to go this route, but in 
                hindsight I'm glad I didn't do this. It was quite a long and curvy road with a lot of height differences, but it was a 
                beautiful route which I also enjoyed looking through a window. Though Chiang Mai was pretty dead, it is also a city. Pai 
                is a little village and considering that most tourists that choose to go to Chiang Mai also go to Pai, Pai was quite busy. 
                We rented a scooter to see some of the surroundings and we went to a lookout and we also found a Chinese settlement, a tiny 
                village with only a couple of houses spread around the scene. When we got back, the main street of Pai which was pretty quiet 
                during the day, was filled with people during the evening and there was a market going on. When the bars closed at around 
                11pm, a couple of kilometers uphill, in the middle of nowhere, a party was going on in a hippy/jungle bar. It was a great 
                way to celebrate my birthday, it was quite a surprise. There were about 6 other people also celebrating their birthdays. 
                The next day we tried to find hot springs, but unfortunately those were dried out. We heard that there were several puddles 
                going from the hottest above (where you could cook an egg) to going colder downwards. Down this road we ran into some 
                elephants, often you hear stories about the treatment of the elephants, but we found out that these were taken to the river 
                every day, where they can play in the mud. In the afternoon we took the bus back to Chiang Mai, where we spent another night 
                and from where we took the night train to Bangkok the day after.
            </p>
            <Carousel gallery={slideshows[4]} directory="thailand" />
            <h2 id="bangkok">Bangkok</h2>
            <p>In Bangkok we booked a luxury hotel in the middle of Khao San Road, which was quite expensive but was less luxury than the regular hotels we booked the nights before. It didn't even have coffee or a balcony. Khao San should have been the main area for backpackers though, so we sticked to it for the first 2 nights. Some bars were open and they all had some visitors, but they all closed at 10pm so we asked around for some after parties. Some people pointed us to a club, but when we got there, it seemed to be raided by the police, so back to the drawing board. We ran into a tuk tuk who wanted to drive us to a club and said we didn't have to pay if there wasn't a party going on, so we went with it. When we came there, the police was there as well, so the tuk tuk drove another circle and when we got there again, the police was gone but the party was gone as well. The second night in that hotel we decided to catch up some sleep and go to Pattaya the next day.</p>
            <p>When we got back from Pattaya we booked a hotel near Sukhumvit Road, which was the main area for the locals to go out. This time it actually was a luxury hotel with a room on the 17th floor and a pool and spa on the 9th floor. From there we discovered that area, went to the (not so) floating market, found some underground parties and before our flight home we went to a rooftop bar on top of a building with 50 floors.</p>
            <p>I forgot my sweater in a hotel in Pattaya, so in the last picture you see how I eventually arrived home</p>
            <Carousel gallery={slideshows[5]} directory="thailand" />
            <h2>Pattaya</h2>
            <p>From Bangkok we went to Pattaya for one night, it was said to be beautiful and the night life would be better than Bangkok. It was beautiful, but everything on the main road was closed, so we got a couple of bottles of Sang Som (rum) and enjoyed the view on the beach. A bit later in the evening a taxi driver on a scooter tried to sell us marijuana. We weren't interested, but asked him if he knew if there was any party going on. He took us to a food court where everyone gathered that night to enjoy some social life. It was ok, but not enough to keep us from going to bed eventually to get up early and go back to Bangkok.</p>
            <Carousel gallery={slideshows[6]} directory="thailand" />
        </div>
        <a href="/" className="homeButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30">
                <polygon points="20 15 4.228 0 0 3.626 11.954 15 0 26.374 4.228 30" transform="rotate(180 10 15)"></polygon>
            </svg>
            <span>Back home</span>
        </a>
    </main>);
}

export default Thailand;
