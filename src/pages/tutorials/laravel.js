import Head from 'next/head';
import { Footer, Menu, Code } from '../../Components';
import '../_scss/common.scss';

const codeString_1 = `passwd
root
adduser swimmer
apt-get install nginx
systemctl enable nginx.service

apt-get install mariadb-server mariadb-client
mysql_secure_installation`;

const codeString_2 = `Enter current password for root (enter for none): Just press the Enter
Set root password? [Y/n]: Y
New password: Enter password
Re-enter new password: Repeat password
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y`;

const codeString_3 = `systemctl restart mariadb.service
apt install php-fpm php-common php-mbstring php-xmlrpc php-soap php-gd php-xml php-mysql php-cli php-mcrypt php-zip

nano /etc/php/7.0/fpm/php.ini

# Edit file
    memory_limit = 256M
    upload_max_filesize = 64M
    cgi.fix_pathinfo = 0
# /Edit file`;

const codeString_4 = `apt install vsftpd ftp
nano /etc/vsftpd.conf

# Edit file
    write_enable = YES
# /Edit file

systemctl restart vsftpd`;

const codeString_5 = `curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

cd /var/www
composer create-project laravel/laravel swimmer --prefer-dist`;

const codeString_6 = `nano /etc/nginx/sites-available/laravel

# Edit file
    server {
        listen 80;
        listen [::]:80;
        root /var/www/public;
        index  index.php index.html index.htm;
        server_name  laravel.swimmer.zone;

        location / {
            try_files $uri $uri/ /index.php?$query_string; 
               }

        location ~ .php$ {
             try_files $uri = 404;
             fastcgi_split_path_info  ^(.+.php)(/.+)$;
             fastcgi_index            index.php;
             fastcgi_pass             unix:/var/run/php/php7.1-fpm.sock;
             include                  fastcgi_params;
             fastcgi_param   PATH_INFO       $fastcgi_path_info;
             fastcgi_param   SCRIPT_FILENAME $document_root$fastcgi_script_name;
        }
    }
# /Edit file

ln -s /etc/nginx/sites-available/laravel /etc/nginx/sites-enabled/

systemctl restart nginx.service`;

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
            <img className="avatar" src="../images/tutorials/laravel.png" alt="Avatar"/>
            <div className="article">
                <h1>Laravel</h1>
                <p><em>This is a first concept of this post, updates are pending</em></p>
                <h2>Table of contents</h2>
                <ul>
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#web-server">Web Server</a></li>
                    <li><a href="#ftp-server">FTP Server</a></li>
                    <li><a href="#laravel-project">Laravel Project</a></li>
                </ul>
                <h2 id="introduction">Introduction</h2>
                <p>
                    I set up a new VPS, this time with Laravel as framework and composer. Instead of Apache, I thought 
                    let's try Nginx now.
                </p>
                <h2 id="web-server">Web Server</h2>
                <p>
                    So, let's begin with a couple of commands to set up the LEMP stack on the VPS, I chose for a VPS 
                    based on Debian:
                </p>
                <Code input={codeString_1} language="bash" />
                <p>At this point a couple of questions need to be answered:</p>
                <Code input={codeString_2} language="bash" />
                <p>Restart MariaDB server and install PHP:</p>
                <Code input={codeString_3} language="bash" />
                <h2 id="ftp-server">FTP Server</h2>
                <Code input={codeString_4} language="bash" />
                <h2 id="laravel-project">Laravel Project</h2>
                <p>Install composer and create a Laravel project:</p>
                <Code input={codeString_5} language="bash" />
                <p>Update the virtual host and restart Nginx:</p>
                <Code input={codeString_6} language="bash" />
            </div>
        </section>
                    <Footer/>
                </div>
            </div>
        </div>
    </main>);
}

export default Blog;
