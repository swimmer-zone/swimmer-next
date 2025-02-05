'use client';
import Head from 'next/head';
import { Menu, Carousel } from '../../Components';
import '../_scss/travels.scss';

const Europe = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

    return (<main>
		<div className="container">
            <Menu active="travels"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content" style={{'backgroundImage': 'url(/images/europe/panorama.jpeg)'}}>
                    <Head>
                        <title>Swimmer ♬ Travels through Europe</title>
                    </Head>
                    <div className="travel-background"></div>
                    <div className="article">
                        <h1>Europe</h1>
                        <p>
                            The story below is translated from Dutch, I'll also keep the original somewhere, I don't know where to put it 
                            yet. I need to re-review the story below to remove the mixins of present- and past tense.
                        </p>
                        <p>
                            Starting wednesday, may 14th I quit my job at the McDonald's to be able to prepare my journey. Doing so will end 
                            another stage in my life after working there for almost a year. Meanwhile I brought Henk to my mom, who just 
                            found a new home in Den Bosch.
                        </p>
                        <h2>Table of contents</h2>
                        <ul>
                            <li><a href="#the-netherlands">The Netherlands</a></li>
                            <li><a href="#belgium">Belgium</a></li>
                            <li><a href="#france">France</a></li>
                            <li><a href="#switzerland">Switzerland</a></li>
                            <li><a href="#italy">Italy</a></li>
                            <li><a href="#austria">Austria</a></li>
                            <li><a href="#yugoslavia">Yugoslavia</a></li>
                            <li><a href="#bulgaria">Bulgaria</a></li>
                            <li><a href="#greece">Greece</a></li>
                            <li><a href="#turkey">Turkey</a></li>
                            <li><a href="#romania">Romania</a></li>
                            <li><a href="#hungary">Hungary</a></li>
                            <li><a href="#slovakia">Slovakia</a></li>
                            <li><a href="#czech-republic">Czech Republic</a></li>
                            <li><a href="#germany">Germany</a></li>
                            <li><a href="#back-to-the-netherlands">Back to The Netherlands</a></li>
                            <li><a href="#luxembourg">Luxembourg</a></li>
                            <li><a href="#poland">Poland</a></li>
                            <li><a href="#tldr">TL;DR</a></li>
                        </ul>
                        <h2 id="the-netherlands">The Netherlands</h2>
                        <p>
                            Saturday, may 17th is the day of my take off. First I planned to catch the train of 10 o' clock, but it appeared 
                            it would be on its way for almost 7 hours, so I thought of taking the train of 11 o' clock, still being on its 
                            way for 6 hours. I eventually planned to take the train of 12 o' clock, which was on its way for only 5 hours, I 
                            missed it, but the same story goes for the train of 1 pm. I did have a party the night before, I got a present, 
                            which was huge.
                        </p>
                        <p>
                            The first stop is Bruxelles, I've been here before, but never got to see the Atomium and "Manneken Pis", I've never 
                            been further than the trainstation before. The second stop, where I'm also planning to spend the night is London.
                        </p>
                        <h2 id="belgium">Belgium</h2>
                        <p>
                            Meanwhile I've been through Liège and now I'm in the train to Bruxelles. You don't have to travel a long way, if 
                            you've crossed the border past Maastricht, you're already in the Ardennes, a nice sloped landscape. Unfortunately, 
                            one of Belgium's characteristics are the greyish buildings.
                        </p>
                        <p>
                            It's now 9 pm and I've seen a big part of Bruxelles. It's bigger than I thought, I didn't come across Manneken Pis 
                            or the Atomium but I did see a royal neighbourhood, with the palace of former king Leopold and a couple of buildings 
                            of the European Parliament, which resides in Bruxelles.
                        </p>
                        <p>
                            I expected to be able to travel to London from here, but a reservation is required and you can't get around the 
                            tourniquets. Also, 75 euros for the ticket and reservations only is way too much for now.
                        </p>
                        <p>
                            Right after I wrote the previous paragraph, the train to Paris didn't seem to leave anymore today, so I continued 
                            my walk through Bruxelles and decided to spend the time I had as useful as possible. I thought I didn't have any 
                            choice, but a hostel came across. 30 euros is pretty much too, but I could use the room and decided to leave early 
                            in the morning.
                        </p>
                        <h3>Bruxelles</h3>
                        <Carousel directory="europe/00_bruxelles" num="4" />
                        <h2 id="france">France</h2>
                        <p>
                            I'm half way past the second day and I miraculously managed to get up on time and catch the 10 o' clock train to 
                            Paris, which arrived at 13:10. It's now 17:00 and I walked all day. I found the Eiffel Tower, I passed by the Louvre, 
                            which is an impressive building, it may be half a kilometre long. Because I'm on a budget, I couldn't visit the Louvre 
                            or climb the Eiffel Tower. I don't know what it would've cost, but at the time I was there, I didn't care about that. 
                            After walking non-stop for almost two days with a heavy backpack, blisters are eagerly growing. Now getting some rest 
                            at a cafe with a coke of 4,20 euro's.
                        </p>
                        <p>
                            I thought it would be easy to catch the metro to the railway station, there was a stop right in front of the door, but 
                            it seemed impossible without ticket, which of course aren't sold at the stops. I must say Rotterdam manages this a lot 
                            better. So I had to walk back, because of this, I was able to spot the Arc de Triomphe and the Champs Elysées. The 
                            latter is known world wide, but the way I saw it, it's no more than a large street with shops, like the Heerestraat in 
                            Groningen, but a bit bigger. Maybe I had to see it at night, when it was lit, it seems that there is a red part, a 
                            white part and a blue part, just like the French flag. On the other hand, the shops might have been closed by then.
                        </p>
                        <p>
                            I almost forgot to mention the Notre Dame, which is quite an impressive building as well, with a nice park around it, 
                            but the park is nothing compared to the Jardin de Botanique, which I've seen earlier on the road, I don't know the actual 
                            name, but I'm planning to find out.
                        </p>
                        <p>
                            It's a shame that I missed a couple of modern buildings, like Tour Montparnasse, but I had to make choices, there's still 
                            a lot to see in the rest of Europe. I want to visit London once in the future, and I'm planning to visit Paris more often 
                            as well, but as romantic as Paris is, it's no city to visit on your own.
                        </p>
                        <p>
                            Right now I left to Strasbourg, where I'm writing this story. I don't plan to stay long. After getting some rest this 
                            night and maybe visit an internet cafe and walk around a bit, I'm leaving to Basel and maybe Dornach after that, where 
                            the Goetheanum is located. Marc inspired me to visit this, he missed it during his journey, so now I'm checking it out, 
                            I never heard about it, but it has quite an interesting story.
                        </p>
                        <h3>Paris</h3>
                        <Carousel directory="europe/01_paris" num="11" />
                        <h3>Strassbourg</h3>
                        <Carousel directory="europe/02_strassbourg" num="6" />
                        <h2 id="switzerland">Switzerland</h2>
                        <p>
                            It's almost 14:00 on monday May 19th and I'm sitting in the train to Basel. I walked around for a bit in Strasbourg in the 
                            historical city centre. Strasbourg is in France, but the architecture suggests it's Switzerland or Germany. I suspect to 
                            see this a lot more. Like Bruxelles, Strasbourg is an important governmental city for the European Union. Like Bruxelles has 
                            named every street to an European country, Strasbourg has spots where all European flags are located and here's also a building 
                            for the parliament.
                        </p>
                        <p>
                            By the way, I've arrived in Strasbourg with the TGV, but according to me, they may leave the G and the V out. The hotel, on 
                            the other hand, was ideal, including foot bath, It's like they knew I needed that.
                        </p>
                        <p>
                            Meanwhile, I've arrived in Basel and walked around a bit, I didn't think it was very special, but it seemed to be a well 
                            known city because of its narrow streets. I've decided to take the tram to Dornach, to the Goetheanum, which isn't too far 
                            from the tram stop. For this, I needed to climb a couple of steep, narrow streets. This time no city streets, but the streets 
                            of a small village, which is kind of refreshing, especially in Switzerland, with its beautiful environment and landscape with 
                            mountains.
                        </p>
                        <p>
                            The Goetheanum is built according to the four elements, on a way which is best for that specific moment. They began building 
                            and made everything up as they went along (correct me if I'm wrong). What was also remarkeable that the houses around the 
                            Goetheanum are built using the same style and technique. My journey is based on the same principle. Now I'm going back to Basel, 
                            from where I'll take the train to Zürich. The things I saw in Dornach were the things I expected in Basel, but ten times better.
                        </p>
                        <p>
                            While arriving in Zürich, I checked if there was a train to Milan, which has sleeping facilities. This route seemed too short, 
                            so it wasn't possible. However, it was possible to take this kind of train to Rome, so I reserved a seat right away. Because 
                            it's leaving pretty early, at 21:30, I didn't get the chance to see much of Zürich, but I don't mind, because of the limited 
                            tourist attractions. I also had to leave Switzerland, because it's a pretty expensive country. I did walk around for a bit in 
                            Zürich though and it was nice to see how everything was built around the mountains. It doesn't happen very often that there's 
                            a building with a downslope of 30% on the one side and an up slope of 30% on the other.
                        </p>
                        <p>
                            I planned to go to Milan on the way to Rome, but I have to take this route twice, so I think it's not too much effort to do 
                            this on the way back. I will arrive at 9:30 in Rome, so I'm pretty certain that I'll get the chance to see a lot of Rome that 
                            day.
                        </p>
                        <h3>Dornach</h3>
                        <Carousel directory="europe/03_dornach" num="4" />
                        <h3>Zürich</h3>
                        <Carousel directory="europe/04_zurich" num="2" />
                        <h2 id="italy">Italy</h2>
                        <p>Now arrived in Rome with the train, it's not even 11:00 yet and already I've seen quite a bit of Rome. At this moment I've almost arrived at the Colosseum. At the reservations for the train I could choose for a spot in a coupe for 4 or for 6 persons. I chose the latter, giving myself a chance to meet someone, but apparently they were only older Italian people, so they didn't speak a word of English, so I tried to talk to them with the little German they knew and the little German I knew.</p>
                        <p>At first, there was also an American guy, but he was asked to trade places, because the older couple had to sleep in seperate coupes otherwise. Just my luck, I thought. I also thought the train wouldn't have any stops in between, but in the beginning of the route there were some more stops, so I came to talk to Emily in the morning, she had a reservation for a hostel in Rome, so we ended up looking for it together. I reserved a bed there too and so it became the first day walking without a backpack.</p>
                        <p>Then I continued my journey on my own and I came along an arena with underground alleys and dungeons (which aren't below the ground anymore for a long time), where gladiators were held prison for the fights. Furthermore I came across a Roman banking building and churches and basiliques and buildings of which I have no clue what they were for, I guess mainly to parade with the Roman wealth. The many fountains in Rome also serve no other function.</p>
                        <p>Right before I arrived at the Colosseum, I found out that the batteries of my camera were almost empty, but luckily I had spare batteries, but they were in my back, which I left behind for the first time. But no worries, because in the hostel also were a couple of computers, where I could type this story. Uploading pictures wasn't possible, because of the high security settings, so they will come some other time.</p>
                        <p>I'm staying here for a little extra while, because the moment I finished typing my story, I hear rain and thunder outside. It's 13:30 and at 15:00 I can go to the room, so for now it's some surfing, eating and picking a bed, to be able to discover Rome some more afterwards.</p>
                        <p>It seemed that the bar in the hostel was still closed, so I chose to walk anyway. Some (import) Italians made a big business of the rain, because I got asked about fifty times by some guy to buy an umbrella. On every street corner or every entrance of, for example, the railway station was another one of them. I wonder what they do when it's sunny, sell sunglasses?</p>
                        <p>I've seen the Colosseum now, also a small piece of the inside, because the paid entrance is on the inside of the Colosseum. With a new battery I've been able to make several pictures.</p>
                        <p>With the bus, which seemed to be just 1 euro, I could get to Vatican City, a pilgrimage for lots of catholic people. There was a long line, however I don't know where that would've led. A while later I came to the conclusion it led to tombs for the previous popes. This is a sacred place, so I wasn't able to take a lot of pictures here. I'm absolutely no catholic, but it all was quite impressive. I tried to get to the Sixteenth Chapel, but it was only opened for groups with a guide, so I went back to the hostel. Never before had I've seen so many nuns, I've never seen one at all.</p>
                        <p>Tomorrow I'm planning to visit Pisa, Venice, Bologna, Verona and Milan. After that I want to go to Vienna and Belgrade, if all goes according to plan.</p>
                        <p>I spent four nights on my journey, one in Bruxelles, Strasbourg, in the train and the last in Rome. The night in Bruxelles was bad, nice room but poor welcome from the clerk. The night in Strasbourg was a lot better, nice room, without a toilet though, but it felt like home. I didn't expect to sleep well during the third night, it was a bit tight, but all in all it wasn't that bad. It had a good breakfast and coffee as well. The fourth nigh was the best so far, it began with beer and wine, I met two Canadian girls here, Lauren and Daniëlle, who slept in the same room. Also a Canadian guy and a guy from Colombia, who studies in Illinois, Chicago. Dorian, a guy from Los Angeles slept there too, but I didn't hear much from him. This hostel included free pizza and a breakfast, so I'm glad to have met Emily.</p>
                        <p>It's now eleven o' clock and I'm sitting in the train to Florence, while travelling I found out that Firenze is the Italian name. Pretty weird, because I've seen that name in several places before. I overheard some people in the hostel talking about Florence and it's not even on my list. I also heard Emily and Lauren talking about Pompeii, where Vesuvius seemed to have erupted not too long ago. They were now rebuilding the place. The soil is very fertile and there's still sulfur in the air. It looked interesting, but with a journey of 2 hours, and of course a return journey of 2 hours, I decided not to go. I came to the (maybe premature) conclusion that the area would be fallow. I also heard that there isn't much to do in Bologna and Verona, so I decided to trade those for a visit to Maranello, the capital of Ferrari.</p>
                        <p>After leaving Rome and the 'umbrella guys', someone in the train tries to sell me socks. They just never learn... Now I'm passing throug the Apennines and I discovered that my spare battery is also empty, although, I hope it's the battery. I tried to charge the first battery in the hostel, but the next morning I found it laying on the ground, I guess it didn't charge much. Shame... because with this rainy weather it's nice to see the tops of the mountains disappearing in the clouds. I did manage to capture it on some pictures, so I hope they succeed. I'll try to get a disposable camera in Florence.</p>
                        <p>I'm now in the train for about two hours, with an hour to go. In the Netherlands three hours seem like ages, but out here in Tuscany the view is so good that it wouldn't be a problem to spend all day in the train.</p>
                        <p>After spending a couple of hours in Florence, I'm chillin' on waterfalls. I'm glad I chose Florence, with a river running through the city and remains of castles and a city wall. The next destination will be Pisa and because this is a tourist attraction, the hostels will be expensive, so it will be a short stop. Actually, laying down here sleeping on the waterfalls would be nice, but because this was the first time the sun broke through, it didn't seem like a good idea.</p>
                        <p>The Piazza del Duomo in Pisa was pretty easy to find, a single road from the train station to the tower. The salesmen, at other times pretty irritating, pointed me right to it. Pisa is a very small village and there's not much to see there.</p>
                        <p>About the tower: I didn't know it was open for public, but looking at the amount of people walking in it, I guess the amounts are limited.</p>
                        <p>At first, the tower was perfectly vertical, but when the 6th floor was built, the tower began leaning, until reaching the final angle along with the final floor. There are 8 floors in total, built with marble, just like the building standing right next to it.</p>
                        <p>It appeared to be the same thing, like the Sixteenth Chapel, only for groups with a guide. A lot of security regulations, you can only enter the 7th and 8th floor. Of course the winding staircase of 300 steps is an exception. It can't be climbed by people with a weak heart or those who are afraid of heights, of course the staircase leans along with the tower.</p>
                        <p>Again I'm in the train, this time to Milan, through Genua. This is also a very beautiful route, through a lot of tunnels in the mountains and along the coastline of the Mediterranean Sea, about 20 metres above sea level. My guess is that you see a lot more of the landscape if you travel with the train, highways are mostly placed outside of all the villages, where railway stations are placed in the center of those villages. It's getting a bit dusky, but there's still a lot to see. I hope the pictures with the disposable camera's will work out. I bought two for the price of one in Florence, with a total of just 56 pictures, so I have to be a bit economical. If I can get them developed digitally, I guess I can make something of them with Photoshop.</p>
                        <p>I planned to go to Milan, but stranded in Genua, where I met Daniel, again someone from Canada. It was already late, around 22:00 and no indication of how to get to Milan anywhere. The railway station was closed already and there were no employees around anymore, so I guess I had to find a hostel or sleep at the station. The latter wasn't possible, because it was closed. Daniel told me Milan was nothing more than a fashion capital with a couple of high buildings and a cathedral, but it isn't the first, and it won't be the last cathedral I'm going to visit. Daniel is catching the sleeping train to Venice, this one also stops in Verona and if all goes well, my sleeping problem is solved. Missed a city again, but that's no problem. I couldn't get an Inter Milan shirt for Ronny, but maybe he likes Ferrari :).</p>
                        <p>It's now 5:30 on thursday morning and I'm waiting for the train to Modena. I took a short walk in Verona, but there seems to be nothing much to see at first sight. A lot of roads and a small church right in front of the station. I've looked on the map and that also points out there's not much. The only special thing about Verona is that Romeo &amp; Juliet is recorded here, I read on Wikitravel that a lot of places are graffitied with small hearts or pieces of gum shaped like hearts.
                        Last night I slept for about 5 hours and I'm trying to reach Maranello today. Now I've arrived in Modena after a pretty long journey because of the many stops. I was still tired and I didn't know what time the train was supposed to arrive, so I had to check every stop if it wasn't Modena. I took the wrong bus to Maranello, but a police officer (carabinieri) who had to go the same way, helped me out. She didn't speak a word of English and I didn't speak a word of Italian, so it was a bit rough. I've got to learn some Italian, because I'm certainly planning to go to Italy again, a beautiful country and a lot of kind people. I've got a book lying around with some basic Italian sentences, but of course I left it at home.</p>
                        <p>While I'm waiting for the bus, I'm drinking a coffee. It was a mistake to order a coffee, because in Italy that equals an espresso. Everyone knows these cups are as big as an egg-cup and she poured it only half full, but with every sip it's an explosion of energy.</p>
                        <p>Maranello is <strong>red</strong>, you see in everything that this is the Ferrari village, a lot of bushes with red roses, on every square metre there's a shop that sells Ferrari merchandise and you can even eat a Ferrari pizza in the restaurant, which of course is fully equipped with Ferrari stuff. Also a lot of people are walking around in a red drivers suit, but the cars were nowhere to be found, so I decided to visit the museum for 12 euros, because I would have travelled all those hours for nothing. There are several formula 1 cars displayed, starting with the car from 1970, with a couple of engine blocks and a device to fill a tank in no-time in the pitstop. Furthermore a couple of well known models, like F40, F50, Enzo, Testarossa, Barchetta and so on. I didn't take a lot of pictures, because I'm planning to save them for Venice.</p>
                        <p>Another day full of new experiences past. I've arrived in Venice and thought, walking to the city centre, I can do that. Apparently I picked the wrong stop, there were two stops in Venice. So I bought an ice cone, straciatella of course, and asked for directions. I was told to pick bus 10, which happened to have a stop right in front of the shop. After doing that, I still arrived in the middle of nowhere. I crossed a bridge and there was a park, stretching for about ten kilometres, with a little restaurant. There I asked again for directions, with the little Italian I've learned so far. They were very helpful, even more people started helping with the translation. It occurred I could walk the ten kilometres or take the bus. I didn't have a ticket for the bus, so I thought I'll walk. Half way there I asked some skaters if I was on the right track, which wasn't the case. So I walked back to the restaurant and ordered a cappucchino. I asked if the hotel next door was expensive, which resulted in the whole crew helping me find out if there were spare rooms, which there weren't, so I came by hotel Primavera, which seemed to be some sort of motel.</p>
                        <p>They're pretty bad in giving directions, but the service makes everything right, so I talked to someone else on the streets which was walking his dog. He grabbed his phone right away and made some reservations. I didn't see any of the lagoon yet, but tomorrow there's another day. Maybe I'll stay for two nights, because it isn't expensive.</p>
                        <p>After saying that I've booked another night after having a decent meal. Now I can leave my bag for the day when I walk through Venice and rest for a bit, because tomorrow I'm on my way for exactly one week. I now also have the chance of charging my batteries. I'll get out of bed early on saturday morning, to leave to Salzburg and then spend the night in Vienna, or in the train to Greece.</p>
                        <p>I heard from my parents that Venice is a grayish place, which it is, but of a place which hasn't been rebuilt for the last 600 years and which is constantly exposed to the salty water, you can't expect much more than that, also the stench of the channels that function as an open sewer for many buildings doesn't help. They're trying to change that, but it won't be finished for a long time.</p>
                        <p>Because it hasn't been touched for a long time, it has its charm. The boat or gondola is replacing cars completely, you don't cross the road here on a crossing, but with a bridge. Also the civilians often need a bridge to enter their house and it happened a couple of times that I crossed a bridge and stood in front of a store, with no place else to go. On a building site the concrete was shipped by a gondola. It can be pretty dangerous here at night, because a lot of alleys end with a quay, so you can have very refreshing dives before you know it.</p>
                        <p>Now I'm back in the motel again, I've stayed for 4 hours, it was smaller than I thought and if you've seen 10 streets, you've seen about all of them. A lot of pizzeria's and shops selling jewelery and masks. There was a market and I've seen a stand with football shirts with a shirt of Figo of Inter Milan and I think I can please Ronny with that. Out here in the motel I get the change to update my blog and figure out how to go to Salzburg and if there are direct connections to Vienna and Athens.</p>
                        <p>Finally I've arrived at the railway station. I find out again and again that it's very hard to place direction signs to important places like stations. I've gotten some directions, but with those I had to walk along the highway without banks or sidewalks. An example is Paris, with its Eiffel Tower: there was a sign, but it was about a hundred metres away from the tower itself, so I could see the top already. Today I'm going to Salzburg, through Verona and Innsbruck, which is actually a detour, I will be sitting in the train for about six hours. In the train a deaf man came by, asking for some money, but gave back a little lantern. A nice little souvenir. This happened to me before in Paris, someone asked for my pink and I was stuck before I knew it, he made me a bracelet, right on the spot. These things are nicer than souvenirs you buy in some store.</p>
                        <h3>Rome</h3>
                        <Carousel directory="europe/05_rome" num="17" />
                        <h3>Florence</h3>
                        <Carousel directory="europe/06_florence" num="3" />
                        <h3>Pisa</h3>
                        <Carousel directory="europe/07_pisa" num="2" />
                        <h3>Maranello</h3>
                        <Carousel directory="europe/08_maranello" num="4" />
                        <h3>Venice</h3>
                        <Carousel directory="europe/09_venice" num="11" />
                        <h3>The Vatican</h3>
                        <Carousel directory="europe/10_the-vatican" num="7" />
                        <h2 id="austria">Austria</h2>
                        <p>Already in Innsbruck in the last train to Salzburg. I reserved a spot in the train between Verona and Innsbruck, but they decided back in Venice to cancel that train and my reservation was worth nothing. Luckily there were some seats left in the aisle next to coupes, which weren't very comfortable, but they were right next to the window, with nice views. A lot of little waterfalls and vertiginous high bridges. I tried to make some pictures, but that was impossible thanks to the reflection in the window.</p>
                        <p>Once I arrived in Salzburg, I tried to find a place to sleep immediately. I consulted Wikitravel and at the top it said "Youth and Family Guesthouse Salzburg", so it sounded cozy to me but Salzburg is the city where Mozart is born (I passed his Geburtshaus), but especially the city where The Sound Of Music is recorded. They show this movie every evening at this hostel, so I could imagine the type of guests that sleep here. I could choose between a room for 50 euro's, or a room with eight beds for 20 euro's. I was the only one in that room, but this floor was actually meant for girls. It was an easy choice, but I wished I found another hostel. So far with Wikitravel, I guess...</p>
                        <p>A citymap (or Stadtplan) was nowhere to be found, but you can buy them for 8 euro's each, which made the night as expensive as the other nights. While navigating I saw some things though, like a big castle, I guess it was a castle made of salt, which gave Salzburg its name. Furthermore a couple of houses which had a facade sticking just a metre out of the rocks, I guess the rest of the house is carved into the rocks. The people in Salzburg were pretty helpful.</p>
                        <p>Vienna is big, out here a small alley is at least 30 metres wide. Everything was easy to find here, walking through a long shopping street right from the station. Despite the size, it had a more cosy feel to it than Salzburg. Italy is known for its pastel colors and round shapes, Austria is known for its white pointy shapes, crowded colors and a lot of gold.</p>
                        <p>I needed to have a Wiener Schnitzel of local produce, now I'm in Vienna, and also a Wiener Melange had to be consumed, an heavy meal.</p>
                        <p>Tonight I'm catching the train to Belgrade and from there I guess I'll take the train to Skopje. I can't stay long in Belgrade, because if you are in Serbia for more than 24 hours, you have to request a visa. The trip gets a little bit more frightening, now I'm off to Eastern Europe. Especially former Yugoslavia, where there hasn't been a war for a very long time of course, but I guess the ambiance is stil there. But it is all part of the experience and I'm sure it will all be easy.</p>
                        <h3>Salzburg</h3>
                        <Carousel directory="europe/11_salzburg" num="9" />
                        <h3>Vienna</h3>
                        <Carousel directory="europe/12_vienna" num="5" />
                        <h2 id="yugoslavia">Yugoslavia</h2>
                        <p>Also Belgrade is a very impressive city. I haven't walked around here yet, first I'm getting a cup of coffee, just like every other morning. I've seen parts of the city from sitting in the train. A lot of building sites and suburban area's, built with corrugated sheets and doors they could find somewhere. Everything kept together with some old tires on the roof. I haven't seen any buildings with holes like I've heard, but this could also be Sarajevo or Kosovo or some other capital in former Yugoslavia.</p>
                        <p>I decided to alter my trip again, I'm going to Thessaloniki through Sofia instead of Skopje, and on the way back from Istanbul I'm going through Bucharest instead of Sofia. Skopje is also a capital of former Yugoslavia, so I'm going for as many cultures as possible. This way I don't have to cross the same route through Yugoslavia twice.</p>
                        <p>I already noticed that life isn't expensive out here, an Euro is worth 80 Dinar, so after cashed a thousand Dinar, I feel pretty rich. After ordering a cup of coffee and an apple pie, I got a big pile of money in return.</p>
                        <p>After walking for about five minutes, I see I need to change some things in my opinion, after seeing a couple of buildings with holes the size of three stores. First I'll rest some in a park, because I have a lot of time to spend here, maybe too much time. Belgrade means white city in Serbian, but I haven't seen anything white yet. A lot of gray and some smoke black. The roads miss pieces of asphalt here and there. Most cars are Beetles or a Lada, from the 80's, so the city is covered in fuel damps, especially on this sunny day. But there are a lot of contradictions, on the one side a bombed building and on the other side a big glass building.</p>
                        <p>Alright, I admit, the number of white buildings is ascended to one, a big temple which is luckily completely in tact. I'm trying to find an internet cafe out here, because I need to spend 15 hours out here, but the Russian alphabet is a lot harder than it seems. I'll take a look to the white temple, if it's opened.</p>
                        <p>And so it was, so I took a look inside, in here you can see a bit of wealth that is left, with an enormous room. On the way back to the railway station I found an internet cafe, I have to stay around the station, with just one train that leaves to Sofia.</p>
                        <p>I've lost my diary, but luckily I have an online backup which is updated regularly, so I'm only missing one or two pages, which were easily rewritten.</p>
                        <h3>Belgrade</h3>
                        <Carousel directory="europe/13_belgrade" num="5" />
                        <h2 id="bulgaria">Bulgaria</h2>
                        <p>At the very last minute, when I was waiting for the train to Sofia, I met a nice person. Someone I don't want to meet in the dark, but I guess he'll say the same thing about me. I got a souvenir from him, a lighter with the Serbian flag. After that it was deafening silence, Serbian is not one of the languages I know.</p>
                        <p>While walking to the train, which was in front of me for some time, I met a fellow-backpacker Thomas, initially the conversation was in English, but he seemed to live in Bruxelles. It's been some time now that I've spoken dutch. He confirmed my thoughts that I didn't miss much when skipping Manneken Pis.</p>
                        <p>My plan was to go to Sofia and visit the city, but Thomas went to an abbey, about 50 kilometres south of Sofia and almost on the route Sofia-Thessaloniki. It was nice to visit a village for once, it was named Rila and there was an abbey in the neighbourhood, in the middle of nature and mountains. The hay wagons were still pulled by donkeys and the trains don't seem to go faster than 30 kilometres an hour. The overall mentality is nice and easy-going, it wasn't weird that the bus was long gone when you arrived at the stop right on time. Thomas had studied Polish, so he seemed to find his way with Slavic languages and partly with the Cyrillic alphabet. That way we found our way to the abbey and back to the railway station. I left at the evening from Blagoevgrad and Thessaloniki. Around the border the Bulgarian border police needed to check passports and train tickets, and a little while later again by the Greek border police. So I had a delay of two hours and had to find a place to sleep at 1 o' clock at night.</p>
                        <h3>Rila</h3>
                        <Carousel directory="europe/14_rila" num="8" />
                        <h2 id="greece">Greece</h2>
                        <p>Everywhere I go Dutch things are to be found, like Heineken of course, but also ABN Amro or Randstad Uitzendbureau. The concierge of the hotel in Thessaloniki seemed to have a girlfriend from Groningen and a shirt with the famous expression "Er gaat niets boven Groningen".</p>
                        <p>I've walked for a bit in Thessaloniki in the morning after, a nice and cosy city, but little traces of the Greek culture like I know it. I guess my chances are better in Athens, so I got on an early train to prevent situations like the last night. You can see that it's back to civilisation in Greece, most people are capable of understanding English. I see a lot of houses with solar panels from the train, with something that seems like a water tank, to keep the water warm. We now pass the Olympus, well, I guess it's the Olympus, it's one mountain in the middle of a big flat surface.</p>
                        <p>The train to Istanbul had a delay of two hours, with a sleeping spot without air conditioning and about thirty degrees, so I guess I spoke a bit too soon about civilisation. It didn't look too well for Athens either, but the place where the hostel was sitting, there was a whole area of local youth and young tourists, with dozens of hostels and internet cafe's in just one street. When I arrived at the hostel I found on Wikitravel (yeah, I guess it came in handy once again), they didn't seem to have any beds left, so they pointed me to Easy Hostel, which was an about fifteen minute walk, they made sure there was a bed for me left.</p>
                        <p>Navigating was easier than Serbia and Bulgaria, everything is mostly in Greek, but below the Greek alphabet they put a translation in the Latin alphabet. The Easy Hostel was near a railway station and also near the Acropolis. I didn't get a big breakfast, but I was pleased for just 16 euro's. I'm now going to the Acropolis and after that I get the train to Svilengrad, a city I've never heard of before and I don't even know if it's in Greece or Turkey, but it was necessary to be able to get in Istanbul. At the station someone tried to sell me international tickets to Istanbul for 90 euro's. There was just one window for international tickets, so I spent the evening in an internet cafe to review my possibilities.</p>
                        <p>Arriving satisfied on the railway station, after what I've seen today, a lot of Greek and Roman history. At the Acropolis there was an open air theatre and a couple of other buildings, of which I found out later that it were temples. With a combi ticket I could also visit a Roman Agora and an Ancient Agora, I have no clue about what Agora's are, but let's find out. There were a lot of explanatory signs with a lot of big stories on them, but with the high temperatures and the long climb, I'm glad to be at the station again. There were three more attractions on the ticket, but I skipped them also. For now just a bit chillin' while I'm waiting for the next train.</p>
                        <p>I asked the conductor and Svilengrad seems not to be in Greece or Turkey, but Bulgaria. A little detour, but with a free reservation instead of 90 euro's it's easy to come by. Although I need to make reservations from Svilengrad and I have to wait for one day out there. Maybe this is a chance to get a new shirt and do the laundry. The trip to Svilengrad takes about 17 hours and with a break of half a day, the whole trip to Istanbul takes about 40 hours. If you need to be in a train for 17 hours, there doesn't seem to be anything better to do than to sleep, so I was already sleeping at 18:00. I shared a cabin with a lady, who of course didn't speak a word of English. However, she needed to tell a lot about everything, but I didn't understand a word of it.</p>
                        <p>Halfway on the trip, at about 22:00 hours, but my rest was cruely disturbed by a conductor who was yelling in Bulgarian or Greek, that we needed to transfer to another train. We were in Thessaloniki and there wasn't anything on the list of the NS that this was a stop. This wasn't right for me and I thought of many ways to disturb his rest, bats, clubs, megaphones, anything. Trying to be nice to the lady demanded its toll, I needed to replace her bags for many times. Being grumpy and tired, I layed down my pen for today.</p>
                        <p>This morning I've arrived at the station of Alexandropolis, it's already friday and tomorrow the third week of my journey is starting. It's nice that they've said the train had a delay, back in Athens and that we would be woken up in the middle of the night and that the train wouldn't reach its destination anyhow. Ah well, this had to be the consequences for a free night, most of the time I had to sleep in chairs. I wonder how the trip will continue, with touring cars I was brought from Alexandropolis to Orestiada and later on, another touring car from Orestiada to Pythion, near the Turkish border, where the next train will leave at 15:30 to Istanbul. I don't know how long that train will take to get me in Istanbul. Asking someone wouldn't work, I tried several times, but the people working at the railway stations seem to be incompetent, that would be a way to put it, because it seemed more like 'fucking retarded', because they don't know how to answer, and they get mad if you ask twice. All Greek people are prepared to help you, except for the people who get paid to do it, they much rather drink a cup of coffee. The guy trying to sell a ticket back in Athens was one of them. Who was it again that said civilization originates from Greece?</p>
                        <p>Finally the train to Istanbul, this will arrive at 21:30, so I'll need to find a sleeping spot in Istanbul. The train is very slow, but it's quite nice with all windows open and the possibility to put my nose in the wind. I'll also need to get a visa, earlier it seemed like fun to have my passport filled with stamps, but that fun is rapidly falling away.</p>
                        <h3>Thessaloniki</h3>
                        <Carousel directory="europe/15_thessaloniki" num="2" />
                        <h3>Athens</h3>
                        <Carousel directory="europe/16_athens" num="14" />
                        <h2 id="turkey">Turkey</h2>
                        <p>I've arrived in Istanbul and I've met Aaron and Christa, newly weds, on their honeymoon through Greece, Turkey and Uganda. They booked a room in a hostel in Istanbul, which also had dorms, so I've walked with them and got a bed for 9 euro's.</p>
                        <p>While searching, lots of people on the streets offered a room and of course all of them were cheaper and more luxury than the last one, some of them offered a present if you took their offer. Even in the restaurant where we ate, they came with a tray with sauces and garnitures. Everything is based on selling things and I came to that conclusion after only half an hour. The next day there were no offerings for hostels, but they tried to polish your shoes and everywhere bottles of water were offered.</p>
                        <p>I didn't agree to get my shoes polished, but he started with a question about where I came from, I said no, but apparently he misunderstood, so I got my shoes polished anyway, but for only 10 lira in total. They're very persuasive, so you need to be persuasive too.</p>
                        <p>The last couple of days I kind of race through the cities, but I'm already feeling like going home again. I didn't visit any city for a long time, but I think I got some of the local history and culture. I guess France is the only country I wish to see more of. As my journey goes along, I start to get more and more critical, the tourist attractions mostly are churches or mosques and because I don't visit any museums, that's pretty limited. However, the culture you see on the streets are also very informative and getting lost and trying to find your way is also an essential experience. In some of the countries this is fun, but in others you'd wish you have a map, because otherwise it would be hopeless. Istanbul is a pretty cosy city thanks to all the salesmen on the streets, you feel comfortable and it's not an expensive city, like one would think because of the many tourists. There are many stands on the streets selling corncobs which are roasted on the spot, a pretty tasty snack. Sometimes you walk into things and you ask yourself, why isn't any of this anywhere in the Netherlands. Furthermore, I've never seen this much kebab anywhere, but I guess that makes sense.</p>
                        <p>Turkish people like their food spicey, and everywhere you go there are chili peppers on the spots where we would put a saltshaker. If I understood it right, there are prayers five times a day, so five times a day you hear a lot of noise coming from all of the speakers. You don't see a lot of women on the street, but only half of them is wearing a headscarf, a lot less than I would've thought.</p>
                        <p>The train to Bucharest is leaving at 22:00 and arrives the next day at 17:00. Luckily this train has sleeping facilities, but spending nineteen hours in a train still seems like an eternity. Apparently I'm traveling off season, because there is only one wagon with Bucharest as its destination, which is almost empty. This time with a lot of border controls again, right at this moment the train is in Bulgaria and I needed to show my passport three times already, I guess this will happen more often when we enter Romania.</p>
                        <p>Now we're standing still somewhere in Bulgaria and luckily I didn't chance my money to the local currency, because the leva's came in handy to buy my daily cup of coffee. It's a little irritating to have four different currencies in your wallet, with more to come from Romania, Hungary, Czech Republic and Slovakia.</p>
                        <p>I needed coffee again, because they gave me an espresso, again. Apparenty the difference is only known in the Netherlands. I wonder what the name for a normal coffee would be in a lot of countries. I asked the conductor if they sold coffee in the train, because most of the time the trains contained a dining car, but not this time. But he worked in trains for years and he furnished an entire coupe and he offered me a cup of coffee, which he made with hot water and a bottle of gas. So I got talking with Günther, which was his name. A German name, but he was Turkish and lives in Istanbul. Another nice experience to be sitting in his office and drinking a cup of coffee and some wine.</p>
                        <p>The train to Bucharest was supposed to arrive at 17:00, but according to the conductor, this would be at 19:30. Because of this, my stay in Bucharest would be very short, but I could choose to take the train that same evening at 0:00, or find a hostel and leave the next day at 0:00. There was only one train a day leaving to Budapest. There are just a few tourist attractions to be found on Wikitravel, so I decided to leave that evening. In Budapest my stay would be somewhat longer because of that, so I get to try one of the famous bathhouses.</p>
                        <p>I thought of going to Luxembourg while I was waiting. If I get home, my ticket would be valid for another week, so I guess it wouldn't be a problem to spend a day or two in Luxembourg.</p>
                        <h3>Istanbul</h3>
                        <Carousel directory="europe/17_istanbul" num="5" />
                        <h2 id="romania">Romania</h2>
                        <p>Günther also brought raki, a Turkish drink that looks a lot like ouzo from Greece. And he brought turkish bread and tomatoes, cucumbers and salads. So we invited three girls who appeared to be in that same wagon. Anna from Australia and another Anna and Julie from Denmark. The girls from Denmark were also going to Budapest, so I didn't see much of Bucharest. We spent a couple of minutes outside the station, but the whole city was asleep, so we drank something on the station, waiting for the train. Outside of the station I asked someone where I could find a bar, but the only thing that was still open, was on the station. Nice to know we didn't miss anything here and we're back in the train to Budapest. At first glance we had the same goal: get some coffee, an internet cafe and relaxing in a bathhouse.</p>
                        <h3>Bucharest</h3>
                        <Carousel directory="europe/18_bucharest" num="4" />
                        <h2 id="hungary">Hungary</h2>
                        <p>Even with the change in timezone, the train had a delay and it took a while to find a hostel. I coincidentally walked into three hostels that I got from the notes of Anna and Julia and the coincidence was even greater when I met them again in that same hostel. A very cosy hostel which looked like a student's home, with students who come and go in this case. It even looked more like a student's home than my own home, with a fridge everyone could use, labeling their food and notes saying to clean your things. A place that felt like home.</p>
                        <p>When I found the hostel, I tried to find a bathhouse, but most of them were closed at 19:00, so I needed to hurry and find one, because it already was 17:00. So I couldn't find one anywhere, but there was an information window for tourists, I got a map with several bathhouses on it. She also made a note on the map where a bathhouse would be, only two blocks away, but this seemed to be an empty square, with a couple of fences and some construction workers. You'd think someone working at the information window, living in the very same city, would know something. But oh well...</p>
                        <p>I now know that I need to take the subway and I also know where to get off, so if I wake up the next morning, I can do that right away. The trip to Bratislava that I had planned for that morning had to wait, because I didn't want to leave town without doing anything.</p>
                        <p>The next morning I walked right into the bathhouse where the subway stopped. I couldn't be too long in the sauna, but I had to try, because in high school our history teacher always told a lot about Roman bathhouses and their daily habits. I swam for a bit and then I got going to the House of Terror, I overheard Steffie and Dorina talking about it. I've met them back in the hostel. The title seemed interesting and it was about nazi's and about communism. There was a torture chamber with a lot of whips and a tap, and a basement with dungeons, a couple of them only a metre high with pillows along the walls and floor. Also several devices to hang people. I don't know if it were replica's or the real things.</p>
                        <p>After reading some things, I found the following:</p>
                        <blockquote>
                            <p>The cellar of No. 60 Andrassy Road was modified several times. All tell-tale traces were painstakingly removed. In one section of the cellar we have recreated the conditions under which political prisoners were kept in Hungary during the period of 1945 to 1956.
                            <strong>Detention cell:</strong> Solitary punishment cell, 60x50 cm floor space. 180 cm high. Two lightbulbs at eyelevel, which shone into de prisoner s eyes during the entire time of punishment.
                            <strong>Wet cell:</strong> The detainee was forced to sit in water.
                            <strong>Fox-hole:</strong> Dark, low-ceilinged concrete cell, in which the prisoner could not straighten up.
                            <strong>Treatment room:</strong> We have placed the types of instruments of torture here, which were used to break the body and spirit of the prisoners.
                            <strong>Guard room:</strong> The ventilation apparatus used in the subterranean prison at No. 5 Belgrade quay, which we discovered in 2000, can be seen here. The prison was two storeys below street level. The ventilation apparatus ensured the flow of air through a conduit traversing the cells. Individual cells could be cut off from this airflow as a means of punishment.
                            <strong>Condemned cell:</strong> Condemned prisoners were kept here, whose appeals for clemency had been rejected.
                            <strong>Place of execution:</strong> The gallows used first in the Vac penitentiary and then until 1985 in the Kozma street prison, is exhibited here. (There were no executions in 60 Andrassy Road, only fatal bashings and suicides).</p>
                        </blockquote>
                        <p>I thought it was a bit of a shame that there were so many graphics, like photo's and several tv's with short documentaries. If I wanted to see a documentary, I would've turned on Discovery Channel back at home. But it all was dressed up pretty well. Also a shame that taking pictures was forbidden, but there are more things that I want to look up on the internet, to complete my photo collection. About Budapest, I thought Hungary would be pretty much the same as Bulgaria and Romania, being a country in Eastern Europe, poor, gray and dim, but in the train to Budapest there were many colorful houses and palaces, especially around the Donau. I ate my dinner on a boulevard, near the hostel. I didn't have much coice, because these restaurants were the only ones I knew what they had on the menu. I tried to get some local food, like goulash, but in Hungarian I wouldn't know the difference between a pizza and chinese food. It looked like a very fancy restaurant, it wasn't much food, but it wasn't expensive though. The plates were set up nicely with different kinds of garnish. I did get my goulash.</p>
                        <p>Again it seems that you have to ask everything a dozen times. I wanted to go to Bratislava, which is less than four hours travel from Budapest, so I tell a worker at the railway station where I wanted to go. He points me to Graz, a village in Austria. Why do they keep putting people who don't have a clue about what they are doing behind the service windows. Later on it seemed that I needed to be in another wagon, but they didn't tell me that. Luckily I'm a backpacker and have oceans of time and a money tree on my back to pay for a hostel in Graz, because the next train to Bratislava leaves early in the next morning. Oh well, one night without much sleep couldn't be a problem. I found a bar / casino next to the station where I could spend some time. It's 0:00 and the train leaves at 4:00, so I'll just drink some beers here. The train will arrive at 7:00 in Vienna and I guess there would be another train leaving to Bratislava by then.</p>
                        <p>Once I got at the station I found out that the train doesn't even leave, so I'll get the next one at 5:30. Again with parts of the route with a bus, the train had technical issues. Damnit, can't they do anything right? <strong>If everything goes well</strong> the train will now arrive at 12:30 in Bratislava. I'm used to a delay of a couple of hours now and normally it wouldn't bother me, but a delay of sixteen hours seemed a bit overdone.</p>
                        <h3>Budapest</h3>
                        <Carousel directory="europe/19_budapest" num="5" />
                        <p> </p>
                        <h2 id="slovakia">Slovakia</h2>
                        <p>I always thought Bratislava was like a secondary city of Czechoslovakia, but it seemed to be a prosperous and beautifil city with a presidential building that looked a lot like the stronghold on a mountain that I visited, which had a magnificent view, or the White House. From that point of view you could see clearly that on the one side of the Donau was an historical part of the city and on the other side there were a lot of modern buildings. It all was pretty small, so I decided to catch the night train to Prague. But then I saw a train leaving at 18:40, which seemed a lot better, with the sky getting pretty cloudy. It started raining right at the moment I've arrived at the station. Prague is known about its cheap food and drinks and the train will arrive at 23:40, so I think I'll get the chance to see some of the nightlife in Prague.</p>
                        <h3>Bratislava</h3>
                        <Carousel directory="europe/20_bratislava" num="7" />
                        <h2 id="czech-republic">Czech Republic</h2>
                        <p>I expected a lot more from Prague, exciting nightlife at every day of the week, cheep beer, a lot of youth and a lot of hostels. At the time I got there everything was closed and you could only get a beer at one of the cafetaria's. Even most of the hostels were closed already and the internet cafe's that are opened around the clock in other cities, were also closed. I now look at Prague more like the Las Vegas of Europe, but the cheap-ass way, which is still very expensive. Lots of casino's, strip clubs and hookers on the streets and some guys trying to sell hashish. Because of the closed bars, there was a lot of youth hanging around everywhere and other drunk people, a lot of wanderers. I really don't feel like home here, even with all the cops around.</p>
                        <p>I was searching for a hostel and walked into a hotel in a small alley, of which one would think it would be very cheap, but even so, it still was 110 euro's for its cheapest room. So I asked the concierge, someone of my age, if he knew a cheap hostel. I didn't expect him asking me inside, after waking him up. There weren't any results, so he allowed me to search on the internet, but also nothing. I went back to the station and decided to wait for the next train to Frankfurt. Now I'm tired, also after the last night and I'm starting to get homesick, so I hope to get home by tomorrow night.</p>
                        <p>On my way back I saw some hotels, but there weren't any with less than four stars, so now I'll try to avoid paying for another night outside of home. Now I'm in the train to Frankfurt, which should arrive at 13:00 and I got some sleep in the train to Nürnberg.</p>
                        <h3>Praha</h3>
                        <h2 id="germany">Germany</h2>
                        <p>The train to Frankfurt arrived on time and I took a short look around, but the reason I came here was because I thought I could get some real Frankfurters here in Frankfurt, which seemed pretty hard. I saw on Wikitravel that it has a nice skyline which looked like New York, but there were only ten buildings, but maybe I've gotten too critical being homesick and all.</p>
                        <p>The next train went to Köln and I wanted to find the Dom, this appeared to be right in front of the station, which was a godsend. A very tall and beautiful church in which I spent some time looking around. I only was interested in one thing of Köln, so right after visiting the church, I went straight to the station and arrived at home at around 20:00. I went to the Hema straight away to bring in my throwaway camera's. I lost my USB adapter for SD cards and at the moment I can't do anything with all the pictures. I think I'll post an update at tuesday, when the rest of the photo's will be developed and I guess the new USB stick will have arrived by then.</p>
                        <h3>Frankfurt</h3>
                        <Carousel directory="europe/21_frankfurt" num="2" />
                        <h3>Cologne</h3>
                        <Carousel directory="europe/22_cologne" num="5" />
                        <h2 id="back-to-the-netherlands">Back to The Netherlands</h2>
                        <p>I got my cardreader, so I could upload my pictures. These are the pictures I took before both batteries went dead. Now I'll wait for the Hema, developing the pictures on the throwaway camera's. I have to do it this way to keep the photo's chronological.</p>
                        <p>I'm leaving again at monday or tuesday, I'll take the night train to Warsaw and after that the night train to Luxembourg. I plan to stay for about 5 hours in Luxembourg and I have to choose between 5 and 29 hours in Warsaw, because otherwise I'll run out of options and I'll have to find a hostel in Warsaw.</p>
                        <p>After spending a couple of days at home, getting dressed and doing the laundrey, I've rested enough and took the train to Warsaw. I would be crazy if I would spend the time home, waiting for my ticket to expire. From Warsaw I plan to travel through Krakow and to Auschwitz, which I guess is very impressive. From there to Krakow and Warsaw again, so I can see some things over there at the way back. It's planned pretty tight this time and I don't plan to be out for more than four days now. It's nice to not have that many luggage anymore and the batteries will do fine as well. I'll try to get some sleep in the trains in between.</p>
                        <p>I'm less than two hours on my way and my whole plan went in smithereens. The train from Düsseldorf to Warsaw of tonight is booked. I wanted to book a seat back in Venlo, but it only seemed possible on the bigger railway stations, so I tried again in Düsseldorf, where I heard this all. Because there is only one train to Warsaw, I decided to visit Luxembourg first. It didn't happen before that a train was booked, but it's always a risk.</p>
                        <p>I've arrived at 22:00 and now I have to wait untill 3:00 in Düsseldorf, so I walked around for a bit. At first glance a lot of similarities to Venlo, not too big, a bar here and there and about the same ambiance. After a while I arrived at a street that seemed to come straight out an architectural magazine. The thing that got my attention was a bright white office of about eighty square metres, with only a black staircase and a black desk inside.</p>
                        <p>After walking across town another time, I'm now back at the station again. I ordered some food at the McDonald's, they're opened around the clock, so I could use that to sit somewhere warm and comfortable. They sell the McRib in Germany, I've heard a lot of good stories about it, so let's give it a try.</p>
                        <h2 id="luxembourg">Luxembourg</h2>
                        <p>Luxembourg is a nice city with lots of nature. It seems like it has two floors, on the upper floor you are in the middle of the city, that is where the train arrived, and on the lower floor you are in the middle of the woods. There are also camping sites and small urban area's like small villages. It seemed strange to have a bridge hanging about 50 metres above your head, but besides that, you seem to be totally cut loose of the city.</p>
                        <p>I had some time left on the station, so I booked all the trains I'm going to use, which tightens my schedule, but I don't want to be in the middle of Warsaw with a fully booked train and a ticket that's expired. I'll get home later than expected and I have to miss the soccer game between The Netherlands and France, but I'm ready with a beer in the train by tonight.</p>
                        <Carousel directory="europe/23_luxembourg" num="13" />
                        <h2 id="poland">Poland</h2>
                        <p>Warsaw also is a beautiful city and, against my expectations, a pretty modern city. A lot of skyscrapers in between which you feel very small. I wonder how that would be in New York or Tokyo. There weren't many historical buildings, one next to the station. There's a big indoor shopping mall and besides that, Warsaw is very much a town of business. I didn't see much of Warsaw, because Krakow was recommended above Warsaw.</p>
                        <p>Krakow is a bit smaller, also a modern indoor shopping mall next to the station. Furthermore a historical inner town, which is surrounded by a park. Very convenient if you get lost, you walk in a random direction and you'll always find yourself in the park again. I also visited "Wawel Hill", a castle on top of an hill. More like a small village in between castle walls, like the stronghold in Bratislava.</p>
                        <p>When I saw everything around midnight and had a Polish meal (sour soup with a sausage and pancakes with spinach and cole, never heard of it before), I was searching for an internet cafe. It should be around, but I didn't find it, so I got a beer to kill some time. The train to Auschwitz was leaving at 4:30 and the bar was closed at 2:00, so now I know how it feels like sleeping on the train station, in between wanderers. I had to put myself in the weirdest positions to be able to get a few minutes of sleep.</p>
                        <p>Once I got in Auschwitz, I found the first camp pretty fast. The train arrived at 6:00, so I needed to wait a bit before it opened.</p>
                        <p>In the first camp I didn't take any pictures, it was not allowed and I respected that. At the second camp it wasn't allowed also, but here everyone does it. It was quite an experience and I thought this needed to be between the other pictures of my journey, so I also took some pictures here. I found some pictures on the internet of things that I noticed in the first camp.</p>
                        <p>The first camp was like a museum, there were about twenty barracks, of which a couple were refurbished in a way they were used back then, like dorms, shower rooms and latrines, but in some of them, people trying to escape the camp, were punished.</p>
                        <p>There were a lot of showcases in which they tried to illustrate the massiveness of all the killings, like a showcase, being metres long and filled with hair. The hair was sold by kilo to use for weaving textile. Also a showcase filled with shoes, and showcases with other goods that were taken away. There were still splatters of blood on the floor.</p>
                        <p>The second camp "Auschwitz-Birkenau" was a lot bigger and a lot more "efficient", a camp for men and a camp for women and children. The barracks seemed like horse stables, furbished with triple bunks, each bed housing four prisoners.</p>
                        <h3>Warsaw</h3>
                        <Carousel directory="europe/24_warsaw" num="7" />
                        <h3>Krakow</h3>
                        <Carousel directory="europe/25_krakow" num="4" />
                        <h3>Auschwitz</h3>
                        <Carousel directory="europe/26_auschwitz" num="10" />
                        <h2 id="tldr">TL;DR</h2>
                        <p>
                            Along my journey I came to some conclusions, but actually each of those conclusions has its downside:
                        </p>
                        <ul>
                            <li>Not traveling alone, it might be more cosy with another person. If you travel alone, there are silent moments, but you can do exactly as you planned;</li>
                            <li>Bringing a tent, that way you're not depending on a sleeping spot in a train or hostel, but while searching for some place to sleep, you meet a lot of people;</li>
                            <li>More money, there's no downside to this;</li>
                            <li>More time, for this you obviously need more money;</li>
                            <li>Less locations, so you can spend more time in one city. But if you've got more time, you automatically participate in fewer things;</li>
                            <li>Find more information about the locations, in some cities I got a map, but it would be more convenient to have this in every city, but it would be less adventurous;</li>
                            <li>A car, this has all the same arguments.</li>
                        </ul>
                        <p>
                            <img src="/images/europe/map_before.jpeg" alt="Before"/>
                            <img src="/images/europe/map.jpeg" alt="After"/>
                        </p>
                        <p>Below a list of places I spent the nights:</p>
                        <ul>
                            <li>Sky Inn Hostel, Bruxelles</li>
                            <li>Hotel Bruxelles, Strasbourg</li>
                            <li>Train Zürich - Rome</li>
                            <li>Alessandro's Palace, Rome</li>
                            <li>Train Genua - Verona</li>
                            <li>Hotel Primavera, Venice</li>
                            <li>Hotel Primavera, Venice</li>
                            <li>Jugend und Familiëngästehaus, Salzburg</li>
                            <li>Train Vienna - Belgrade</li>
                            <li>Train Belgrade - Sofia</li>
                            <li>Hotel Tourist, Thessaloniki</li>
                            <li>Easy Hostel, Athens</li>
                            <li>Train Athens - Istanbul</li>
                            <li>Sinbad Hostel, Istanbul</li>
                            <li>Train Istanbul - Bucharest</li>
                            <li>Train Bucharest - Budapest</li>
                            <li>Unity Hostel, Budapest</li>
                            <li>Night at the bar, Graz</li>
                            <li>Night on the trainstation, Prague</li>
                            <li>At home</li>
                            <li>Night on the trainstation, Düsseldorf</li>
                            <li>Train Luxembourg - Warsaw</li>
                            <li>Night on the trainstation, Krakow</li>
                            <li>Train Auschwitz - Venlo</li>
                        </ul>
                    </div>
				</div>
			</div>
		</div>
    </main>);
}

export default Europe;
