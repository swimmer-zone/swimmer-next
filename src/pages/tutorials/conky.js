import Head from 'next/head';
import {Footer, Menu, Code } from '../../Components';
import '../_scss/common.scss';

    
const codeString_1 = `background yes

own_window yes
own_window_type normal
own_window_class Conky
own_window_transparent yes
own_window_hints undecorated,below,sticky,skip_taskbar,skip_pager
minimum_size 358 760
maximum_width 384

double_buffer yes
no_buffers yes
update_interval 2.0
total_run_times 0
cpu_avg_samples 2
net_avg_samples 2
top_cpu_separate true

override_utf8_locale no
use_xft yes
xftfont Purisa:size=9
xftalpha 0.8
default_color eeeeff
color0 aaaaff
color1 5555ff
color2 222222`;

const codeString_2 = `alignment top_left
gap_x 0
gap_y 0

TEXT
\${font Purisa:size=12}Linux Mint 14 Nadia \${color1}\${hr 3}\${font }
\${offset 20}\${color0}User\${color }\${alignr}\${uid_name 1000}
\${offset 20}\${color0}Host\${color }\${alignr}\${nodename}
\${offset 20}\${color0}$sysname $kernel\${color }\${alignr}$machine
\${voffset 10}
\${offset 20}\${color0}Load\${alignr}\${color }$loadavg
\${offset 20}\${color2}\${cpugraph 32,334 ffffff aaaaff s}
\${voffset 10}
\${offset 20}\${color0}Processes\${alignr}\${color }\${processes}
\${offset 20}\${color0}Running\${alignr}\${color }\${running_processes}`;


const codeString_3 = `alignment top_left
gap_x 384
gap_y 0

TEXT
\${font Purisa:size=12}CPU (\${freq_g cpu0}) \${color1}\${hr 3}\${font }
\${offset 20}\${color0}\\\\#1\${alignr}\${color } \${cpu cpu0}% \${cpubar cpu0 8,60}
\${offset 20}\${color0}\\\\#2\${alignr}\${color } \${cpu cpu1}% \${cpubar cpu0 8,60}
\${offset 20}\${color0}\\\\#3\${alignr}\${color } \${cpu cpu2}% \${cpubar cpu0 8,60}
\${offset 20}\${color0}\\\\#4\${alignr}\${color } \${cpu cpu3}% \${cpubar cpu0 8,60}
\${offset 20}\${color0}\\\\#5\${alignr}\${color } \${cpu cpu4}% \${cpubar cpu0 8,60}
\${offset 20}\${color0}\\\\#6\${alignr}\${color } \${cpu cpu5}% \${cpubar cpu0 8,60}
\${offset 20}\${color0}\\\\#7\${alignr}\${color } \${cpu cpu6}% \${cpubar cpu0 8,60}
\${offset 20}\${color0}\\\\#8\${alignr}\${color } \${cpu cpu7}% \${cpubar cpu0 8,60}

\${offset 20}\${color0}CPU Temp\${alignr}\${color }\${execi 60 sensors | grep 'CPU Temperature' | cut -c 20-28}
\${offset 20}\${color0}CPU Fan\${alignr}\${color }\${execi 60 sensors | grep 'CPU Fan Speed' | cut -c 20-28}
\${offset 20}\${color0}Power Fan\${alignr}\${color }\${execi 60 sensors | grep 'Power Fan Speed' | cut -c 20-28}
\${offset 20}\${color0}Vcore\${alignr}\${color }\${execi 60 sensors | grep 'Vcore Voltage' | cut -c 20-28}
\${offset 20}\${color0}MB Temp\${alignr}\${color }\${execi 60 sensors | grep 'MB Temperature' | cut -c 20-28}`;

const codeString_4 = `alignment top_left
gap_x 768
gap_y 0

TEXT
\${font Purisa:size=12}MEM \${color1}\${hr 3}\${font }
\${offset 20}\${color0}MEM\${goto 200}\${color }$memperc%\${goto 260}$mem\${alignr}$memmax
\${offset 20}\${membar 16,334}
\${voffset 10}
\${offset 20}\${color0}SWAP\${goto 200}\${color }$swapperc%\${goto 260}$swap\${alignr}$swapmax
\${offset 20}\${swapbar 16,334}
\${voffset 10}
\${offset 20}\${color0}STOR\${goto 200}\${color }\${fs_free /}\${goto 260}\${fs_size /}\${alignr}\${fs_type}
\${offset 20}\${fs_bar 16,334}`;

