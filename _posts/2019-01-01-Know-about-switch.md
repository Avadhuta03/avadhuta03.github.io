---
layout: post
title: Know About Switch 
description: 
categories: [Computer Network]
comments: true
image: com_net.png 
---
A small local area Computer Network comprises of two or more different electronic devices(nodes) that are able to communicate with each other for the transimission of data or infromation, to and  from each other.

<!--continue-->
There are devices like router and switch, that has its own operating system and protocols embedded into it, whose primary function is to facilitate the communication between the nodes in the network.


<h3>Switch<hr></h3>
<p>
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
Collision Domain: It is an ethernet term used for network segment in which all the devices response to the packet out in the segment, usually leading to collisions.Each port on Switch creates separate collision domains on a single broadcast domain.<br>


</p>


<h3>Accessing Cisco IOS CLI</h3>

<p>Cisco calls the Operating System , Internetwork Operating System (IOS). The IOS defines interface for humans called  Command Line Interface (CLI) which allows the user to use a terminal emulation program, which accepts text entered by the user.</p>

<p>The switch CLI can be accessed through three popular methods—the console, Telnet, and Secure Shell (SSH)</p>

  <h4><u>With Console Connection</u></h4>

  <p>After the PC is physically connected to the console port, a terminal emulator software package must be installed and configured on the PC.The emulator must be configured to use the PC’s serial port to match the settings on the switch’s console port settings. The default console port settings on a switch are as follows.

  <ul>
    <li>9600 bits/second</li>
    <li>No hardware flow control</li>
    <li>8-bit ASCII</li>
    <li>No parity bits</li>
    <li>1 stop bit</li>
  </ul>
   <span>Note that the last three parameters are referred to collectively as 8N1</span>

 </p>


 <h4><u>With Telnet and Secure Shell (SSH)</u></h4>
 <p>Terminal emulators support a variety of TCP/IP applications as well, including Telnet and SSH. Telnet and SSH both allow the user to connect to another device’s CLI, but instead of connecting through a console cable to the console port, the traffic flows over the same IP network that the networking devices are helping to create.</p>






<h4>Lets know about the user modes in the router and swtich settings:</h4>
<table>
<tr><th><b>Modes Name</b></th><th><b>Prompt Used</b></th><th><b>Description</b></th></tr>
<tr><td>User (EXEC) Mode </td><td>></td><td>only simple commands like ping can be executed</td></tr>
<tr><td>Privilege Mode(Enable Mode)</td><td>#</td><td>router settings can be accessed, administrative mode, Example, show, reload</td></tr>
<tr><td>Global Configuration Mode</td><td>(config)#</td><td>settings like hostname,password.</td></tr>
<tr><td>Console Line Configuration Mode</td><td>(config-line)#</td><td>settings like console password</td></tr>
<tr><td>Interface Configuration Mode</td><td>(config-if)#</td><td>settings interfaces like IP address</td></tr>
<tr><td>VLAN</td><td>(VLAN)#</td><td>setting vlan number</td></tr>
<tr><td>Router Configuration Mode</td><td>(config-router)#</td><td>settings for routing protocols</td></tr> 
</table>

<h4><u>Password Security for CLI Access from the Console</u></h4>

<pre>
  >enable                               //enter enable mode from exec mode
  switch#                               // in enable mode

  switch#show running-config            // list all configurations
  switch#configure terminal            //enters global configuration mode from privileged (enable) mode

  switch(config)#enable secret hello    //sets password 'hello' to access enable mode
  switch(config)#line vty 0 15         //enters line VTY line configuration mode from global configuration mode
  switch(config-line)#exit              //exits to global configuration mode

  switch(config)#vlan 1                 //enters vlan mode from configuration mode
  switch(config-vlan)#exit              //exits vlan mode

  switch(config)#line console 0          //enters console line configuration mode from global configuration mode
  switch(config-line)#login
  switch(config-line)#password hello    //sets password for accessing console 
</pre>


<h4><u>Storing Switch Configuration Files</u></h4>
<p>
  RAM : used for working memory and running configuration files ( filename : running-config )<br>
  Flash : used for storing cisco IOS images <br>
  ROM : stores bootstrap program that loads IOS to RAM   <br>
  NVRAM : Non Volatile RAM is used for storing initial or startup configuration file ( filename : startup-config )
</p>


<h4><u>Copying and Erasing Configuration File</u></h4>
<pre>
switch#copy running-config startup-config   //overwrites the current startup-config filewith what is currently in the
                                                  running-configuration file
switch#write erase                          //erases startup-config file
switch#erase startup-config                 //erases startup-config file
switch#reload                        //running-config can be erased by first erasing the startup-config and reloading
</pre>




