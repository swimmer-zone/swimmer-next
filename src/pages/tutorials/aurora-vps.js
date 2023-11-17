import Head from 'next/head';
import { Back, Code, Tutorials } from '../../Components';
import './_scss/tutorials.scss';

const codeString_1 = `su - root
# Enter password twice to login as root
apt-get install pure-ftpd
groupadd pureftpd
useradd -g pureftpd -d /var/www yftp
chown yftp /var/www
passwd yftp
# Enter password twice for the FTP account`;

const codeString_2 = `apt-get install php5`;

const codeString_3 = `apt-get install phppgadmin
su - postgres

psql template1

ALTER USER postgres WITH PASSWORD '***';
CREATE USER ysql WITH PASSWORD '***';
CREATE DATABASE ysql_nl;
GRANT ALL PRIVILEGES ON DATABASE ysql_nl TO ysql;`;

const codeString_4 = `su - root

find / -name "pg_hba.conf"
nano /etc/postgresql/9.1/main/pg_hba.conf

# FILE ########################
    # Database administrative login by Unix domain socket
    local   all     postgres                            peer
    # TYPE  DATABASE  USER  ADDRESS  METHOD
    # "local" is for Unix domain socket connections only
    local   all     all                                 trust
    # IPv4 local connections:
    host    all     all     127.0.0.1/32                trust
    # IPv6 local connections:
    host    all     all     ::1/128                     trust
    host    all     ysql    127.0.0.1/32                trust
    host    system  system  127.0.0.1 255.255.255.255   md5
###############################

find / -name "postgresql.conf"
nano /etc/postgresql/9.1/main/postgresql.conf

# FILE ########################
    listen_addresses = 'localhost'
    # If you want to let other users login on the server, 
    # you can enter the server ip, or '*'
###############################`;

const codeString_5 = `nano /etc/apache2/conf.d/phppgadmin

# Remove comment character "allow from all"

/etc/init.d/apache2 restart

nano /etc/phppgadmin/config.inc.php

# FILE ########################
    $conf['extra_login_security'] = false;
###############################`;

const codeString_6 = `# Example configuration:

# FILE ########################
    <virtualhost *:80>
        ServerAdmin webmaster@localhost
        # ServerName www.swimmer.zone

        DocumentRoot /var/www
        <directory>
            Options FollowSymLinks
            AllowOverride None
        </directory>
        
        <directory "/var/www">
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Order allow,deny
            allow from all
        </directory>

        ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
        <directory "/usr/lib/cgi-bin/">
            AllowOverride None
            Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
            Order allow,deny
            Allow from all
        </directory>

        ErrorLog /var/log/apache2/error.log

        # Possible values include: debug, info, notice, warn, error, crit,
        # alert, emerg.
        LogLevel warn

        CustomLog /var/log/apache2/access.log combined

        Alias /doc/ "/usr/share/doc/"
        <directory "/usr/share/doc">
            Options Indexes MultiViews FollowSymLinks
            AllowOverride None
            Order deny,allow
            Deny from all
            Allow from 127.0.0.0/255.0.0.0 ::1/128
        </directory>
    </virtualhost>
###############################

# Symlink:
ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/rewrite.load

/etc/init.d/apache2 restart`;

const codeString_7 = `apt-get install phpsysinfo

mkdir /var/subdomains/phpsysinfo.swimmer.zone
cd /usr/share/phpsysinfo
cp -rf * /var/subdomains/phpsysinfo.swimmer.zone`;

const codeString_8 = `crontab -e

# FILE ########################
55 * * * * php /var/www/execute.php
###############################`;

