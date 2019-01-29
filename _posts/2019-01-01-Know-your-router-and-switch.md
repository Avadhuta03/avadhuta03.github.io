---
layout: post
title: Getting to Know  About  Router and Switch
categories: [Computer Network]
image: com_net.png 
---
A small local area Computer Network comprises of two or more different electronic devices(nodes) that are able to communicate with each other for the transimission of data or infromation, to and  from each other.

<!--continue-->
There are devices like router and switch, that has its own operating system and protocols embedded into it, whose primary function is to facilitate the communication between the nodes in the network.

<h3>Router<hr></h3>
Router is a Layer 3(Network Layer) networking device which uses logical addressing(IPv4 or IPv6),connects two or more networks to form internetwork and provides capacities like packet switching, packet filtering using access lists, path selection.<br>
Router don't forward broadcasts by default and they filter the network based on layer 3 information like IP address. <br>
Routers provide a separate broadcast domain for each interface.<br>
<h4>To configure router using CLI, lets know about the user modes in router settings:</h4>
<table>
<tr><td><b>Modes Name</b></td><td><b>Prompt Used</b></td><td><b>Description</b></td></tr>
<tr><td>User Mode</td><td>></td><td>only simple commands like ping can be executed</td></tr>
<tr><td>Privilege Mode</td><td>#</td><td>router settings can be accessed, administrative mode</td></tr>
<tr><td>Global Configuration Mode</td><td>(config)#</td><td>settings for router like hostname,password.</td></tr>
<tr><td>Interface Configuration Mode</td><td>(config-if)#</td><td>settings for router's interfaces like IP address</td></tr>
<tr><td>Router Configuration Mode</td><td>(config-router)#</td><td>settings for routing protocols</td></tr> 
</table>

<h4>Common Router Settings</h4>
<pre>Router>enable    //user mode to privilege mode; 
Router#disable  //privilege mode to user mode
Router#exit     //exits the router to after-boot state
</pre>
<h4>Privilege Mode Commands</h4>
<pre>#?      //shows exec commands that can be executed
#show ?     //show the available commands to be used after show, some are
#show flash    //informaion like IOS size and name, memory used, flash memory size
#show interfaces     //information on interfaces and its state
#show interface fastethernet 0/0     //show infromation on fastethernet 0/0
#show ip interface       //checks the implementation of TCP/IP on interface
#show ip interface fastethernet 0/0 
#show version   //shows information like IOS version , DRAM size, NVRAM size etc.
#show protocols   //informs about protocols used and their status in interfaces
#show running-config  //shows the configuration hold by volatile RAM

#copy running-config startup-config  //saves the settings to non-volatile NVRAM,
#configure terminal      //privilege mode --> Global Configuration Mode 
</pre>
<h4>Global Configuration Mode</h4>
<pre>Router(config)#hostname R1     //changes hostname to R1
R1(config)#enable password  abc     //unencrypted password; abc for gaining access to privilege mode
R1(config)#enable secret abc        //encrypted password; abc for access to privelege mode from user mode
R1(config)#no ip domain-lookup    //to disable DNS function that is enabled by default
R1(config)#service password-encryption      //encrypts all the password 

R1(config)#line vty 0 4     //to configure settings for telnet connection for 0 to 4 ports
        R1(config-line)#login
        R1(config-line)#password abc    
        R1(config-line)#exit

R1(config)#line console 0  //to configure settings for console connection
       R1(config-line)#login
       R1(config-line)#password cisco
       R1(config-line)#exec-timeout 0 0   //disables timeout for console connection
       R1(config-line)#exit
</pre>

 <h4>Interface Configuration Mode</h4>
 <pre>
R1(config)#interface fastethernet 0/0   //configures interface fastethernet
R1(config-if)#ip address 172.16.1.200   255.255.255.0
R1(config-if)#no shutdown
 </pre>

 <h4>Few Terminologies</h4>
 <table>
 <tr><td>interface is up </td><td>interface can function as physical layer</td></tr>
 <tr><td>interface is down </td> <td> interface  can't function as physical layer</td></tr>
 <tr><td>administratively down</td><td>interface is in "shutdown" state</td></tr>
 <tr><td>Maximum Transmission Unit  (MTU)</td><td>Amount of IP datagram a device can send at one time.  </td></tr>
<tr><td>BandWidth(BW)</td><td>Unit: kbps</td></tr>
<tr><td>Delay(DLY)</td><td>Unit: usec (microsec)</td></tr>
<tr><td>relaibility</td><td>reliability of interface. [255/255] shows highest reliabilty while [0/255] is the lowest.</td></tr>
<tr><td>tcload,rxload</td><td>state of transmission capacity, receiving capacity of interfaces</td></tr>
<tr><td>encapsulation</td><td>capsulating data link layer of interface, for example LAN interface has 4 types: EthernetII(ARPA) or (HDLC for serial interfaces), SNAP, 802.3Raw(novel-ether),802.2LLC(sap)</td></tr>
</table>

<br>
<h3>Switch<hr></h3>
Switch is a layer 2 (data link layer) networking device. It basically functions as a bridge which is more software oriented while, switch contains ASIC(Application Specific Integrated Circuit) hardware with high performance. Also switch has high port density(number of ports per device) allowing ease of control of network traffic.<br><br>
Switch basically performs 2 functions:
<li><b>Forwarding</b> : When frames arrives in a receiving port, it copies and forwards frames to the available ports except the receiving port.</li>
<li><b>Filtering</b> : Discards frames as per the rule specified</li>
<br>
Frame is data unit formed by adding ethernet header to the packet provided by IP layer.<br>
Forwarding happens in following steps:<br>
<ol>
	<li>Copy receiving port and destination MAC address from receiving frame.</li>
	<li>Send frame from port related to destination MAC address in received frame.</li>
	<li>If the receiving port is the port related to destination MAC address in received frame, discard the frame</li>
	<li>If the receiving port is not the port of destination MAC address, send frames to all the ports except the receiving one(flooding).</li>
</ol>
<br>
<b>Collision Domain</b>: It is an ethernet term used for network segment in which all the devices response to the packet out in the segment, usually leading to collisions.
<br> 
Switches create separate collision domains on a single broadcast domain.<br>
<br>
   
