import Head from 'next/head';
import { Footer, Menu, Code } from '../../Components';
import '../_scss/common.scss';

    
const codeString_1 = `SELECT      *
FROM        table_a AS a
CROSS JOIN  table_b AS b`;

const codeString_2 = `SELECT      *
FROM        table_a AS a
LEFT JOIN   table_b AS b
    ON      a.id = b.id;`;

const codeString_3 = `SELECT      *
FROM        table_a AS a
RIGHT JOIN  table_b AS b
    ON      a.id = b.id;`;

const codeString_4 = `SELECT      news.title,
            news.content,
            comments.title,
            comments.content,
            comments.news_id,
            users.name
FROM        comments
LEFT JOIN   news
    ON      comments.news_id = news.id
LEFT JOIN   users
    ON      news.user_id = user.id
LEFT JOIN   comments.user_id = user.id;`;

const codeString_5 = `SELECT          *
FROM            table_a AS a
LEFT JOIN       table_b AS b
    ON          a.id = b.id
WHERE           b.id = NULL;`;

const codeString_6 = `SELECT          *
FROM            table_a AS a
RIGHT JOIN      table_b AS b
    ON          a.id = b.id
WHERE           a.id = NULL;`;

const codeString_7 = `SELECT          *
FROM            table_a AS a
INNER JOIN      table_b AS b
    ON          a.id = b.id;`;

const codeString_8 = `SELECT          *
FROM            table_a AS a
FULL OUTER JOIN table_b AS b
    ON          a.id = b.id;`;

const codeString_9 = `SELECT          *
FROM            table_a AS a
FULL OUTER JOIN table_b AS b
    ON          a.id = b.id
WHERE           a.id = NULL
    OR          b.id = NULL;`;

const codeString_10 = `SELECT          *
FROM            table_a AS a
WHERE           id = (

                    SELECT          id
                    FROM            table_b AS b
                );`;

const codeString_11 = `SELECT          *
FROM            news
WHERE           extract(year FROM date_time) = date('Y');`;

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
            <img className="avatar" src="../images/tutorials/sql-joins.png" alt="Avatar"/>
            <div className="article">
                <h1>SQL Joins</h1>
                <h2>Introduction</h2>
                <p>
                    I always had trouble using JOINS in SQL, but the images below and the queries make things a lot 
                    more clear. There are five types of JOINS: INNER, OUTER, LEFT, RIGHT and FULL. Because 
                    LEFT JOIN and RIGHT JOIN are essentially the same, I won't use RIGHT JOIN in this article. To 
                    make code more readable, a RIGHT JOIN will be used in the real world, also in a query with multiple 
                    JOINS this can come in handy. Other types are OUTER LEFT JOIN or OUTER RIGHT JOIN, which are 
                    equivalent to resp. LEFT JOIN or RIGHT JOIN. And INNER LEFT JOIN or INNER RIGHT JOIN which 
                    both are equivalent to INNER JOIN.
                </p>
                <h2>Cross Join</h2>
                <img src="/images/tutorials/sql-joins_cross_join.png" alt="Cross Join" style={{backgroundColor: '#aaa'}}/>
                <p>
                    For starters a CROSS JOIN, you have to be careful with this JOIN, because it results in a 
                    &nbsp;<a href="https://en.wikipedia.org/wiki/Cartesian_product">Cartesian product</a> between the tables. 
                    Every record of table_a is linked to every record of table_b. If both tables have 2 records, it 
                    results in 4 records, but if table_a has 1.000 records and table_b 10.000 records, it results in 
                    10.000.000 records of which, in most cases, a lot of records are filtered afterwards. The diagram 
                    is empty, because essentially there is no relation between the tables.
                </p>
                <Code input={codeString_1} language="sql" />
                <h2>Left and Right Join</h2>
                <img src="/images/tutorials/sql-joins_left_join.png" alt="Left Join" style={{backgroundColor: '#aaa', marginRight: '10px'}}/>
                <img src="/images/tutorials/sql-joins_right_join.png" alt="Right Join" style={{backgroundColor: '#aaa'}}/>
                <p>
                    A piece of example code, in which table_a points to a in the image and table_b points to b. This 
                    can be used to show replies to a news post. In the example queries I use the ON clause. USING 
                    can be used too. <code>ON a.id = b.id</code> becomes <code>USING (id)</code>. One condition is 
                    that the columns share the same name, in the result set only one id column appears, where there's 
                    two in the ON. Mostly id of one table matches sub_id in the other, so the use of USING is a lot harder.
                </p>
                <Code input={codeString_2} language="sql" />
                <Code input={codeString_3} language="sql" />
                <p>
                    In most cases the name of the author of a news post is acquired from the user table, which leads to 
                    3 JOINS in this code.
                </p>
                <Code input={codeString_4} language="sql" />

                <h2>Left and Right Join</h2>
                <p>
                    With the exception of overlapping records
                </p>
                <img src="/images/tutorials/sql-joins_left_outer_join.png" alt="Left join B-Key Is NULL" style={{backgroundColor: '#aaa', marginRight: '10px'}}/>
                <img src="/images/tutorials/sql-joins_right_outer_join.png" alt="Right join A-Key Is NULL" style={{backgroundColor: '#aaa'}}/>
                <p>
                    This query can be used when you want to match all news posts which don't have any replies, or when 
                    the author is anonymous.
                </p>
                <Code input={codeString_5} language="sql" />
                <Code input={codeString_6} language="sql" />
                <h2>Inner Join</h2>
                <img src="/images/tutorials/sql-joins_inner_join.png" alt="Inner Join" style={{backgroundColor: '#aaa'}}/>
                <p>
                    This query can be used when you want to match all users who are logged in at least once, if logins 
                    are logged in a log table.
                </p>
                <Code input={codeString_7} language="sql" />
                <h2>Outer Join</h2>
                <img src="/images/tutorials/sql-joins_outer_join.png" alt="Outer Join" style={{backgroundColor: '#aaa'}}/>
                <Code input={codeString_8} language="sql" />

                <h2>Outer Join</h2>
                <p>
                    With the exception of overlapping records
                </p>
                <img src="/images/tutorials/sql-joins_full_outer_join.png" alt="Outer join Key Is NULL" style={{backgroundColor: '#aaa'}}/>

                <Code input={codeString_9} language="sql" />

                <h2>Subqueries</h2>
                <p>
                    Another way to join tables are subqueries, JOIN isn't used explicitly. Almost all databases support 
                    this, also MySQL version 4.1 and above. In this article I won't describe these subqueries, apart from 
                    a small example, which gains the same results as a LEFT JOIN.
                </p>
                <Code input={codeString_10} language="sql" />
                <p>
                    In certain databases, like PostgreSQL, you can't do a lot without subqueries. Date or time fields are 
                    like data-objects, just like a table. In the query below all news posts of the current year are displayed:
                </p>
                <Code input={codeString_11} language="sql" />
            </div>
        </section>
                    <Footer/>
                </div>
            </div>
        </div>
    </main>);
}

export default Blog;
