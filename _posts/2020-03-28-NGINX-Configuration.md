---
layout : post
title : NGINX Server
description: 
categories: [Computer Network]
comments: true
image:
---

NGINX [engine x] is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server. 


<!--continue-->
More on <a href="https://nginx.org/en/" target="__blank">nginx webpage</a>

<h4>Verifying Installation</h4>

<pre>
-- nginx -v
-- ps -ef | grep nginx
-- systemctl start nginx
-- curl localhost
</pre>

<h4>Key Files, Commands, and Directories</h4>
<pre>
/etc/nginx/	: The /etc/nginx/ directory is the default configuration root forthe NGINX server.
/etc/nginx/nginx.conf  : The /etc/nginx/nginx.conf file is the default configuration entry point used by the NGINX service
/etc/nginx/conf.d/   : contains the default HTTP server configuration file. Files in this directory ending in .confare included in 
   				the top-level http block from within the /etc/nginx/nginx.conf file.
/var/log/nginx/	: the default log location for NGINX.
</pre>

<h4>NGINX Commands</h4>
<pre>
-- nginx -h                  // prints help menu
-- nginx -v                 // shows the nginx version
-- nginx -V                 // shows the version, build information and config. arguments.
-- nginx -t                 // tests the config.
-- nginx -T                 // tests and prints the validated configuration
-- nginx -s signal         // sends signal to the NGINX master process, signal can be stop, quit, reload  or reopen 
</pre>

<pre>
-- nginx -s reload      //reloads the nginx configuration without dropping packets
</pre>

<h5><u>Serving static content with NGINX</u></h5>
<pre>
server {
	
	listen 80 default_server;
	server_name www.example.com;

	location / {
		root /usr/share/nginx/html;
		# alias /usr/share/nginx/html;
		index index.html index.htm;
	}
}
</pre>