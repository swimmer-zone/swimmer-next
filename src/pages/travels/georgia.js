'use client';
import React from 'react';
import Head from 'next/head';
import { Back, Carousel, Travels } from '../../Components';
import './_scss/travels.scss';

const Georgia = () => {

    return (<main>
        <Head>
            <title>Swimmer ♬ Travels to Georgia</title>
        </Head>
        <Back/>
        <Travels/>
        <div className="travel-background" style={{'backgroundImage': 'url(/images/georgia/panorama.jpg)'}}></div>
        <Travels />
        <div className="article">
            <h1>Georgia</h1>
            <h2>Table of contents</h2>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#kutaisi">Kutaisi</a></li>
                <li><a href="#batumi">Batumi</a></li>
                <li><a href="#tbilisi">Tbilisi</a></li>
            </ul>
            <h2 id="introduction">Introduction</h2>
            <p><img src="/images/georgia/map.png" alt="Route"/></p>
            <h3>Departure from Charleroi</h3>
            <p>
                On December 19th we took the plane from Brussels to Kutaisi, a city in Georgia. I've never thought of 
                going to Georgia before, but the flight was pretty cheap. The plan was to combine it with Armenia, but 
                with the current situation that didn't seem feasible. I've heard many stories about Eastern Europe 
                being beautiful and had already had a couple of experiences myself, so that promised to be a great holiday.
            </p>
            <h2 id="kutaisi">Kutaisi</h2>
            <p>
                So we started off in Kutaisi where we arrived at 3am, which was the second biggest city in Georgia before 
                Batumi caught up. In Kutaisi we just spent one day and we booked one night in guesthouse Daisy S Home. 
                Daisy was a very friendly lady, she absolutely wanted us to see every room for us to pick, to make it as 
                comfortable as possible.
            </p>
            <Carousel directory="georgia/00_kutaisi" num="4" />
            <p>
                Because our return flight would depart from there so we would come back later. We 
                had our first Georgian meal there, they sure like their bread and cheese. I had Khinkali, which is like 
                dumplings, but in this case with cheese filling. They have their own cheese, called Sulguni. You can order 
                a minimum of 5 Khinkali, there are other variants with mushroom, beef or potato fillings. They all contain 
                a broth, you need to bite a hole and suck out the broth. Legend goes that the person that can eat the most 
                Khinkali with spilling the least soup, must be the best kisser in town. Another dish that I had was again, 
                cheese. This time mixed up with polenta to create some sort of pancake.
            </p>
            <p>
                Apart from some nice views, that was pretty much all we saw in Kutaisi.
            </p>
            <Carousel directory="georgia/01_kutaisi" num="8" />
            <h2 id="batumi">Batumi</h2>
            <p>
               The next day, on December 21st, we took a ride to Batumi, it's a coastal city with pebble beaches at 
               the Black Sea. It is very touristy and it attracts a lot of Turks and Armenians, as it is close to 
               the borders of those countries, that allowed it to outgrow Kutaisi and become the second largest city 
               in Georgia. At first we went for some sightseeing along the beach promenade and downtown, where we saw 
               the moving statue of Ali & Nino, a university building with a ferris wheel built into it what later on 
               became a hotel, we've seen several churches, both orthodox and Catholic and a synagoge. Georgia is a 
               mix between orthodox, Catholic, Jewish and Muslim people that live together peacefully.
            </p>
            <blockquote>
                Ali & Nino, The sculpture was created by famous Georgian artist and sculptor Tamar Kvesitadze. The 
                monument has got the name of the novel "Ali and Nino" by famous Azerbaijan writer Kurban Said. The 
                novel "Ali and Nino" tells about the tragic love story of Azerbaijan Muslim Ali Shirvashir and Georgian 
                Christian Nino Kipiani. The events written in the book happened during the First World War in the 
                Caucasus. The statue of Ali and Nino was created in 2010 and represents a symbol of love, despite 
                nationality or belief.
            </blockquote>
                {/* <li>December 22th: Introduction of Batumi, sightseeing, Mary's Pub</li> */}
            <Carousel directory="georgia/02_batumi" num="20" />
            <p>
                The second day we went to Sarpi, even closer to the Turkish border, we went to see a waterfall, with a 
                statue of apostle Andrew, the waterfall led to a tunnel that serves a purpose of being the path of 
                enlightenment. Also we saw Gonio Fortress and Sarpi Rock.
            </p>
            <Carousel directory="georgia/03_batumi" num="18" />
            <p>
                Initially we booked 3 nights in Batumi, but because we didn't like Kutaisi that much, that would mean 
                that we would have 15 days left to spend in Tbilisi. That's why we decided to book another 3 nights 
                in Batumi, it also seemed like a nice place to spend Christmas. There are both the Catholic and Orthodox 
                religions in Georgia, but Christmas is celebrated on January 7th. They do celebrate New Years Eve 
                at December 31th, but on January 14th they also celebrate Old New Year. One day of Christmas we decided 
                to stay in and create our own meal based on Georgian ingredients. They pickle a lot of things and 
                pomegranates are used in a variety of recipes. Of course there had to be cheese.
            </p>
            <Carousel directory="georgia/04_batumi" num="5" />
            <p>
                The second day of Christmas we wanted to go to the Botanic garden, we wanted to do that before, but 
                there was a lot of rain. We spent an hour in the bus and two hours of walking, only to find out that 
                the garden was closed. We were allowed to visit the beach, but there was trash literally everywhere.
            </p>
            <Carousel directory="georgia/05_batumi" num="18" />
            <p>
                {/* 24-12 */}
                After that we went to several pubs, they have a lot of artisan beers here, among which a tomato beer. 
                My expectations were a bit too high, because to me it tasted like tomato juice with beer added. Same 
                for all other types of fruity beer. So then we came to discover chacha, a byproduct of the way they 
                make their wine in Georgia. I will elaborate on that in the Tbilisi chapter. There is plain chacha, 
                chacha aged in oak and tarragon, peach and honey are also very popular. There are a lot of other flavours 
                as well, like four chilies, chily-berry, garlic, ginger, orange-cloves, kiwi, anything you can think of. 
                They put chacha with those ingredients in a big jar and let it age for a while. The ones that I found most 
                interesting and also liked most were the chily one and the garlic one.
            </p>
            <Carousel directory="georgia/06_batumi" num="16" />
            <p>
                We stayed in Royal Orbi Hotel and for the second booking we needed to move from tower A to tower C. It 
                was a very weird experience, every tower had it's own reception, but for our booking we needed to go 
                to a reception on the floor itself, which was setup pretty sketchy in a hotel room. For the second 
                booking there wasn't even a reception, we arrived on time for our appointment, but the owner wasn't 
                there and he decided to call us after midnight, when we were going out downtown, to collect his money. 
                When we arrived back in the hotel, he was waiting for us in the lobby to collect his cash. After payment, 
                we went upstairs and our keycard appeared to be disabled. We could resolve the issue, but this was our 
                first encounter with the weird Georgian customs. Both rooms looked the same (just mirrored), but one 
                had a fridge and a hairdryer, the other had a washing machine and a microwave. Georgians seem very fond 
                of toilet paper was only one role present, we had to go to the reception on each next day to pickup a 
                new one and these weren't the last bookings where this was a thing.
            </p>
                {/* <li>December 25th: Stay in, prepare our own Christmas dinner, Georgian style</li> */}

                {/* <li>December 26th: Visit the Botanical Gardens, taste artisan beers and introduction to several exotic chacha flavours</li> */}
            <Carousel directory="georgia/07_batumi" num="5" />
            <h2 id="tbilisi">Tbilisi</h2>
            <p>
                {/* 27-12 */}
                On December 27th we took the train to Tbilisi, where we arrived in the weirdest hostel ever, called 
                "Modely". The room was empty with only 2 camping beds with the mattresses covered in plastic, I think we 
                should have been glad they were, to have some sense of hygiene. A weird contraption should have functioned 
                as a shelving unit. If you put something on, it would collapse. The shower had only cold water, there was 
                no toilet paper and the lobby was used for the owner to chill out with his friends.
            </p>
            <Carousel directory="georgia/08_tbilisi" num="17" />
            <p>
                This didn't feel right at all, so we decided to pay for the night and leave right away. We came across a 
                guesthouse "Tents in Georgia", which was infinitely better. We slept in a tent inside the house, which was 
                quite a nice concept. THe owner was very friendly and helpful and we ended up in a pubcrawl with them and 
                other guests and people who live there.
            </p>
            <Carousel directory="georgia/09_tbilisi" num="12"/>
            <p>
                {/* 28-12 & 29-12 */}
                The first full day we were in Tbilisi we booked a free tour through the city with David. He told us 
                about Liberty Square, Europe Square, the Mother of Georgia statue on the top of the mountain. The
                freedom bridge, the Tamada statue and introduced us to the sulfur baths which are supposed to have
                healing capabilities. We gladly took those the next day.
            </p>
            <blockquote>
                The Tamada holds a horn filled with wine in his hand, raised, ready for his toast. As you can see from 
                the photo, it is believed to be good luck to rub his horn, his arm or to sit in his lap.
            </blockquote>
            <Carousel directory="georgia/10_tbilisi" num="38"/>
            <p>
                {/* 30-12 */}
                We planned a day trip to Armenia, the original plan was to visit both countries and spend an equal amount
                of time in both Georgia and Armenia by flying from Tbilisi to Yerevan. But because there was some stuff 
                going on between Azerbaijan and Armenia, we decided to stick to Georgia and do a day trip to some border 
                villages in Armenia. This appeared to be a big adventure, because it's close to New Years Day and
                this was the time families get united

            </p>
            <Carousel directory="georgia/11_tbilisi" num="52"/>
            <p>
                {/* 31-12 */}
                An off day to get some rest before celebrating new year's eve.
            </p>
            <Carousel directory="georgia/13_tbilisi" num="5"/>
            <p>
                {/* 01-01 - some rest after nyq */}
                Next day we took the metro to the end station and slowly progressed towards the hostel, station by station.
            </p>
            <Carousel directory="georgia/12_tbilisi" num="14"/>
            <p>
                {/* 02-01 */}
                And the day after that we did a wine tour to Telavi and Kakheti, where we also visited the Bodbe Monastery
                in Sighnaghi, which is also called the love city.
            </p>
            <Carousel directory="georgia/14_tbilisi" num="52" />
            <p>
                {/* 03-01 */}
                Chronicles of Georgia and Mtatsminda park
            </p>
            <Carousel directory="georgia/15_tbilisi" num="26" />
            <p>
                Guided tour to Highlights of Kaukasus Mountains - Jinvali, Ananuri, Gudauri, Kazbegi - Another sulfur bath
            </p>
                {/* <li>January 4th: Guided tour: </li> */}
            <Carousel directory="georgia/16_tbilisi" num="30" />
            <p>
                {/* 05-01 */}
                Free city tour, museum of illusions and another visit to the sulfur baths.
            </p>
            <Carousel directory="georgia/17_tbilisi" num="17" />
            <p>
                {/* 06-01 & 07-01 */}
                Last day, train back to Kutaisi, spent a night in Charleroi because of delays and some random pictures.
                We arrived back home at January 7th.
            </p>
            <Carousel directory="georgia/18_tbilisi" num="20" />
        </div>
    </main>);
}

export default Georgia;
