'use client';
import Head from 'next/head';
import { Back, Intro, Me, Social, Logo, Water } from '../../Components';
import './_scss/blog.scss';
import packageJson from '../../../package.json';

const Blog = () => {

	return (<main>
        <Head>o
            <title>Swimmer ♬ Blog</title>
        </Head>
        <Back/>
        <section className="blog">
            <div className="article">
                <h1>Some history</h1>
                <p>
                    In the past I've written a couple of blogs, because this section is not really active anymore I 
                    decided to group them onto one page, so that I can focus more 
                    on <a href="/tutorials">tutorials</a> and <a href="/travels">travel blogs</a>. Don't forget to
                    also visit my <a href="blog/food" title="Posted: 2021-10-12">summary of this book</a>.
                </p>
                <img className="avatar" src="../images/blogs/soundcloud.png" alt="Avatar"/>
                <h2>SoundCloud (2015-06-19)</h2>
                <p>
                    I've written a nice audio module for my website, it has ID3v1 integration, when I uploaded a 
                    song, it automatically read the ID3 data into the database through a cronjob. Still, I needed 
                    to upload an MP3 file as well as an OGG file, to make it work cross browser, I meant to make 
                    something for that too, so that I only needed to upload an MP3 file and an OGG file was 
                    automatically created. I never came to this point, not fully without considering the fact that 
                    first converting to MP3 and then converting the MP3 to OGG always means a loss of quality. I 
                    guess FFmpeg would have been the right tool to do this.
                </p>
                <p>
                    The client side part of the module was never fully operational either, you could click on a 
                    song to play it, but I wanted to embed a playlist and when you clicked a second song, it 
                    should have been automatically added to this playlist. Unfortunately this is a feature I 
                    never got to work, but you can visit 
                    my <a href="https://soundcloud.com/swimmer-zone">SoundCloud</a> to do so. Leave me a like 
                    while you're at it!
                </p>
                <img className="avatar" src="../images/blogs/fantastic-contraption.png" alt="Avatar"/>
                <h2>Fantastic Contraption (2013-04-16)</h2>
                <p>
                    Marc pointed me to a new game, namely: Fantastic Contraption. You can find it 
                    on <a href="http://www.fantasticcontraption.com/original/">http://www.fantasticcontraption.com/original/</a>. 
                    You need some engineering skills with this game. A short explanation: In the toolbar you can 
                    find some materials, like wheels rotating clockwise and wheels rotating anti-clockwise. Also 
                    some parts to connect other parts. The game is self-explanatory, some things you can only 
                    find out by playing. The meaning of the game is to move the red block(s) to the light red area. 
                    The light blue area marks where the construction can be built. If you finish a level, you can 
                    find a link with solutions of other players, you can find a lot of nice contraptions here. If 
                    you make an account, you can save your contraptions too.
                </p>
                <p>
                    It's a pretty old game, so it still requires Flash. Another Flash game 
                    is <a href="https://www.minijuegos.com/juegos/jugar.php?id=4294">a variation on Super Mario</a>. Normally, 
                    you are Mario of course, but in this game you are the bullet and you have to kill Mario and the 
                    mushrooms. Jezzball is a nice Flash game too.
                </p>
                <p>
                    I'd like to point out some games that don't require Flash as well (nerd alert):
                </p>
                <ul>
                    <li><a href="https://zty.pe">Z-Type</a></li>
                    <li><a href="https://betterwebtype.com/font-memory-game-hard">Font Memory</a></li>
                    <li><a href="https://robowhale.com/html5/mr-driller/">Mini Mr. Driller</a></li>
                    <li><a href="https://isthisprime.com/game/">Is This Prime?</a></li>
                    <li><a href="https://codepen.io/finnhvman/full/xJRMJp/">Pure CSS Stack</a></li>
                </ul>
                <p>
                    Have fun!
                </p>
                <img className="avatar" src="../images/blogs/fire.png" alt="Avatar"/>
                <h2>Fire (2009-01-11)</h2>
                <p>
                    A while ago we had a fire in our home. Flames in a kettle and no one in the neighbourhood to 
                    notice it, so the fire department had to come. The kitchen and bathroom were totally useless, 
                    so there was no gas or electricity. Of course, internet was down too. We had to sleep somewhere 
                    else, which was quite an experience, because it were total strangers to me (relatives of a 
                    roommate), 20 kilometres south of Venlo. I had to go this distance quite a few times, using 
                    the train or a bicycle. Of course I'm very thankful to these people for the possibility to 
                    stay there for one and a half month. Same goes for my mother and the family where she resides 
                    right now. I got to spend some time there, when I didn't have to go to work.
                </p>
                <p>
                    Halfway through december, I went back to my own room, the kitchen and bathroom weren't finished 
                    yet, but electricity was back. There wasn't any hot water yet, but I could make that myself. 
                    Now the whole bathroom is renovated, as well as the kitchen with a whole new block. But no gas 
                    yet, so we have to be creative with dinner.
                </p>
                <p>
                    Ultimately, it was worth the wait, because it now looks a lot better than before.</p>
                
                <img className="avatar" src="../images/blogs/equalizer.png" alt="Avatar"/>
                <h2>Equalizer (2008-01-03)</h2>
                <p>
                    When I was about 12 years old, I saved money to buy the first parts of my stereo. Throughout 
                    the years, some components were added, but I always wanted an equalizer with a graphical 
                    interface, with lights going up and down. It wasn't in the stores anymore, so I searched the 
                    internet for a second hand equalizer. Unfortunately, it guess only supports one signal, I 
                    don't have the user manual. This really doesn't matter, because now I can see the lights 
                    moving :). Of course I can connect the most important signal.
                </p>
                <hr/>
                <p>
                    It's like the salesman read this, because he sent the user manual afterwards, now I can 
                    discover all details. Thanks!
                </p>
                <hr/>
                <p>
                    This equalizer deserves a casing of course, so a week ago I began with an audio cabinet for 
                    my stereo system, built from MDF. I planned to give it a massive appeal and so the sides and 
                    the top are 6 centimetres thick, consisting of two plates of MDF. The space in between I've 
                    used to put some sockets for electricity and for speaker cables. I don't have a worklog or 
                    pictures, but if it's finished, I'll put some pictures on my website. I also plan to make a 
                    case for my PC, but I don't know when I'll start with that. I have some inspiration and some 
                    sketches in 3D Studio Max. I will put those online when I'll start. The tools I still need 
                    are a circular saw and a standard for my drill.
                </p>
                <img className="avatar" src="../images/blogs/one-terabyte.png" alt="Avatar"/>
                <h2>One Terabyte (2007-08-28)</h2>
                <p>
                    Finally I know what I've worked for, the packages are delivered and my TV proudly stands on my 
                    desk, which was kind of weird. While waiting on one store with a 26" TV, another store had a 
                    discount on a 32" TV. So now I have a bigger screen for less money.
                </p>
                <p>
                    My HDD's are ready to be built in, it's unbelievable how hard it is to buy a RAID controller, 
                    these days, such controllers are built in on main boards, but these are SATA controllers and 
                    I have IDE drives (to match those I had already). If there's a controller available anywhere, 
                    this is a SCSI controller, which in my case would be useless.
                </p>
                <p>
                    To explain the RAID principle, using RAID5 as an example with images 
                    from <a href="https://gathering.tweakers.net">Gathering of Tweakers</a>:
                </p>
                <img src="/images/blogs/one-terabyte_raid5.jpg" alt="RAID5"/>
                <p>
                    Assuming there are four disks, every disk has three parts with data and the fourth part 
                    contains the checksum of that fourth part of the other three disks. If one of the drives 
                    fails, the lost data can be retrieved using the rest of the data and this checksum. Also, 
                    the data can be accessed faster. To explain that using the image: If you want to read data 
                    from drive B, you can also use 1/3 of the capacity of the grey cell on drive A. It's a 
                    small improvement of speed, but with the security being the first priority, it's a nice 
                    extra feature.
                </p>
                <p>
                    RAID means <em>Redundant Arrays of Inexpensive Disks</em>, which means you don't need 
                    expensive disks for high security.
                </p>
                <p>
                    Some specs: I had an 80 GB and 320 GB drive and another drive of 40 GB being somewhere in my 
                    closet. I ordered three of 320 GB on top of this, which will be 4 minus 1 (because of the 
                    parity bits). If I got it right, this will be one virtual drive of 960 GB. That will do for 
                    a while I guess.
                </p>
                <p>
                    I assumed there would be RAID controllers somewhere to serve my purposes, but because I have 
                    IDE drives, the possibilities are limited, because I had to replace three of the drives with 
                    SATA ones. But now I have 4 times 320 GB of available space. I still have to find out how to 
                    connect these drives with my main board having only four IDE ports. There are some RAID 
                    controllers available, but only RAID0 or RAID1 or a combination. RAID0 is striping, which 
                    means the drives are connected sequential, making it one big drive of 640 GB. But when one 
                    of these drives fails, all data is lost. RAID1 is mirroring, with two drives, the capacity 
                    is 320 GB, but no data is lost when one of those drives fails. This isn't very fast, because 
                    all data has to be written twice. RAID10 or RAID01 is a combination of the two.
                </p>
                <hr/>
                <p>
                    It's working now with a Promise Ultra100 TX2 card, which allows me to connect four drives, 
                    leaving a total of 8 IDE ports. I now have 1,26 TB and with another two drives I still can 
                    expand to 1,65 TB. I can even buy another card, with another 4 IDE ports. At this point I 
                    can start worrying on how to fill all that space.
                </p>
                <img className="avatar" src="../images/blogs/henk.png" alt="Avatar"/>
                <h2>Henk (2007-07-10)</h2>
                <p>
                    In the avatar you see my cat, named 'Henk'. On June 11th, 2007 he was born.
                </p>
                <img className="avatar" src="../images/blogs/clocky.png" alt="Avatar"/>
                <h2>Clocky (2006-09-08)</h2>
                <p>
                    Found another nice gadget, I've seen it before, but I decided to add it to my website. It's a 
                    soft, cuddly clock. That's necessary, because it's a clock for people who don't wake up well. 
                    If the alarm goes off, it's hiding itself somewhere when you press the snooze button, so 
                    you'll never know where it's going to be.
                </p>
                <p>
                    I subscribed to <a href="https://clocky.com">website</a>, because it isn't for sale yet. I'll 
                    get a message when the shipping starts.
                </p>
                <h2>A couple of gadgets (2006-04-28)</h2>
                <p>
                    I decided to create some life here writing some stories about gadgets that I'm interested in, 
                    maybe I will buy some, but most of them are more interesting to read about. Some of them I 
                    really don't need and some of them are just prototypes.
                </p>
                <p>
                    First off, an <a href="https://en.wikipedia.org/wiki/OLED">OLED</a> keyboard, from a designer 
                    (Artemis Lebedev) from Russia. In june 2005 they released a prototype. Right now 
                    it's <a href="https://www.artlebedev.com/optimus/maximus/">actually on the market</a>. Every 
                    key on the keyboard is an actual tiny OLED screen, on which can be displayed the desired data. 
                    Normally this would be a normal keyboard, but they'll change in images of shortcuts, when 
                    working in Photoshop, for example. The keys lighting up in the dark is also a nice feature.
                </p>
                <h3>Other gadgets</h3>
                <p>
                    Below a summary of some gadgets I found on ThinkGeek, I don't know if they're available in the 
                    Netherlands. I guess we won't have to wait long when they aren't.
                </p>
                <ul>
                    <li>
                        Spy coins: Coins with a hidden pocket, you can put something in there, like a micro SD card. 
                        These are dollar coins, maybe they'll be available in Euro coins too.
                    </li>
                    <li>
                        Vibe headphones: Ear plugs that you don't have to put in your ear, you can clamp them to your 
                        ear shell. Frequencies are transfered through your skull. It sounds amazingly clear and you can 
                        hear everything around you, so you can have a conversation while listening to music.
                    </li>
                    <li>No Place Like 127.0.0.1 doormat: Only for IT guys! :)</li>
                    <li>
                        Hidden Bookshelf: Bookshelf, ingeniously designed so that books appear to be floating on the 
                        wall.
                    </li>
                    <li>
                        Cool Shooters: Handy shooters for parties, you can create an unlimited number of them and when 
                        they fall on the ground, they'll just melt, so no broken glass.
                    </li>
                </ul>
                <h2>10.000 (2006-11-29)</h2>
                <p>
                    My website is online since july 2005 and now it's November 29th, 2006 and the fourth version is 
                    now live. The first version was made in Flash with a widescreen layout. Back then I didn't know 
                    anything about PHP.
                </p>
                <p>
                    The second version was also made with Flash, but was never published. At that moment I began to 
                    gain some knowledge about PHP with making a website for a gaming clan and a swimming club.
                </p>
                <p>
                    With the widescreen version, a lot of screen estate was lost. If the content is small, this is no 
                    big deal, but after writing some blogs and adding some functionality, it was quite a restriction, 
                    so I began with the third version of my website. I got inspired by Web 2.0, which gained popularity 
                    back then. Not only because it looked cool, but it also gave a great overview. Semantic HTML 
                    became more and more important. Before I used tables, but now I started 
                    using <code>&lt;div&gt;</code>s, which could be positioned using CSS. Tables were only for tabular 
                    data, in which rows and columns share some sort of relationship.
                </p>
                <p>
                    That was "going with the flow" and my website became less personal, so I started with the fourth 
                    version, again with some sort of widescreen effect. I only had to edit the index page and the CSS 
                    file and had to do some cleaning. The code was like spaghetti and I only used a class to handle 
                    the database connection, having its own error reporting mechanism. I got an e-mail when something 
                    went wrong, so I didn't have to display that on the website. From there I went on writing more 
                    classes and tried to do some object oriented programming. With the experience I gained, the 
                    website is now functional using 13 classes. Most of them I will be able to re-use in other websites.
                </p>
                <p>
                    I've added something new, namely the avatars have a nice mirror and tile effect. I'm definitely 
                    going to use this gimmick some more: <a href="https://www.netzgesta.de/cvi/">https://www.netzgesta.de/cvi/</a>
                </p>
                <p>
                    Also I'm halfway translating for a German version, mainly as an exercise. But also to give 
                    the .eu domain a purpose. I have no idea if I'm doing well and what the second half will bring, 
                    so I could use some support.
                </p>
                <p>
                    It's been a while, but with this version I finally got 10.000 visitors!
                </p>
                <h2>Feeling a bit nostalgic (2006-04-28)</h2>
                <p>
                    My students room:
                </p>
                <img src="/images/blogs/some-history_kamer.jpg" alt="Room 1"/>
                <img src="/images/blogs/some-history_plaatjes.jpg" alt="Room 2"/>
                <p>
                    Previous logo's:
                </p>
                <img src="/images/blogs/some-history_eerste-bericht.png" alt="Logo 1" className="noshade"/>
                <img src="/images/blogs/some-history_logo_full.png" alt="Logo 2" className="noshade"/>
                <img src="/images/blogs/some-history_logo-yupsie.png" alt="Logo 3" className="noshade"/>
                <p>
                    Previous portraits for previous versions of my website:
                </p>
                <img src="/images/blogs/some-history_ik_oud.png" alt="Me 1" className="noshade"/>
                <img src="/images/blogs/some-history_ik.png" alt="Me 2" className="noshade"/>
                <p>
                    An explanatory diagram of the MVC pattern, from a previous version of my website:
                </p>
                <img src="/images/blogs/some-history_mvc-pattern.png" alt="MVC" className="noshade"/>
                <p>
                    A previous version:
                </p>
                <img src="/images/blogs/some-history_ss.png" alt="Screenshot"/>
                <p>
                    A visual representation of the structure in one of the previous versions:
                </p>
                <img src="/images/blogs/some-history_uml.png" alt="UML" className="noshade"/>
            </div>
        </section>
        <Back />
        
        <footer id="footer">            
            <Logo />
            <Social location="header" />
            <Water />

            <p className="copy">
                v{packageJson.version}<br/>
                &copy; 2005&thinsp;/&thinsp;{(new Date().getFullYear())}
            </p>
            <Me />
        </footer>
    </main>);
}

export default Blog;
