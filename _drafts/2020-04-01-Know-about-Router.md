



<h3>Router<hr></h3>
Router is a Layer 3(Network Layer) networking device which uses logical addressing(IPv4 or IPv6),connects two or more networks to form internetwork and provides capacities like packet switching, packet filtering using access lists, path selection.<br>
Router don't forward broadcasts by default and they filter the network based on layer 3 information like IP address. <br>
Routers provide a separate broadcast domain for each interface.<br>

<h4>Common Router Settings</h4>
<pre>Router>enable    //user mode to privilege mode; 
Router#disable  //privilege mode to user mode
Router#exit     //exits the router to after-boot state
</pre>



<h4>Privilege(Enable) Mode Commands</h4>
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