const codeString_5 = `alignment top_left
gap_x 1152
gap_y 0

TEXT
\${font Purisa:size=12}Highest CPU \${color1}\${hr 3}\${font }
\${offset 20}\${color0}\${top name 1}\${alignr}\${top_mem cpu 1}
\${offset 20}\${top name 2}\${alignr}\${top cpu 2}
\${offset 20}\${top name 3}\${alignr}\${top cpu 3}
\${offset 20}\${top name 4}\${alignr}\${top cpu 4}
\${offset 20}\${top name 5}\${alignr}\${top cpu 5}
\${offset 20}\${top name 6}\${alignr}\${top cpu 6}
\${offset 20}\${top name 7}\${alignr}\${top cpu 7}
\${offset 20}\${top name 8}\${alignr}\${top cpu 8}
\${offset 20}\${top name 9}\${alignr}\${top cpu 9}`;

const codeString_6 = `alignment top_left
gap_x 1536
gap_y 0

TEXT
\${font Purisa:size=12}Highest MEM \${color1}\${hr 3}\${font }
\${offset 20}\${color0}\${top_mem name 1}\${alignr}\${top_mem mem 1}
\${offset 20}\${top_mem name 2}\${alignr}\${top_mem mem 2}
\${offset 20}\${top_mem name 3}\${alignr}\${top_mem mem 3}
\${offset 20}\${top_mem name 4}\${alignr}\${top_mem mem 4}
\${offset 20}\${top_mem name 5}\${alignr}\${top_mem mem 5}
\${offset 20}\${top_mem name 6}\${alignr}\${top_mem mem 6}
\${offset 20}\${top_mem name 7}\${alignr}\${top_mem mem 7}
\${offset 20}\${top_mem name 8}\${alignr}\${top_mem mem 8}
\${offset 20}\${top_mem name 9}\${alignr}\${top_mem mem 9}`;

const codeString_7 = `alignment top_left
gap_x 0
gap_y 386

TEXT
\${font Purisa:size=12}Music \${if_running banshee}(\${execi 16 ~/conkywidgets/banshee.sh current-state}) \${endif}\${color1}\${hr 3}\${font }
\${if_running banshee}
\${offset 20}\${color0}Artist\${alignr}\${color }\${execi 16 ~/conkywidgets/banshee.sh artist}
\${offset 20}\${color0}Title\${alignr}\${color }\${execi 16 ~/conkywidgets/banshee.sh title}
\${offset 20}\${color0}Album\${alignr}\${color }\${execi 16 ~/conkywidgets/banshee.sh album}
\${offset 20}\${color0}Year\${alignr}\${color }\${execi 16 ~/conkywidgets/banshee.sh year}

\${offset 20}\${color0}Volume
\${offset 20}\${color }\${execibar 16 ~/conkywidgets/banshee.sh volume 16,334}

\${offset 20}\${color0}Progress\${alignr}\${color }\${execi 1 ~/conkywidgets/banshee.sh position} / \${execi 16 ~/conkywidgets/banshee.sh duration}
\${offset 20}\${color }\${execibar 1 ~/conkywidgets/banshee.sh progress 16,334}
\${endif}`;

const codeString_8 = `alignment top_left
gap_x 384
gap_y 386

TEXT
\${font Purisa:size=12}Weather \${color1}\${hr 3}\${font }
\${offset 20}\${color0}Conditions\${color }\${alignr}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=CC}

\${color }\${goto 200}\${voffset -24}\${font ConkyWeather:size=32}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=WF}\${font }\${alignr}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=HT} \${color }\${alignr}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=LT}
\${offset 20}\${color0}Wind\${color }\${alignr}\${font Arrows:size=16}\${color }\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=BF}\${font } \${execpi 1800 conkyForecast --location=NLXX0486 --datatype=WS}

\${color0}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=DW --startday=1}\${color } \${hr 1}

\${offset 20}\${color0}Conditions\${color }\${alignr}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=CT --startday=1}
\${offset 20}\${color0}Chance of rain\${color }\${alignr}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=PC --startday=1}
\${offset 20}\${color0}Humidity\${color }\${alignr}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=HM --startday=1}
\${offset 20}\${color0}Sunrise\${color }\${alignr}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=SR --startday=1}
\${offset 20}\${color0}Sunset\${color }\${alignr}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=SS --startday=1}
\${offset 20}\${color0}Pollen count\${color }\${alignr}\${execi 3600 curl --silent -q -d "affiliateid=6176&amp;zip=73034" https://www.pollen.com/forecast.asp | cut -d'|' -f5} / 12\${color } (\${execi 3600 curl --silent -q -d "affiliateid=6176&amp;zip=73034" https://www.pollen.com/forecast.asp | cut -d'|' -f11})

\${color0}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=DW --startday=1}\${goto 90}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=DW --startday=2}\${goto 180}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=DW --startday=3}\${goto 270}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=DW --startday=4}\${font}\${color}
\${offset 20}\${color }\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=HT --startday=1}/\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=LT --startday=1}\${goto 110}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=HT --startday=2}/\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=LT --startday=2}\${goto 200}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=HT --startday=3}/\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=LT --startday=3}\${goto 290}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=HT --startday=4}/\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=LT --startday=4}\${font}\${color}
\${offset 20}\${color }\${font Arrows:size=16}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=BF --startday=1}\${font }\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=WS --startday=1}\${font Arrows:size=16}\${goto 110}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=BF --startday=2}\${font }\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=WS --startday=2}\${font Arrows:size=16}\${goto 200}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=BF --startday=3}\${font }\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=WS --startday=3}\${font Arrows:size=16}\${goto 290}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=BF --startday=4}\${font }\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=WS --startday=4}\${font}\${color}\${offset 20}\${color }\${font ConkyWeather:size=32}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=WF --startday=1}\${goto 120}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=WF --startday=2}\${goto 200}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=WF --startday=3}\${goto 290}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=WF --startday=4}\${font}\${color}
\${offset 20}\${color }\${font Moon Phases:size=16}\${execpi 1800 conkyForecast --location=NLXX0486 --datatype=MF}\${font }`;

