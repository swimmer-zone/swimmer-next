import Head from 'next/head';
import { Back, Code, Tutorials } from '../../Components';
import './_scss/tutorials.scss';

const codeString_1 = `npx create-react-app my-app`;

const codeString_2 = `npx create-next-app@latest`;

const codeString_3 = `What is your project named?  my-app
Would you like to use TypeScript?  No / Yes
Would you like to use ESLint?  No / Yes
Would you like to use Tailwind CSS?  No / Yes
Would you like to use \`src/\` directory?  No / Yes
Would you like to use App Router ? (recommended)  No / Yes
Would you like to customize the default import alias (@/*)?  No / Yes`;

const codeString_4 = `npm run dev`;

const Blog = () => {

    return (<main>
        <Head>
            <title>Swimmer ♬ Tutorials</title>
        </Head>
        <Back />
        <Tutorials />
        <section className="tutorial">
            <img className="avatar" src="../images/tutorials/next.png" alt="Avatar" />
            <div className="article">
                <h1>Next.js</h1>
                <h2>Table of contents</h2>
                <ul>
                    <li key="1"><a href="#introduction">Introduction</a></li>
                    <li key="2"><a href="#web-server">Web Server</a></li>
                    <li key="3"><a href="#setup">Setup</a></li>
                    <li key="4"><a href="#api">API's</a></li>
                </ul>
                <h2 id="introduction">Introduction</h2>
                <p>
                    Currently my website is created with Next.js. The previous version was built using vanilla React,
                    but I was experiencing issues every time I had to update all packages or even when I cloned the
                    repository to a new machine. Both repositories can be found on my GitHub page, but the React
                    version will probably disappear over time:
                </p>
                <ul>
                    <li><a href="https://github.com/swimmer-zone/swimmer-react">https://github.com/swimmer-zone/swimmer-react</a></li>
                    <li><a href="https://github.com/swimmer-zone/swimmer-next">https://github.com/swimmer-zone/swimmer-next</a></li>
                </ul>
                <h2 id="web-server">Web Server</h2>
                <p>
                    The project is hosted at Vercel, which is a serverless solution. It can be linked to a repository
                    so that every time the code is pushed, a deployment is initiated with automated testing. Suffice
                    to say that this is much more efficient than doing this manually. A very long time ago I was 
                    used to doing this with FTP.
                </p>
                <h2 id="setup">Setup</h2>
                <p>
                    I will assume you already have Node, NPM and NPX installed. To set up a React app, you can enter
                    the coommand below. The preferred name is given as parameter to this command:
                </p>
                <Code input={codeString_1} language="bash" />
                <p>For a Next.js app the command is almost identical:</p>
                <Code input={codeString_2} language="bash" />
                <p>
                    However, the project name is not provided as a parameter and a couple of questions need to be
                    answered:
                </p>
                <Code input={codeString_3} language="bash" />
                <p>
                    I opted to not use TypeScript, I did install ESLint but I'm not yet using it. I also don't use
                    Tailwind in this project. Furthermore I want to have all of my source code bundled in the 'src'
                    directory, keeping the root directory clean. Of course I'm using the App Router which also was
                    one of the reasons to migrate to Next.js. I left the default import alias as is.
                </p>
                <p>
                    Now you can start up your project, it will usually be available
                    at <a href="https://localhost:3000">https://localhost:3000</a>. You can then start editing the
                    'app/page.js' file.
                </p>
                <Code input={codeString_4} language="bash" />
                <h2 id="api">API's</h2>
                <p>
                    I'm using Supabase as my database, you could call this
                    a <abbr title="Database as a Service">DaaS</abbr>. I might migrate to using my own API in the 
                    future. I have some past experience with Laravel, you can also find a tutorial about that here.
                    Back then I planned to use it as a CMS, but in this case I just want to use it as an API. I'm
                    not sure yet if I will use full-blown Laravel, I might opt for Lumen.
                </p>
                <p>
                    Another API that I'm using is SoundCloud to grab all of my albums and tracks and allow for those
                    to be played on my site. 
                </p>
                <p>
                    Some other data is pulled from a JSON file that is hosted within this repository as well as some
                    data from a Markdown file. I'm still searching for a solution for all of my images, this will 
                    probably be hosted in the Laravel instance in the future, but for now it also is part of the 
                    repository.
                </p>
                <p>
                    Some useful resources:
                </p>
                <ul>
                    <li key="1"><a href="https://nextjs.org/docs">Next.js Documentation</a></li>
                    <li key="2"><a href="https://nextjs.org/learn">Learn Next.js</a></li>
                    <li key="3"><a href="https://github.com/vercel/next.js/">Next.js GitHub repository</a></li>
                    <li key="4"><a href="https://nextjs.org/docs/deployment">Next.js deployment documentation</a></li>
                    <li key="5"><a href="https://vercel.com/new?filter=next.js">Vercel - Create project</a></li>
                    <li key="6"><a href="https://vercel.com/templates?framework=next.js">Vercel - Next.js templates</a></li>
                    <li key="7"><a href=""></a></li>
                    <li key="8"><a href=""></a></li>
                </ul>
            </div>
        </section>
    </main>);
}

export default Blog;
