import Head from 'next/head';
import { Footer, Menu, Code } from '../../Components';
import '../_scss/common.scss';
    
const codeString_1 = `<?php
// Connect to the database
// ... a pile of HTML for the rest of the page
// ... and some code to check if there's a session or cookie
if ($_COOKIE['logged_in'] == true) {

    // Retrieve the item from the database, using the id given with the URL
    $result = pg_query("SELECT title, author, content FROM news WHERE id = " . $_GET['id']);

    // Loop through the results, in this case just one row is returned by the database
    while ($item = pg_fetch_assoc($result)) {

        // We want to know who posted the item and of course the item itself
        // HTML and PHP are mixed in the same file
        echo '<h1>' . $item['title'] . '</h1>';
        echo $item['author'] . '<br/>';
        echo '<article>' . $item['content'] . '</article>';
    }
}`;

const codeString_2 = `<?php
// Connect to the database
// ... a pile of HTML for the rest of the page
// ... and some code to check if there's a session or cookie
if ($_COOKIE['logged_in'] == true) {

    // Retrieve the item from the database, using the id given with the URL
    $result = pg_query("SELECT title, author, photo FROM pictures WHERE id = " . $_GET['id']);

    // Loop through the results, in this case just one row is returned by the database
    while ($item = pg_fetch_assoc($result)) {

        // We want to know who posted the item and of course the item itself
        // HTML and PHP are mixed in the same file
        echo '<h1>' . $item['title'] . '</h1>';
        echo $item['author'] . '<br>';
        echo '<img src="' . $item['photo'] . '">';
    }
}`;

const codeString_3 = `<?php
// All Models 'extend' this class, so all Models automatically contain the connect() method
// This one has to be written just once. When the database password changes, this has to be 
// altered on one location
class Model {

    public function __construct() {
        // Some code to connect...
    }

    public abstract function getData($id);
}`;

const codeString_4 = `<?php
class ModelNews extends Model {

    // The controller picks all variables that are specified in the URL, in this case
    // the id, and uses them to call this method
    public function getData($id) {
        $result = pg_query("SELECT title, author, content FROM news WHERE id = " . $id);

        // Loop through the results, in this case just one row is returned by the database
        while ($item = pg_fetch_assoc($result)) {

            // No HTML needed here. An array is returned that all Views can understand
            $data[0]['title'] = $item['title'];
            $data[0]['author'] = $item['author'];
            $data[0]['content'] = $item['content'];
        }
        return $data;
    }
}`;

const codeString_5 = `<?php
class ModelPhotos extends Model {
    public function getData($id) {
        $result = pg_query("SELECT title, author, photo FROM pictures WHERE id = " . $id);
        while ($item = pg_fetch_assoc($result)) {
            $data[0]['title'] = $item['title'];
            $data[0]['author'] = $item['author'];
            $data[0]['photo'] = $item['photo'];
        }
        return $data;
    }
}`;

const codeString_6 = `<?php
class View {
    public function __construct() {
        // A pile of HTML...
    }

    // Every View has to have the option to show the output on screen
    public function show($data) {

        // First loop through the array
        while ($data) {

            // Then make sure every field is displayed, in this case title; author and content
            while ($data[$i]) {

                echo '<h1>' . $data[$i][$j] . '</h1>';
                echo $data[$i][$j];
                echo '<article>' . $data[$i][$j] . '</article>';
            }
        }
    }
}`;

const codeString_7 = `<?php
class ViewNews extends View {}`;

const codeString_8 = `<?php
class ViewPhotos extends View {}`;

const codeString_9 = `<?php
class Controller {
    public function run() {
        // The Model and View are initialized
        $model = new Model();
        $view = new View();

        // The data from the Model is passed to the View
        $view->show($model->getData($_GET['id']));
    }
}`;

const codeString_10 = `<?php
class ControllerNews extends Controller {}`;