const codeString_9 = `alignment top_left
gap_x 768
gap_y 386

TEXT
\${font Purisa:size=12}RSS \${color1}\${hr 3}\${font }
\${color0}\${execi 300 conkyGoogleReader -u ***@gmail.com -p *** -t ~/conkywidgets/rss.txt}
\${offset 20}\${execi 300 conkyGoogleReader -u ***@gmail.com -p *** -S -s ~/conkywidgets/rss_total.txt}`;

const codeString_10 = `alignment top_left
gap_x 1152
gap_y 386

#\${offset 20}\${color0}Updates\${alignr}\${execi 300 ~/Bin/debupdates.sh}
TEXT
\${font Purisa:size=12}Clock \${color1}\${hr 3}\${font }
\${offset 20}\${color0}Time\${alignr}\${color }\${time %H:%M:%S} \${time %d-%m-%y}
\${offset 20}\${color0}Uptime\${alignr}\${color }\$uptime

\${color0}\${execi 120 fortune -s | fold -w44}`;

const codeString_11 = `alignment top_left
gap_x 1536
gap_y 386

TEXT
\${font Purisa:size=12}NET \${color1}\${hr 3}\${font }
\${offset 20}\${color0}IP Addr\${alignr}\${color }\${addr eth0}
\${offset 20}\${color0}IP Addr\${alignr}\${alignr}\${color }\${execi 3600 wget -q -O - checkip.dyndns.org|sed -e 's/.*Current IP Address: //' -e 's/&lt;.*\$//' }
\${offset 20}\${color0}ESSID\${alignr}\${color }\${wireless_essid eth0} on eth0
\${offset 20}\${color0}Up\${alignr}\${color }\${upspeed eth0} k/s
\${offset 20}\${color2}\${upspeedgraph eth0 32,334 ffffff aaaaff s}
\${voffset 10}
\${offset 20}\${color0}Down\${alignr}\${color }\${downspeed eth0}k/s
\${offset 20}\${color2}\${downspeedgraph eth0 32,334 ffffff aaaaff s}
\${voffset 10}
\${offset 20}\${color0}\${tcp_portmon 32768 61000 rhost 0}\${alignr}\${color }\${tcp_portmon 32768 61000 rservice 0}
\${offset 20}\${color0}\${tcp_portmon 32768 61000 rhost 1}\${alignr}\${color }\${tcp_portmon 32768 61000 rservice 1}
\${offset 20}\${color0}\${tcp_portmon 32768 61000 rhost 2}\${alignr}\${color }\${tcp_portmon 32768 61000 rservice 2}
\${offset 20}\${color0}\${tcp_portmon 32768 61000 rhost 3}\${alignr}\${color }\${tcp_portmon 32768 61000 rservice 3}
\${offset 20}\${color0}\${tcp_portmon 32768 61000 rhost 4}\${alignr}\${color }\${tcp_portmon 32768 61000 rservice 4}
\${offset 20}\${color0}\${tcp_portmon 32768 61000 rhost 5}\${alignr}\${color }\${tcp_portmon 32768 61000 rservice 5}`;

const codeString_12 = `alignment top_left
gap_x 0
gap_y 786

TEXT
\${font Purisa:size=12}Email \${color1}\${hr 3}\${font }
\${offset 20}\${color0}swimmer@example.com\${alignr}\${color }\${execi 300 python ~/conkywidgets/imap.py}`;