const codeString_9 = `apt-get install postfix
# Internet site as configuration
# swimmer.zone as hostname

# controle:
telnet localhost 25

nano /etc/postfix/main.cf

# FILE ########################
    myhostname = mail.swimmer.zone
    mydomain = swimmer.zone

    inet_protocols = ipv4
    inet_interfaces = all
    mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain
    mynetworks = 127.0.0.0/8
    home_mailbox = Maildir/
    myorigin = $mydomain
    mynetworks_style = host
    smtpd_sasl_auth_enable = yes
    smtpd_sasl_local_domain =
    smtpd_recipient_restrictions = permit_mynetworks,permit_sasl_authenticated,reject_unauth_destination
    smtpd_sasl_security_options = noanonymous
    smtpd_tls_security_level = may
    smtpd_tls_loglevel = 1
    smtpd_tls_session_cache_timeout = 3600s
    smtpd_tls_session_cache_database = btree:/var/spool/postfix/smtpd_tls_cache
    smtpd_tls_auth_only = no
    smtpd_delay_reject = yes
    smtpd_helo_required = yes
    smtpd_hard_error_limit = 20
    smtpd_tls_mandatory_ciphers = high
    # broken_sasl_auth_clients = yes
    # tls_random_source = dev:/dev/urandom
    # default_destination_concurrency_limit = 5
    # disable_vrfy_command = yes
    # queue_directory = /var/spool/postfix
    # mail_owner = postfix
    # data_directory = /var/lib/postfix
    # header_checks = regexp:/etc/postfix/header_checks
    # body_checks = regexp:/etc/postfix/body_checks
    virtual_alias_maps = hash:/etc/postfix/virtual
###############################

# nano /etc/postfix/body_checks

# FILE ########################
    # /^(|[^>].*)example.com/ REJECT
###############################

# nano /etc/postfix/header_checks

# FILE ########################
    # /^From:.*<#.*@.*>/ REJECT
    # /^Return-Path:.*<#.*@.*>/ REJECT
###############################

nano /etc/postfix/virtual

# FILE ########################
    ****@swimmer.zone swimmer
    ****@swimmer.zone root
###############################

postmap /etc/postfix/virtual

/etc/init.d/postfix restart

# Create system users and directory for e-mails
useradd -m swimmer-s /sbin/nologin
passwd swimmer

mkdir /home/swimmer/Maildir
chown swimmer /home/swimmer/Maildir
chmod -R 700 /home/swimmer/Maildir`;

const codeString_10 = `apt-get install dovecot-common
# apt-get install dovecot-imapd
apt-get install dovecot-pop3d
apt-get install dovecot-lmtpd

nano /etc/dovecot/dovecot.conf

# FILE ########################
    # Protocols we want to be serving.
    protocols = pop3 lmtp # imap
###############################

nano /etc/dovecot/conf.d/10-auth.conf

# FILE ########################
    disable_plaintext_auth = no
    auth_mechanisms = plain login
###############################

nano /etc/dovecot/conf.d/10-mail.conf

# FILE ########################
    mail_location = maildir:~/Maildir
###############################

nano /etc/dovecot/conf.d/10-master.conf
# find that section and make it look like:

# FILE ########################
    # Postfix smtp-auth
    unix_listener /var/spool/postfix/private/auth {
        mode = 0666
        user = postfix
        group = postfix
    }
###############################

/etc/init.d/dovecot restart`;

const codeString_11 = `apt-get install roundcube-pgsql
apt-get install roundcube

mkdir /var/subdomains/roundcube.swimmer.zone
cd /usr/share/roundcube
cp -rf * /var/subdomains/roundcube.swimmer.zone

nano /etc/roundcube/main.inc.php

# FILE ########################
    $rcmail_config['default_host'] = 'localhost';
    $rcmail_config['default_port'] = 110;
    $rcmail_config['imap_auth_type'] = NULL;

    $rcmail_config['smtp_server'] = 'mail.swimmer.zone';
    $rcmail_config['smtp_port'] = 25;
    $rcmail_config['smtp_user'] = '****@swimmer.zone';
    $rcmail_config['smtp_pass'] = '********';
###############################

nano/etc/roundcube/debian-db.php

# FILE ########################
    $dbuser = 'roundcube';                                                      
    $dbpass = '********';                                                      
    $basepath = '';                                                           
    $dbname = 'roundcube';                                                   
    $dbserver = '';                                                         
    $dbport = '';                                                          
    $dbtype = '';
###############################`;