const codeString_11 = `<?php
class ControllerPhotos extends Controller {}`;

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
            <img className="avatar" src="../images/tutorials/design-patterns.png" alt="Avatar"/>
            <div className="article">
                <h1>Design Patterns</h1>
                <p>
                    A while ago I started reading a book about <em>Design Patterns</em>. Now I've read it, I thought 
                    it was time to summarize the differences between <em><abbr title="Object Oriented">OO</abbr></em>&nbsp;
                    and <em>procedural</em> programming in a way most people will understand.
                </p>
                <p>
                    For this example<a href="#note-2" className="sup">1</a> I'll use a visitor which is logged in on a 
                    website, who wants to read a news item, which is only available for registered members, first the 
                    procedural style:
                </p>
                <Code input={codeString_1} language="php" />
                <p>
                    For a website which has just one page, the code above will be a perfect solution. However, when one 
                    wants to add a second page, the same code has to be used. For example on a photo album, here too it's 
                    about a picture only a registered member is allowed to see:
                </p>
                <Code input={codeString_2} language="php" />
                <p>
                    As you can see, only a small change is needed, the rest of it is <em>duplicate code</em>. With only 
                    two pages there's not much damage done, but tomorrow of course there will come another page, and 
                    another... If you want to support comments on your website, which are almost equal on every page, 
                    this code has to be added on each of the four pages. The copy and pasting won't hurt, but bugs always 
                    appear afterwards, so you have to edit this code on the four locations. For websites with hundreds 
                    of pages, this just is no option. With OO this problem is solved. In this example I will be using 
                    the <abbr title="Model View Controller">MVC</abbr> pattern.
                </p>
                <p>
                    The Model is used to connect to the database. It pulls data from and puts data into this database. It also deals with the logic behind this data. A <abbr title="The number of seconds since the Linux epoch: 1 january 1970">timestamp</abbr> is converted to a readable date or time format. And it checks user input, so no strange content can appear on the website and it protects the website against hacks.</p>
                <p>
                    The View is used to display the data on screen, this is the only place where <abbr title="Hyper Text Markup Language">HTML</abbr> (and sometimes <abbr title="Cascading Style Sheets">CSS</abbr>) is used. In most cases the HTML for markup and CSS for styling is separated in different files. Which is a good habit to keep the code clean.</p>
                <p>
                    The Controller is in between the Model and View like some sort of negotiator. For example, it makes sure only permitted users can view certain data.</p>
                <p>
                    In the example below I'll use this MVC pattern to refactor the procedural code. First the Models, with a <abbr title="A collection of related methods">class</abbr> which acts like an <abbr title="Some sort of super class which defines which methods a class should contain">interface</abbr>, with a standard method and an abstract method, this abstract method doesn't do anything, but every class that extends this class, should overrule this method. Every Model has to contain a database connection, so this functionality is put in the constructor. The constructor is automatically called when a class is initialized, or when an <abbr title="Instance of a class">object</abbr> is created.</p>

                <Code input={codeString_3} language="php" />
                <Code input={codeString_4} language="php" />
                <Code input={codeString_5} language="php" />

                <p>
                    Looking at the Models, we have pretty much the same code, but the HTML is separated and the Models only have to know how the database is set up. Next we have the Views:</p>
                
                <Code input={codeString_6} language="php" />
                <Code input={codeString_7} language="php" />
                <Code input={codeString_8} language="php" />

                <p>
                    The ViewNews and ViewPhotos classes can be kept small, because they inherit their functionality from the main View class. When one of the Views needs some extra functionality, it can be easily edit by overruling the show() method. Also, other methods can be added. Last but not least, the Controllers:</p>

                <Code input={codeString_9} language="php" />
                <Code input={codeString_10} language="php" />
                <Code input={codeString_11} language="php" />

                <p>
                    The Controllers also can be kept small, because the <code>run()</code> method is inherited. When initializing the Model and View only the right title has to be passed, so that ModelNews and ViewNews are called when ControllerNieuws is called. The same story goes for the ModelPhotos; ViewPhotos and ControllerPhotos. The Controller class can handle this, so no other code is needed for ControllerNews en ControllerPhotos.</p>
                <p>
                    The number of lines is pretty much the same, but with bigger websites one can get lost in the first example. But actually the article is about Design Patterns. Some basic principles of OO from <em>Head First Design Patterns</em>.</p>
                <hr/>
                <h2>OO Principles:</h2>
                <ul>
                    <li><abbr title="A strategy which allows pieces of software to only release information about themselves that is strictly necessary">Encapsulate</abbr> what varies</li>
                    <li>Favor composition over <abbr title="A class inherits properties, methods and procedures from a parent class">inheritance</abbr></li>
                    <li>Program to interfaces, not to implementations</li>
                    <li>Strive for loosely coupled design between objects that interact</li>
                    <li>Classes should be open to additions, but closed for alterations</li>
                    <li>Depend upon <abbr title="Omitting non-essential information or aspects to show more fundamental structures">abstractions</abbr>. Do not depend upon concrete classes</li>
                    <li>Only talk to friends</li>
                    <li>Don't call us, we call you</li>
                    <li>A class should have only one reason to change it</li>
                    <li>Another keyword: <abbr title="Having classes and interfaces of the same outline, but with different implementations. Meaning, the naming of operations or methods. This is an important factor to get the most from object oriented programming">polymorphism</abbr>.</li>
                </ul>
                <p>
                    Some situations don't allow the use of all principles, so they have to be compromised, that's where Design Patterns come in. These are solutions for these situations, used a lot by other developers, so these patterns are docoumented a lot. The patterns get a title which allows developers world whide to use the same vocabulary.</p>
                <h2>OO Patterns (Design Patterns):</h2>
                <h3>Creational patterns</h3>
                <ul>
                    <li><strong>Abstract factory</strong><a href="#note-2" className="sup">2</a> Provide an interface for creating families of related or dependent objects without specifying their concrete classes.</li>
                    <li><strong>Builder</strong><a href="#note-2" className="sup">2</a> Separate the construction of a complex object from its representation, allowing the same construction process to create various representations.</li>
                    <li><strong>Factory method</strong><a href="#note-2" className="sup">2</a> Define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses (dependency injection).</li>
                    <li><strong>Lazy initialization</strong> Tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed. This pattern appears in the GoF catalog as "virtual proxy", an implementation strategy for the Proxy pattern.</li>
                    <li><strong>Multiton</strong> Ensure a class has only named instances, and provide a global point of access to them.</li>
                    <li><strong>Object pool</strong> Avoid expensive acquisition and release of resources by recycling objects that are no longer in use. Can be considered a generalisation of connection pool and thread pool patterns.</li>
                    <li><strong>Prototype</strong><a href="#note-2" className="sup">2</a> Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.</li>
                    <li><strong>Resource acquisition is initialization</strong> Ensure that resources are properly released by tying them to the lifespan of suitable objects.</li>
                    <li><strong>Singleton</strong><a href="#note-2" className="sup">2</a> Ensure a class has only one instance, and provide a global point of access to it.</li>
                    <li><strong>Object library</strong> Encapsulate object management including factory interface with live and dead lists.</li>
                </ul>
                <h3>Structural patterns</h3>
                <ul>
                    <li><strong>Adapter or Wrapper or Translator</strong><a href="#note-2" className="sup">2</a> Convert the interface of a class into another interface clients expect. An adapter lets classes work together that could not otherwise because of incompatible interfaces. The enterprise integration pattern equivalent is the translator.</li>
                    <li><strong>Bridge</strong><a href="#note-2" className="sup">2</a> Decouple an abstraction from its implementation allowing the two to vary independently.</li>
                    <li><strong>Composite</strong><a href="#note-2" className="sup">2</a> Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.</li>
                    <li><strong>Decorator</strong><a href="#note-2" className="sup">2</a> Attach additional responsibilities to an object dynamically keeping the same interface. Decorators provide a flexible alternative to subclassing for extending functionality.</li>
                    <li><strong>Facade</strong><a href="#note-2" className="sup">2</a> Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.</li>
                    <li><strong>Flyweight</strong><a href="#note-2" className="sup">2</a> Use sharing to support large numbers of similar objects efficiently.</li>
                    <li><strong>Front controller</strong> The pattern relates to the design of Web applications. It provides a centralized entry point for handling requests.</li>
                    <li><strong>Marker</strong> Empty interface to associate metadata with a class.</li>
                    <li><strong>Module</strong> Group several related elements, such as classes, singletons, methods, globally used, into a single conceptual entity.</li>
                    <li><strong>Proxy</strong><a href="#note-2" className="sup">2</a> Provide a surrogate or placeholder for another object to control access to it.</li>
                    <li><strong>Twin</strong> Twin allows modeling of multiple inheritance in programming languages that do not support this feature.</li>
                </ul>
                <h3>Behavioral patterns</h3>
                <ul>
                    <li><strong>Blackboard</strong> Artificial intelligence pattern for combining disparate sources of data (see blackboard system)</li>
                    <li><strong>Chain of responsibility</strong><a href="#note-2" className="sup">2</a> Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.</li>
                    <li><strong>Command</strong><a href="#note-2" className="sup">2</a> Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.</li>
                    <li><strong>Interpreter</strong><a href="#note-2" className="sup">2</a> Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.</li>
                    <li><strong>Iterator</strong><a href="#note-2" className="sup">2</a> Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.</li>
                    <li><strong>Mediator</strong><a href="#note-2" className="sup">2</a> Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.</li>
                    <li><strong>Memento</strong><a href="#note-2" className="sup">2</a> Without violating encapsulation, capture and externalize an object's internal state allowing the object to be restored to this state later.</li>
                    <li><strong>Null object</strong> Avoid null references by providing a default object.</li>
                    <li><strong>Observer or Publish/subscribe</strong><a href="#note-2" className="sup">2</a> Define a one-to-many dependency between objects where a state change in one object results in all its dependents being notified and updated automatically.</li>
                    <li><strong>Servant</strong> Define common functionality for a group of classes.</li>
                    <li><strong>Specification</strong> Recombinable business logic in a Boolean fashion.</li>
                    <li><strong>State</strong><a href="#note-2" className="sup">2</a> Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.</li>
                    <li><strong>Strategy</strong><a href="#note-2" className="sup">2</a> Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.</li>
                    <li><strong>Template method</strong><a href="#note-2" className="sup">2</a> Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.</li>
                    <li><strong>Visitor</strong><a href="#note-2" className="sup">2</a> Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.</li>
                </ul>
                <h3>Concurrency patterns</h3>
                <ul>
                    <li><strong>Active Object</strong> Decouples method execution from method invocation that reside in their own thread of control. The goal is to introduce concurrency, by using asynchronous method invocation and a scheduler for handling requests.</li>
                    <li><strong>Balking</strong> Only execute an action on an object when the object is in a particular state.</li>
                    <li><strong>Binding properties</strong> Combining multiple observers to force properties in different objects to be synchronized or coordinated in some way.</li>
                    <li><strong>Block chain</strong> Decentralized way to store data and agree on ways of processing it in a Merkle tree, optionally using Digital signature for any individual contributions.</li>
                    <li><strong>Double-checked locking</strong> Reduce the overhead of acquiring a lock by first testing the locking criterion (the 'lock hint') in an unsafe manner; only if that succeeds does the actual locking logic proceed. Can be unsafe when implemented in some language/hardware combinations. It can therefore sometimes be considered an anti-pattern.</li>
                    <li><strong>Event-based asynchronous</strong> Addresses problems with the asynchronous pattern that occur in multithreaded programs.</li>
                    <li><strong>Guarded suspension</strong> Manages operations that require both a lock to be acquired and a precondition to be satisfied before the operation can be executed.</li>
                    <li><strong>Join</strong> Join-pattern provides a way to write concurrent, parallel and distributed programs by message passing. Compared to the use of threads and locks, this is a high-level programming model.</li>
                    <li><strong>Lock</strong> One thread puts a "lock" on a resource, preventing other threads from accessing or modifying it.</li>
                    <li><strong>Messaging design pattern (MDP)</strong> Allows the interchange of information (i.e. messages) between components and applications.</li>
                    <li><strong>Monitor object</strong> An object whose methods are subject to mutual exclusion, thus preventing multiple objects from erroneously trying to use it at the same time.</li>
                    <li><strong>Reactor</strong> A reactor object provides an asynchronous interface to resources that must be handled synchronously.</li>
                    <li><strong>Read-write lock</strong> Allows concurrent read access to an object, but requires exclusive access for write operations.</li>
                    <li><strong>Scheduler</strong> Explicitly control when threads may execute single-threaded code.</li>
                    <li><strong>Thread pool</strong> A number of threads are created to perform a number of tasks, which are usually organized in a queue. Typically, there are many more tasks than threads. Can be considered a special case of the object pool pattern.</li>
                    <li><strong>Thread-specific storage</strong> Static or "global" memory local to a thread.</li>
                </ul>
                <div className="footnote" id="note-1">1) The examples are solely for illustrational purposes</div>
                <div className="footnote" id="note-2">2) These patterns are found in Head First: Design Patterns</div>
            </div>
        </section>
                    <Footer/>
                </div>
            </div>
        </div>
    </main>);
}

export default Blog;