const codeString_13 = `alignment top_left
gap_x 768
gap_y 786

#\${offset 20}\${color0}\${exec python ~/conkywidgets/twitter.py mentions}
#\${offset 20}\${color0}\${exec python ~/conkywidgets/twitter.py timeline}
#\${offset 20}\${color0}\${exec python ~/conkywidgets/twitter.py followers}
TEXT
\${font Purisa:size=12}Twitter (\${exec python ~/conkywidgets/twitter.py limit}) \${color1}\${hr 3}\${font }
\${offset 20}\${color0}\${execi 60 python ~/conkywidgets/twitter.py htimeline0}
\${offset 20}\${color0}\${execi 60 python ~/conkywidgets/twitter.py htimeline1}
\${offset 20}\${color0}\${execi 60 python ~/conkywidgets/twitter.py htimeline2}
\${offset 20}\${color0}\${execi 60 python ~/conkywidgets/twitter.py htimeline3}
\${offset 20}\${color0}\${execi 60 python ~/conkywidgets/twitter.py htimeline4}
\${offset 20}\${color0}\${execi 60 python ~/conkywidgets/twitter.py htimeline5}`;

const Blog = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };

	return (<main>
		<div className="container">
            <Menu active="tutorials"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">
        <Head>
            <title>Swimmer ♬ Tutorials</title>
        </Head>
        <section className="tutorial">
            <img className="avatar" src="../images/tutorials/conky.png" alt="Avatar"/>
            <div className="article">
                <h1>Conky</h1>

                <h2>Table of contents</h2>
                <ul>
                    <li key="1"><a href="#shared-settings">Shared settings</a></li>
                    <li key="2"><a href="#system">System</a></li>
                    <li key="3"><a href="#cpu">CPU</a></li>
                    <li key="4"><a href="#mem">MEM</a></li>
                    <li key="5"><a href="#highest-cpu">Highest CPU</a></li>
                    <li key="6"><a href="#highest-mem">Highest MEM</a></li>
                    <li key="7"><a href="#music">Music</a></li>
                    <li key="8"><a href="#weather">Weather</a></li>
                    <li key="9"><a href="#rss">RSS</a></li>
                    <li key="10"><a href="#clock">Clock</a></li>
                    <li key="11"><a href="#net">NET</a></li>
                    <li key="12"><a href="#e-mail">E-mail</a></li>
                    <li key="13"><a href="#twitter">Twitter</a></li>
                    <li key="14"><a href="#example-screenshots">Example screenshots</a></li>
                </ul>
                <p>
                    After a lot of trouble with the KDE version of Ubuntu (Kubuntu), which used a lot of resources, so 
                    I tried installing Gnome and later on Unity, both without any success, I fell in love with Linux 
                    Mint with Cinnamon as window manager. I can configure anything to my demands with a CSS file. This 
                    was so easy that I decided to re-install Conky. With this a couple of processes can be visualized 
                    with widgets on the desktop, which are also 100% configurable. At this moment, 12 of these are 
                    running: System; CPU; MEM; Highest CPU; Highest MEM; Music; Weather; RSS; Clock; NET; Email and 
                    Twitter. I guess there are more to come, while it fits my screen.
                </p>
                <h2 id="shared-settings">Shared settings</h2>

                <Code input={codeString_1} language="lua" />

                <h2 id="system">System</h2>
                <Code input={codeString_2} language="lua" />

                <h2 id="cpu">CPU</h2>
                <Code input={codeString_3} language="lua" />

                <h2 id="mem">MEM</h2>                
                <Code input={codeString_4} language="lua" />

                <h2 id="highest-cpu">Highest CPU</h2>
                <Code input={codeString_5} language="lua" />

                <h2 id="highest-mem">Highest MEM</h2>
                <Code input={codeString_6} language="lua" />

                <h2 id="music">Music</h2>
                <Code input={codeString_7} language="lua" />

                <h2 id="weather">Weather</h2>
                <Code input={codeString_8} language="lua" />

                <h2 id="rss">RSS</h2>
                <Code input={codeString_9} language="lua" />

                <h2 id="clock">Clock</h2>
                <Code input={codeString_10} language="lua" />

                <h2 id="net">NET</h2>
                <Code input={codeString_11} language="lua" />

                <h2 id="e-mail">E-mail</h2>
                <Code input={codeString_12} language="lua" />

                <h2 id="twitter">Twitter</h2>
                <Code input={codeString_13} language="lua" />

                <h2 id="example-screenshots">Example screenshots</h2>
                <img src="/images/tutorials/conky_1.png" alt="Screenshot 1"/>
                <img src="/images/tutorials/conky_2.png" alt="Screenshot 2"/>

                <a href="https://forums.linuxmint.com/viewtopic.php?f=60&t=30209&p=392703&hilit=conky+sector+11#p392703">Some other examples</a>
            </div>
        </section>
                    <Footer/>
                </div>
            </div>
        </div>
    </main>);
}

export default Blog;
