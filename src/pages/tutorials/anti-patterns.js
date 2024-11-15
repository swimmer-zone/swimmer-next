import Head from 'next/head';
import { Menu } from '../../Components';
import '../_scss/common.scss';

const Blog = () => {
	const toggleMenu = () => {
        document.body.classList.remove('show-menu');
    };
    
    const codeString_1 = ``;

    const codeString_2 = ``;

	return (<main>
		<div class="container">
            <Menu active="tutorials"/>
			<div className="content-wrap" onClick={toggleMenu}>
				<div className="content">
                    <Head>
                        <title>Swimmer ♬ Tutorials</title>
                    </Head>
                    <section className="tutorial">
                        <img className="avatar" src="../images/tutorials/anti-patterns.png" alt="Avatar" />
                        <div className="article">
                            <h1>Anti Patterns</h1>
                            <p><strong>This is a first concept of this post, updates are pending</strong></p>
                            <h2>Table of Contents</h2>
                            <ul>
                                <li><a href="#software-design">Software Design</a></li>
                                <li><a href="#object-oriented-programming">Object Oriented Programming</a></li>
                                <li><a href="#programming">Programming</a></li>
                                <li><a href="#methodological">Methodological</a></li>
                                <li><a href="#configuration-management">Configuration Management</a></li>
                            </ul>
                            <p>There has been a long silence on my website, but now it's time to post a couple of things. I transferred my blog from a database to a text-based system, using the Markdown syntax. I can use my favorite text-editor, Sublime Text. That may encourage me to write more. First, a long awaited blog:</p>
                            <p>An anti-pattern is a common response to a recurring problem that is usually ineffective and risks being highly counterproductive.</p>
                            <p>According to the authors of Design Patterns, there must be at least two key elements present to formally distinguish an actual anti-pattern from a simple bad habit, bad practice, or bad idea:</p>
                            <ol>
                                <li>A commonly used process, structure, or pattern of action that despite initially appearing to be an appropriate and effective response to a problem, has more bad consequences than good ones.</li>
                                <li>Another solution exists that is documented, repeatable, and proven to be effective.</li>
                            </ol>
                            <p>There are organizational examples and also project management suffers from anti-patterns, but in this article I'll highlight just the anti-patterns in software engineering. For a full list, visit <a href="https://en.wikipedia.org/wiki/Anti-pattern">this page on Wikipedia</a>.</p>
                            <p>This blog post will be alive, which means that I'm planning to post regular updates to put more and more detailed descriptions of the several patterns.</p>
                            <h2 id="software-design">Software Design</h2>
                            <h3><a href="https://en.wikipedia.org/wiki/Abstraction_inversion">Abstraction inversion</a></h3>
                            <p>is an anti-pattern arising when users of a construct need functions implemented within it but not exposed by its interface. The result is that the users re-implement the required functions in terms of the interface, which in its turn uses the internal implementation of the same functions. This may result in implementing lower-level features in terms of higher-level ones, thus the term 'abstraction inversion'.</p>
                            <p>Possible ill-effects are:</p>
                            <ul>
                                <li>The user of such a re-implemented function may seriously underestimate its running-costs.</li>
                                <li>The user of the construct is forced to obscure their implementation with complex mechanical details.</li>
                                <li>Many users attempt to solve the same problem, increasing the risk of error.</li>
                            </ul>
                            <p>Ways to avoid this anti-pattern include:</p>
                            <ul>
                                <li>If your system offers formally equivalent functions, choose carefully which to implement in terms of the other.</li>
                                <li>Do not force unnecessarily weak constructs on your users.</li>
                                <li>Choose your infrastructure carefully.</li>
                            </ul>
                            <h3><a href="https://en.wikipedia.org/wiki/Ambiguous_viewpoint">Ambiguous viewpoint</a></h3>
                            <p>Object Oriented Analysis and Design models are often presented without clarifying the viewpoint represented by the model. By default, these models denote an implementation viewpoint that visualises the structure of a computer program. Mixed viewpoints do not support the fundamental separation of interfaces from implementation details, which is one of the primary benefits of the object-oriented paradigm.</p>
                            <p>In Object Oriented Analysis and Design there are three viewpoints: The business viewpoint (the information that is domain specific and matters to the end user), the specification viewpoint (which defines the exposed interface elements of a class), and the implementation viewpoint (which deals with the actual internal implementation of the class). If the viewpoint becomes mixed then these elements will blend together in a way which makes it difficult to separate out and maintain the internals of an object without changing the interface, one of the core tenets of Object Oriented Analysis and Design.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Big_ball_of_mud">A big ball of mud</a></h3>
                            <p>is a software system that lacks a perceivable architecture. Although undesirable from a software engineering point of view, such systems are common in practice due to business pressures, developer turnover and code entropy. They are a type of design anti-pattern.</p>
                            <p>The overall structure of the system may never have been well defined. If it was, it may have eroded beyond recognition. Programmers with a shred of architectural sensibility shun these quagmires. Only those who are unconcerned about architecture, and, perhaps, are comfortable with the inertia of the day-to-day chore of patching the holes in these failing dikes, are content to work on such systems.</p>
                            <p>Programmers in control of a big ball of mud project are strongly encouraged to study it and to understand what it accomplishes, and to use this as a loose basis for a formal set of requirements for a well-designed system that could replace it. Technology shifts, such as client-server to web-based or file-based to database-based, may provide good reasons to start over from scratch.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Database-as-IPC">Database-as-IPC</a></h3>
                            <p>is an anti-pattern where a database is used as the message queue for routine interprocess communication in a situation where a lightweight IPC mechanism such as sockets would be more suitable. Using a database for this kind of message passing is extremely inefficient compared to other IPC methods and often introduces serious long-term maintenance issues, but this method enjoys a measure of popularity because the database operations are more widely understood than "proper" IPC mechanisms.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Gold_plating_(project_management)">Gold plating</a></h3>
                            <p>in project management, or time management in general, is a term used to describe the error of working on a project or task past the point of diminishing returns. For example: after having met the requirements, the project manager or the developer works on further enhancing the product, thinking the customer will be delighted to see additional or more polished features, rather than what was asked for or expected. The customer might be disappointed in the results, and the extra effort by the developer might be futile.</p>
                            <p>Gold plating is also considered a bad project management practice for different project management best practices and methodologies such as Project Management Body of Knowledge (PMBOK) and PRINCE2. In this case, 'gold plating' means the addition of any feature not considered in the original scope plan (PMBOK) or product description (PRINCE2) at any point of the project. This is because it introduces a new source of risks to the original planning such as additional testing, documentation, costs, or timelines. However, gold plating does not prevent new features from being added to the project; they can be added at any time as long as they follow the official change procedure and the impact of the change in all the areas of the project is taken into consideration.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Inner-platform_effect">The Inner-platform effect</a></h3>
                            <p>is the tendency of software architects to create a system so customizable as to become a replica, and often a poor replica, of the software development platform they are using. This is generally inefficient and such systems are often considered to be examples of an anti-pattern.</p>
                            <p>Examples are visible in plugin-based software such as some text editors and web browsers which often have developers create plugins that recreate software that would normally run on top of the operating system itself. The Firefox add-on mechanism has been used to develop a number of FTP clients and file browsers, which effectively replicate some of the features of the operating system, albeit on a more restricted platform.</p>
                            <p>In the database world, developers are sometimes tempted to bypass the RDBMS, for example by storing everything in one big table with three columns labelled entity ID, key, and value. While this entity-attribute-value model allows the developer to break out from the structure imposed by an SQL database, it loses out on all the benefits,[1] since all of the work that could be done efficiently by the RDBMS is forced onto the application instead. Queries become much more convoluted,[2] the indexes and query optimizer can no longer work effectively, and data validity constraints are not enforced. Performance and maintainability can be extremely poor.</p>
                            <p>Another example is the phenomenon of web desktops, where a whole desktop environment—often including a web browser—runs inside a browser (which itself typically runs within the desktop environment provided by the operating system). A desktop within a desktop can be unusually awkward for the user, and hence this is generally only done to run programs that cannot easily be deployed on end user systems, or by hiding the outer desktop away.</p>
                            <p>It is normal for software developers to create a library of custom functions that relate to their specific project. The inner-platform effect occurs when this library expands to include general purpose functions that duplicate functionality already available as part of the programming language or platform. Since each of these new functions will generally call a number of the original functions, they tend to be slower, and if poorly coded, less reliable as well.[citation needed]</p>
                            <p>On the other hand, such functions are often created to present a simpler (and often more portable) abstraction layer on top of lower level services that either have an awkward interface, are too complex, non-portable or insufficiently portable, or simply a poor match for higher level application code.</p>
                            <p>An inner platform can be useful for portability and privilege separation reasons—in other words, so that the same application can run on a wide variety of outer platforms without affecting anything outside a sandbox managed by the inner platform. For example, Sun Microsystems designed the Java platform to meet both of these goals.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Input_kludge">Input kludge</a></h3>
                            <p>is a type of failure in software (an anti-pattern) where simple user input is not handled. For example, if a computer program accepts free text input from the user, an ad hoc algorithm will mishandle many combinations of legal and illegal input strings. Input kludges are usually difficult for a programmer to detect in a unit test, but very easy for the end user to find. The evidence exists that the end user can easily crash software that fails to correctly handle user input. Indeed, the buffer overflow security hole is an example of the problems caused.</p>
                            <p>To remedy input kludges, one may use input validation algorithms to handle user input. A monkey test can be used to detect an input kludge problem. A common first test to discover this problem is to roll one's hand across the computer keyboard or to 'mash' the keyboard to produce a large junk input, but such an action often lacks reproducibility. Greater systematicity and reproducibility may be obtained by using fuzz testing software.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Interface_bloat">Interface bloat</a></h3>
                            <p>is when a interface incorporates too many operations on some data into an interface, only to find that most of the objects cannot perform the given operations.</p>
                            <p>Interface bloat is an example of an anti-pattern. One might consider using visitor pattern, Adapter Pattern, or interface segregation instead.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Magic_pushbutton">Magic pushbutton</a></h3>
                            <p>consists of a system partitioned into two parts: user interface and business logic, that are coupled through a single point, clicking the "magic pushbutton" or submitting a form of data. As it is a single point interface, this interface becomes over-complicated to implement. The temporal coupling of these units is a major problem: every interaction in the user interface must happen before the pushbutton is pressed, business logic can only be applied after the button was pressed. Cohesion of each unit also tends to be poor: features are bundled together whether they warrant this or not, simply because there is no other structured place in which to put them.</p>
                            <p>In a modern system, i.e. one where processing is cheap and competing interface standards are high, users should simply not be left to enter data for long periods without some automatic interaction to guide, validate, or to tailor the system according to the developing state of the data they've so far entered. Leaving them alone to "just get on with it", then validating everything at the end, means that the corrections needed will be detected further and further from when that data was entered. As an a priori principle, corrections needed should be highlighted as soon and as close to when they are either entered, or could first be identified.</p>
                            <p>In an event-driven interface, most events triggered by the "completion" of a field will present an opportunity to either validate that field, or to guide the choices for entering the next. They may even control which field the user is taken to next: sub-sections of a form are often made relevant or irrelevant by values entered early on, and users should not need to manually skip these, if it can be done for them.</p>
                            <p>In this scenario, the programmer draws the user interface first and then writes the business logic in the automatically created methods.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Race_hazard">a race hazard</a></h3>
                            <p>is the behavior of an electronics, software, or other system where the output is dependent on the sequence or timing of other uncontrollable events. It becomes a bug when events do not happen in the order the programmer intended.</p>
                            <p>Race conditions can occur especially in logic circuits, multithreaded or distributed software programs.</p>
                            <p>Many software tools exist to help detect race conditions in software. They can be largely categorized into two groups: static analysis tools and dynamic analysis tools.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Stovepipe_system">Stovepipe system</a></h3>
                            <p>is a pejorative term for a system that has the potential to share data or functionality with other systems but which does not. The term evokes the image of stovepipes rising above buildings, each functioning individually. A simple example of a stovepipe system is one that implements its own user IDs and passwords, instead of relying on a common user ID and password shared with other systems.</p>
                            <p>Stovepipes are systems procured and developed to solve a specific problem, characterized by a limited focus and functionality, and containing data that cannot be easily shared with other systems.</p>
                            <p>A stovepipe system is generally considered an example of an anti-pattern, particularly found in legacy systems. This is due to the lack of code reuse, and resulting software brittleness due to potentially general functions only being used on limited input.</p>
                            <p>However, in certain cases stovepipe systems are considered appropriate, due to benefits from vertical integration and avoiding dependency hell. For example, the Microsoft Excel team has avoided dependencies and even maintained its own C compiler, which helped it to ship on time, have high-quality code, and generate small, cross-platform code.</p>
                            <p>Inside Out: Publishing the internal model to the outside world</p>
                            <h2 id="object-oriented-programming">Object Oriented Programming</h2>
                            <h3><a href="https://en.wikipedia.org/wiki/Anemic_domain_model">Anemic domain model</a></h3>
                            <p>The use of the domain model without any business logic. The domain model's objects cannot guarantee their correctness at any moment, because their validation and mutation logic is placed somewhere outside (most likely in multiple places). Martin Fowler considers this to be an anti-pattern, but some disagree that it is always an anti-pattern.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Call_super">Call super</a></h3>
                            <p>Requiring subclasses to call a superclass's overridden method</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Circle-ellipse_problem">Circle-ellipse problem</a></h3>
                            <p>Subtyping variable-types on the basis of value-subtypes</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Circular_dependency">Circular dependency</a></h3>
                            <p>Introducing unnecessary direct or indirect mutual dependencies between objects or software modules</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Constant_interface">Constant interface</a></h3>
                            <p>Using interfaces to define constants</p>
                            <h3><a href="https://en.wikipedia.org/wiki/God_object">God object</a></h3>
                            <p>Concentrating too many functions in a single part of the design (class)</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Object_cesspool">Object cesspool</a></h3>
                            <p>Reusing objects whose state does not conform to the (possibly implicit) contract for re-use</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Object_orgy">Object orgy</a></h3>
                            <p>Failing to properly encapsulate objects permitting unrestricted access to their internals</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Poltergeist_(computer_science)">Poltergeists</a></h3>
                            <p>Objects whose sole purpose is to pass information to another object</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Sequential_coupling">Sequential coupling</a></h3>
                            <p>A class that requires its methods to be called in a particular order</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Yo-yo_problem">Yo-yo problem</a></h3>
                            <p>A structure (e.g., of inheritance) that is hard to understand due to excessive fragmentation</p>
                            <h2 id="programming">Programming</h2>
                            <h3><a href="https://en.wikipedia.org/wiki/Accidental_complexity">Accidental complexity</a></h3>
                            <p>Programming tasks which could be eliminated with better tools (as opposed to essential complexity inherent in the problem being solved)</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Action_at_a_distance_(computer_science)">Action at a distance</a></h3>
                            <p>Unexpected interaction between widely separated parts of a system</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Boat_anchor_(computer_science)">Boat anchor</a></h3>
                            <p>Retaining a part of a system that no longer has any use</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Busy_waiting">Busy waiting</a></h3>
                            <p>Consuming CPU while waiting for something to happen, usually by repeated checking instead of messaging</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Caching_failure">Caching failure</a></h3>
                            <p>Forgetting to clear a cache that holds a negative result (error) after the error condition has been corrected</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Cargo_cult_programming">Cargo cult programming</a></h3>
                            <p>Using patterns and methods without understanding why</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Coding_by_exception">Coding by exception</a></h3>
                            <p>Adding new code to handle each special case as it is recognized</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Design_pattern">Design pattern</a></h3>
                            <p>The use of patterns has itself been called an anti-pattern, a sign that a system is not employing enough abstraction</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Error_hiding">Error hiding</a></h3>
                            <p>Catching an error message before it can be shown to the user and either showing nothing or showing a meaningless message. This anti-pattern is also named Diaper Pattern. Also can refer to erasing the Stack trace during exception handling, which can hamper debugging.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Hard_code">Hard code</a></h3>
                            <p>Embedding assumptions about the environment of a system in its implementation</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Spaghetti_code#Lasagna_code">Lasagna code</a></h3>
                            <p>Programs whose structure consists of too many layers of inheritance</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Lava_flow_(programming)">Lava flow</a></h3>
                            <p>Retaining undesirable (redundant or low-quality) code because removing it is too expensive or has unpredictable consequences</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Loop-switch_sequence">Loop-switch sequence</a></h3>
                            <p>Encoding a set of sequential steps using a switch within a loop statement</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants">Magic numbers</a></h3>
                            <p>Including unexplained numbers in algorithms</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Magic_string_(programming)#Magic_strings_in_code">Magic strings</a></h3>
                            <p>Implementing presumably unlikely input scenarios, such as comparisons with very specific strings, to mask functionality.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Don%27t_Repeat_Yourself">Repeating yourself</a></h3>
                            <p>Writing code which contains repetitive patterns and substrings over again; avoid with once and only once (abstraction principle)</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Shooting_the_messenger">Shooting the messenger</a></h3>
                            <p>Throwing exceptions from the scope of a plugin or subscriber in response to legitimate input, especially when this causes the outer scope to fail.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Shotgun_surgery">Shotgun surgery</a></h3>
                            <p>Developer adds features to an application codebase which span a multiplicity of implementors or implementations in a single change</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Softcoding">Soft code</a></h3>
                            <p>Storing business logic in configuration files rather than source code</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Spaghetti_code">Spaghetti code</a></h3>
                            <p>Programs whose structure is barely comprehensible, especially because of misuse of code structures</p>
                            <h2 id="methodological">Methodological</h2>
                            <h3><a href="https://en.wikipedia.org/wiki/Copy_and_paste_programming">Copy and paste programming</a></h3>
                            <p>Copying (and modifying) existing code rather than creating generic solutions</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Every_Fool_His_Own_Tool">Every Fool Their Own Tool</a></h3>
                            <p>Failing to use proper software development principles when creating tools to facilitate the software development process itself.</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Golden_hammer">Golden hammer</a></h3>
                            <p>Assuming that a favorite solution is universally applicable (See: Silver bullet)</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Improbability_factor">Improbability factor</a></h3>
                            <p>Assuming that it is improbable that a known error will occur</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Invented_here">Invented here</a></h3>
                            <p>The tendency towards dismissing any innovation or less than trivial solution originating from inside the organization, usually because of lack of confidence in the staff</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Not_Invented_Here#In_computing">Not Invented Here (NIH) syndrome</a></h3>
                            <p>The tendency towards reinventing the wheel (failing to adopt an existing, adequate solution)</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Program_optimization#When_to_optimize">Premature optimization</a></h3>
                            <p>Coding early-on for perceived efficiency, sacrificing good design, maintainability, and sometimes even real-world efficiency</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Programming_by_permutation">Programming by permutation</a></h3>
                            <p>Trying to approach a solution by successively modifying the code to see if it works</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Reinventing_the_wheel#Related_phrases">Reinventing the square wheel</a></h3>
                            <p>Failing to adopt an existing solution and instead adopting a custom solution which performs much worse than the existing one</p>
                            <h3><a href="https://en.wikipedia.org/wiki/No_Silver_Bullet">Silver bullet</a></h3>
                            <p>Assuming that a favorite technical solution can solve a larger process or problem</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Tester_Driven_Development">Tester Driven Development</a></h3>
                            <p>Software projects in which new requirements are specified in bug reports</p>
                            <h2 id="configuration-management">Configuration Management</h2>
                            <h3><a href="https://en.wikipedia.org/wiki/Dependency_hell">Dependency hell</a></h3>
                            <p>Problems with versions of required products</p>
                            <h3><a href="https://en.wikipedia.org/wiki/DLL_hell">DLL hell</a></h3>
                            <p>Inadequate management of dynamic-link libraries (DLLs), specifically on Microsoft Windows</p>
                            <h3><a href="https://en.wikipedia.org/wiki/Extension_conflict">Extension conflict</a></h3>
                            <p>Problems with different extensions to classic Mac OS attempting to patch the same parts of the operating system</p>
                            <h3><a href="https://en.wikipedia.org/wiki/JAR_hell">JAR hell</a></h3>
                            <p>Overutilization of multiple JAR files, usually causing versioning and location problems because of misunderstanding of the Java class loading model</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>);
}

export default Blog;