<br>


<p>
 <h3>LAN Switching Concepts</h3>


 <h4><u>Switching Logic</u></h4>
 <ul>
   <li>Based on destination MAC address, forward a frame or filter(discard) a frame</li>
   <li>Prepare to forward frames by learning MAC address by examining the source MAC address of each frame received by the switch </li>
   <li>Prepare to forward only one copy of the frame to the destination by creating a (layer 2) loop-free environment with other switches by using Spanning Tree Protocol(STP)</li>
 </ul>


 <table>
   <u>Ethernet Frame Format</u>

   <tr><th>Preamble    </th><th>Start of Frame Delimiter (SFD)  </th><th>MAC destination</th><th>MAC Soucrce </th><th>EtherType</th><th>Payload</th><th>Frame Check Sequenct(FCS)</th></tr>
   <tr><th>7 octets</th><th>1 octet</th><th>6 octets</th><th>6 octets</th><th>2 octets</th><th>46 - 1500 octets</th><th>4 octets</th></tr>
 </table>


 <h4><u>Learning MAC address</u></h4>

 <p>If a frame enters a switch and the source MAC address is not in the MAC address table, the switch creates the address on the table. The table entry also lists the interface from which the frame arrived. </p>


 <h4><u>Flooding unknown Unicast and Broadcast Frames</u></h4>

 <p>The frame whose destination address is unknown to the switch is unknown unicast. In the beginning, when there is no matching entry on the table, the switch forwards copies of the frame out all interfaces (except the incoming interface). This process is called flooding.

<br>
 When flooding occurs, the switches in the network send reply, allowing the switch to learn the MAC address and forwrad the frame out at one port in the future as a unicast frame.

 </p>

 <h4><u>Avoiding Loops using STP </u></h4>

 <p>With physically redundant links, the flooded frames would loop in ethernet network for indefinite period of time.   To prvent this loop, Layer 2 switches uses Spanning Tree Protocol (STP) that blocks some ports from forwarding frames so that only one active path exists between any pair of LAN segments. STP causes each interface on a switch to be in either a blocking state ( cannot send or receive data frames) or a forwarding state (can send and receive data frames) </p>

</p>



<p>
  
<h3>Verifying and Analyzing Ethernet Switches</h3>

<p>By default settings, switches are ready to forward frames. These settings are : 
  <ul>
    <li>The interfaces are enabled by default, ready to start working once a cable is connected.</li>
    <li>all interfaces are assigned to VLAN 1 </li>
    <li>10/100 and 10/100/1000 interfaces use autoneogiation by default</li>
    <li>the MAC learning, flooding, forwarding logic all works by default</li>
    <li>STP is enabled by default</li>
  </ul>

</p>  

<pre>
  switch#show mac address-table              // lists all known MAC address in the MAC address table
  switch#show mac address-table dynamic      // lists all dynamically learned MAC address only
  switch#erase startup-config                // erase the startup-cofig file
  switch#delete vlan.dat                     // deletes VLAN configuration details
  switch#reload                              // reloads the switch
  switch#configure terminal                  // enters global configuration mode from enable mode
  switch(config)#hostname SW1                // changes hostname to SW1
  SW1(config)#no ip domain-lookup            // disables the use of default broadcast in network domain server
  SW1(config)#exit                           // back to enable mode

  SW1#show interface status                  // lists all the interfaces with their status
  SW1#show interfaces  f0/1 status           // lists the status of f0/1 interface
  SW1#show interfaces f0/1                   // lists the detailed sets of messages about the interface
  SW1# show interfaces f0/1 counters         // lists statistics about incoming and outgoing frames on the interface
</pre>


<h4><u>Finding entries in the MAC address table</u></h4>
The MAC address table uses content-addressable memory(CAM), a physical memory that has great table lookup capabilities.
<pre>
  SW1# show mac address-table dynamic address 1111.2222.3333   //searches specified mac address in table list
  SW1# show mac address-table  interface fa 0/1                //shows mac address of specific interface
  SW1# show mac address-table dyanmic vlan 1                   // shows mac address related to vlan

  SW1# show mac address-table aging-time              
  SW1# show mac address-table count

  SW1# clear mac address-table dynamic vlan 1                 //clears the mac address related to VLAN 1
  SW1# clear mac address-table dynamic interface fa 0/1       //clears the mac address related to the interface
  SW1# clear mac address-table dynamic address 1111.2222.3333   //clears specified mac address
</pre>

</p>
   