const codeString_12 = `dovecot -n

# FILE ########################
    mail_location           = maildir:/var/mail/%d/%n
    protocols               = imap pop3
    listen                  = *

    mail_uid                = mailnull
    mail_gid                = mail
    first_valid_uid         = 26
    first_valid_gid         = 6
    last_valid_uid          = 0
    last_valid_gid          = 0

    log_path                = syslog
    syslog_facility         = mail
    auth_mechanisms         = plain
    auth_socket_path        = /var/run/dovecot/auth-userdb

    auth_debug              = yes
    auth_debug_passwords    = yes
    auth_verbose            = yes
    verbose_proctitle       = yes
    mail_debug              = yes
    log_path                = /var/log/dovecot.log
    info_log_path           = /var/log/dovecot-deliver.log

    mail_plugin_dir         = /usr/local/lib/dovecot
    postmaster_address      = postmaster@%d
    hostname                = %d
    sendmail_path           = /usr/local/sbin/exim
    lda_mailbox_autocreate  = yes
    lda_mailbox_autosubscribe = yes

    passdb {
        driver        = passwd
        #args          = /etc/passwd
    }

    userdb {
        driver        = passwd
        args          = /etc/passwd
    }

    protocol lda {
    }

    protocol pop3 {
        pop3_client_workarounds = outlook-no-nuls oe-ns-eoh
    }

    protocol imap {
        mail_plugins            = quota imap_quota antispam
        imap_client_workarounds = delay-newmail tb-extra-mailbox-sep tb-lsub-flags
    }
    ## - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    service auth {
        unix_listener auth-userdb {
            mode        = 0600
            user        = $mail_uid
            group       = $mail_gid
        }
    }

    service imap-login {
        inet_listener imap {
            port        = 143
        }
        inet_listener imaps {
            port        = 993
            ssl         = yes
        }
    }

    service pop3-login {
        inet_listener pop3 {
            port        = 110
        }
        inet_listener pop3s {
            port        = 995
            ssl         = yes
        }
    }
###############################`;

const codeString_13 = `# To the directory /usr/share/javascript/jquery-ui, first make sure there's
# no symlink pointing to this, then you may create the target directory:
rm /var/subdomains/roundcube.swimmer.zone/plugins/jqueryui
mkdir /var/subdomains/roundcube.swimmer.zone/plugins/jqueryui
cp -rf * /var/subdomains/roundcube.swimmer.zone/plugins/jqueryui

# Then go to /usr/share/javascript/jquery
rm /var/subdomains/roundcube.swimmer.zone/programs/js
mkdir /var/subdomains/roundcube.swimmer.zone/programs/js
cp -rf * /var/subdomains/roundcube.swimmer.zone/programs/js

# And /usr/share/tinymce/www
rm /var/subdomains/roundcube.swimmer.zone/programs/js/tiny_mce
mkdir /var/subdomains/roundcube.swimmer.zone/programs/js/tiny_mce
cp -rf * /var/subdomains/roundcube.swimmer.zone/programs/js/tiny_mce`;

