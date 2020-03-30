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