<p>
  <h3>Securing the switch CLI</h3>

  <h4><u>Securing User Mode and Privileged Mode with Simple Passwords</u></h4>
  <pre>
    SW1# configure terminal              //enters global config. mode
   
    !securing access to enable mode
    SW1(config)# enable secret hello     //sets password hello

    !securing line console with password
    SW1(config)# line console 0          //enters console config. mode
    SW1(config-line)# password world     //sets 'world' as console password 
    SW1(config-line)# login              //enables the simple password for console
    SW11(config-line)# exit              //back to global config. mode

    !securing switch with Telnet Access
    SW1(config)# line vty 0 15           // enter vty config. mode for all 16 vty lines
    SW1(config-line)# password passme    // sets password 'passme'
    SW1(config-line)# login              // implements password for telnet access
    SW1(config-line)# end                // back to global config.line 
  </pre>


  <h4><u>Securing User Mode Access with local username and password</u></h4>
  <pre>
    SW1(config)# username testuser secret testpass   //creates localuser 'testuser' with pass 'testpass'

    !implementing the console access
    SW1(config)# line console 0
    SW1(config-line)# login local                  //enable the console to prompt for both username and password
    SW1(config-line)# no password                 // remove existing shared simple password

    !implementing the telnet access
    SW1(config)# line vty 0 15
    SW1(config-line)# login local
    SW1(config-line)# no password
  </pre>

  <h4><u>Securing User Mode Access with External Authentication Servers</u></h4>
  <span>Most Switches and Routers uses Authenication, Authorization and Accounting (AAA) Server like in IT login functions. This reduces the overhead of storing and updating username/password pair individually on switches.</span>


  <h4><u>Securing Remote Access with Secure Shell</u></h4>
  <pre>
    switch#configure terminal
    switch(config)#hostname SW1
    SW1(config)#ip domain-name test.com   //configure FQDN for the switch
    SW1(config)# crypto key generate rsa    // or crypto key generate rsa modulus modulus-value
    SW1(config)# ip ssh version 2           //ovewrite the defualt supporting version 1 and 2

    !to control which protocols switch supports on vty lines
    SW1(config)# line vty 0 15
    SW1(config-line)# transport input ssh    // support only ssh ! default is all(telent and ssh)

    !show ssh status
    SW1# show ip ssh
    SW1# show ssh
  </pre>

</p>


<h3>Enabling IPv4 for Remote Access</h3>
<p>
  The switch has multiple ethernet ports. Instead of assigining its management IP address to each ports, it uses NIC like concep called a Switch Virtual Interface(SVI) or a VLAN interface that acts like switch's own NIC. <br>
  By default, all ports are assigned to VLAN 1. One should not try to use VLAN interface for which there are no physical ports. If assigned, the VLAN interface will not reach an up/up state and switch will not be able to communicate outside the switch. <br>

  Configuring the IP address (and mask) on one VLAN interface allows the switch to send and receive IP packets with other hosts in a subnet that exists on that VLAN; however, the switch cannot communicate outside the local subnet without another configuration setting called the default gateway.

  <h4><u>Configuring IPv4 on a Switch</u></h4>
  <pre>
    switch#configure terminal
    switch(config)#interface vlan 1
    switch(config-if)#ip address 192.168.1.100 255.255.255.0
    switch(config-if)#no shutdown
    switch(config-if)#exit
    switch(config)#ip default-gateway 192.168.1.1
  </pre>


  <h4><u>Configuring a Switch to Learn Its IP Address with DHCP</u></h4>
    <pre>
    switch#configure terminal
    switch(config)#interface vlan 1
    switch(config-if)#ip address dhcp          //when DHCP server is on the network
    switch(config-if)#no shutdown
    switch(config-if)#exit
    switch(config)#ip default-gateway 192.168.1.1
  </pre>


  <h4><u>Verifying IPv4 on a Switch</u></h4>
  <pre>
    switch#show running-config
    switch#show interfaces vlan 1   //shows detailed information on VLAN number 1
    switch#show dhcp lease          //see the (temporarily) leased IP address and other parameters.
    switch#show ip default-gateway   //show the default gateway
  </pre>

  <h4><u>History Buffer Commands</u></h4>
  <pre>
    switch#show history               //lists the commands currently held in the history buffer.
    switch#terminal history size x    //allows a single user to set, just for this one login session, the size of 
                                        history buffer.
    switch(config-line)#history size x   // sets the default number of commands saved in the history buffer
  </pre>

  <h4><u>Other useful commands</u></h4>
  <pre>
    swtich(config)#no ip domain-lookup       //disables default DNS lookup
    switch(config)#no logging console           //disables syslog messages
    
    switch(config-line)#exec-timeout 0 0     //minute second 0 0 makes interface never timeout when idle
    switch(config-line)#logging synchronous    //display syslog messages only at more convenient times
  </pre>
</p>