const Blog = () => {

	return (<main>
        <Head>
            <title>Swimmer ♬ Tutorials</title>
        </Head>
        <Back/>
        <Tutorials/>
        <section className="tutorial">
            <img className="avatar" src="../images/tutorials/aurora-vps.png" alt="Avatar" />
            <div className="article">
                <h1>Aurora VPS</h1>
                <h2>Table of Contents</h2>
                <ul>
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#web-server">Web Server</a>
                        <ul>
                            <li><a href="#ftp-server">FTP Server</a></li>
                            <li><a href="#php">PHP</a></li>
                            <li><a href="#phppgadmin">PHPpgAdmin</a></li>
                            <li><a href="#apache-config">Apache Config</a></li>
                            <li><a href="#phpsysinfo">PHPSysInfo</a></li>
                            <li><a href="#cronjobs">Cronjobs</a></li>
                        </ul>
                    </li>
                    <li><a href="#mail-server">Mail Server</a>
                        <ul>
                            <li><a href="#postfix">Postfix</a></li>
                            <li><a href="#dovecot">Dovecot</a></li>
                            <li><a href="#roundCube">RoundCube</a></li>
                        </ul>
                    </li>
                    <li><a href="#to-conclude">To Conclude</a></li>
                </ul>
                <h2 id="introduction">Introduction</h2>
                <p>
                    This article describes the setup of a server on the new Aurora cloud. After creating an instance, 
                    you can mount an image to a virtual setup disk, I chose the Debian 7 (Wheezy) image. When 
                    installing, you can choose between a couple of templates. I chose Webserver; SQL-server; Fileserver 
                    and system components. The fileserver didn't seem to be necessary, because first off we have to 
                    install an FTP server. Then we can upload the files of the website.
                </p>
                <p>
                    I've never installed a mail server before, so this part can contain some inconsistencies. I'll use 
                    <em>swimmer.zone</em> as default domain, evidently this has to be substituted with your domain, 
                    just like the rest of this article. It may be useful to restart the server between operations, to 
                    see errors right away, when you can still use them.
                </p>

                <h2 id="web-server">Web Server</h2>
                <p>
                    I wrote this article, because the setup of a web server can take a lot of time, mostly because every 
                    component has its own configuration files which have to be edited. Some may easily drown in this pile 
                    of information, just like myself. So I wrote it mostly for myself as some sort of documentation of the 
                    needed steps. It was a small effort to write this in a <em>wiki</em>-like shape for this tutorial. 
                    Installing a web server is not a frequent task, so it's easy to forget.
                </p>
                <h3 id="ftp-server">FTP Server</h3>
                <p>
                    Setting up an FTP server, add an user and give this user permissions to write the right directories. 
                    The files can't be uploaded yet though, they won't be interpreted as PHP files but as plain text, so 
                    sensitive data can be released.
                </p>
                <Code input={codeString_1} language="bash" />
                
                <h3 id="php">PHP</h3>
                <p>
                    So now we install PHP, to parse the files the right way. Now we can upload the PHP files. Because we 
                    chose the Web server and SQL server in the pre-install, Apache and PostgreSQL are already installed. 
                    PHP automatically installs its dependencies to PostgreSQL.
                </p>
                <Code input={codeString_2} language="bash" />

                <h3 id="phppgadmin">PHPpgAdmin</h3>
                <p>
                    To add and administrate databases, we install PHPpgAdmin as a web interface for PostgreSQL. Then we 
                    log in on the postgres console to add an user.
                </p>
                <Code input={codeString_3} language="bash" />
                <p>
                    Ctrl+D to leave the postgres console. Because we are still logged in as user 'postgres', we have to 
                    return to user 'root' to execute the next steps. Now we have to find a couple of configuration files 
                    and add or edit the following lines:
                </p>
                <Code input={codeString_4} language="bash" />
                <p>
                    It's possible you get a 403 page when trying to login on 
                    <a href="https://[ip address]/phppgadmin/">https://[ip address]/phppgadmin/</a> so we're going to 
                    prevent that:
                </p>
                <Code input={codeString_5} language="bash" />

                <h3 id="apache-config">Apache config</h3>
                <p>
                    In Apache we use different virtual hosts, these can be spread out in different files, if they are in 
                    the <code>sites-enabled</code> directory. You can find this in <code>/etc/apache2</code>. In our 
                    <code>.htaccess</code> files, <em>Rewrite Engine</em> is used, so we have to enable this in 
                    <code>mods-enabled</code>. The files are already available in the <code>mods-available</code> 
                    directory, so we only have to create a <em>symlink</em>.
                </p>            
                <Code input={codeString_6} language="bash" />
                
                <h3 id="phpsysinfo">PHPSysInfo</h3>
                <p>
                    To monitor our system through a web interface, we install PHPSysInfo and create a <em>symlink</em> to 
                    make it available to the outside:
                </p>
                <Code input={codeString_7} language="bash" />
                
                <h3 id="cronjobs">Cronjobs</h3>
                <p>
                    For optional cronjobs I use a single PHP file that's executed every hour. In the PHP file is 
                    determined which tasks have to be executed at that given time.
                </p>
                <Code input={codeString_8} language="bash" />

                <h2 id="mail-server">Mail server</h2>
                <p>
                    To make our VPS function as a mail server, we have to install three packages, first Postfix for the 
                    SMTP protocol. Then Dovecot for the POP3 protocol and then RoundCube to access our e-mail through a 
                    web interface. This is still experimental, so it wouldn't hurt to make a snapshot of the system, 
                    when this option is available.
                </p>

                <h3 id="postfix">Postfix</h3>
                <p>
                    Installation of Postfix, for this a couple of configuration files have to be edited. Some of the 
                    lines have to be added and if a file doesn't exist already, it has to be created. At the end, 
                    <code>virtual.db</code> has to be edited or created and Postfix has to be restarted.
                </p>
                <Code input={codeString_9} language="bash" />
                
                <h3 id="dovecot">Dovecot</h3>
                <p>
                    Install Dovecot and again, edit some configuration files:
                </p>
                <Code input={codeString_10} language="bash" />

                <h3 id="roundCube">RoundCube</h3>
                <p>
                    First the pgsql package to prevent Roundcube from installing MySQL as a dependency.
                </p>
                <Code input={codeString_11} language="bash" />

                <p>
                    Setting up a mail server brought me a lot of trouble, so while debugging, it's possible I forget 
                    documenting some of the steps. Below a couple of steps which may be useful. In 
                    <code>/var/log/roundcube/errors</code> errors can be found and these can lead to 
                    <code>/var/log/auth.log</code>, <code>/var/log/mail.log</code>, <code>/var/log/dovecot.log</code> 
                    or <code>/var/log/dovecot-deliver.log</code>. The last one and the second last one have to be added 
                    to <code>/etc/dovecot/dovecot.conf</code>. A summary of all configuration lines you can view with 
                    <code>dovecot -n</code>, my current setup is like this, pay special attention to the 
                    <code>auth_debug</code> section.
                </p>            
                <Code input={codeString_12} language="bash" />

                <p>
                    The settings above can help prevent the following notices: 
                    <code>IMAP Error. Wrong startup greeting (localhost:110)</code> (this can mean not the right 
                    listeners are configured). <code>IMAP Error. AUTHENTICATE PLAIN: Authentication failed.</code> 
                    (this one I solved by editing userdb and passdb). The last error I haven't been able to trace yet: 
                    <code>IMAP Error. Empty startup greeting (localhost:110)</code>.
                </p>
                <p>
                    Some problems can appear with Roundcube, because we copied the Roundcube directory to the web root. 
                    Some symlinks can be broken if they point to a relative path. In my case jQuery, jQuery UI and 
                    TinyMCE couldn't be loaded:
                </p>
                <Code input={codeString_13} language="bash" />
                <p>
                    After following the steps above it has to be possible to login, though not the right identities are 
                    installed yet. So it's only possible to login as ****@localhost. 
                </p>
                <h2 id="to-conclude">To Conclude</h2>
                <p>
                    If we've executed all these steps, we have a working web server with PHP and PostgreSQL and maybe a 
                    mail server with protocols incoming and outgoing e-mail and a web interface to make it accessible. 
                    I think it's always a good idea to make a snapshot in an initial state when everything works as it 
                    should.
                </p>
            </div>
        </section>
    </main>);
}

export default Blog;
