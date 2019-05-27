---
layout : post
title : Basics of  TCP/IP 
description: TCP/IP protocol is at the core of computer netwoking as we know today. IP addressinng, Network Addressing, Classful Network Addressing, Special Purpose Network Addresses, Private IP address, Unicast Address, BroadCast Address, MulticastAddress, Layer 2 BroadCasts, Layer 3 Broadcasts
categories: [Computer Network]
image:
---
TCP/IP is at the core of computer netwoking as we know today. TCP/IP standards are checked against certain criteria to maintain its integrity and ensure that any dramatic changes are not made and proprietary features are not added. This open apporach makes it most reliable and thus, popular.<br>
<!--continue-->
<p>
Open System Interconnection(OSI) Model was developed to logically address the characteristics and standarize the communication functions in telecommunication.
There are 4 logical layers [ Process/Application, Transport, Internet, Link ] in original DoD(Department of Defence) Model which is extended to 7 layers in OSI reference model. 


<table>
<tr><th>Name of Logical Layers</th><th>Protocols Implemented</th><th>Functions</th></tr>
<tr><td>1.  Application<br>
2. Presentation<br>
3.  Session</td>
<td>Telnet, FTP, TFTP, SNMP,<br> DHCP, NTP, TSL/SSL, RIP, SSH...</td>
<td>node to node application communication, controls UI specifications</td>
</tr>
 
 <tr>
 <td>4. Transport</td>
 <td>TCP, UDP, ....</td>
 <td>creating reliable end-to-end communication,<br> ensure error-free delivery of data,<br>maintains data integrity, handles packet sequencing</td>
 </tr>

 <tr>
 <td>5. Network</td>
 <td>IP, ICMP, ARP, RARP, ....</td>
 <td>handles addressing of hosts using IP address and  routing of packets among multiple networks</td>
 </tr>
 <tr>
 <td>6.  Data Link<br>
 7. Physical </td>
 <td>ARP,NDP, OSPF, L2TP, PPP, MAC, ....<br>
 Ethernet, FDDI, ...</td>
 <td>oversees hardware addressing and <br>defines protocols for the physical transmission of data</td>
 </tr>
 </table>
</p>
 <h3>IP addressing </h3>
 <p>IP address is software address designed to facilitate communication between hosts in different networks. <br>
 Hardware address is hard-coded into NIC card and used for finding hosts on a local network.
 <br><br>
  An IP address contains 32 bits divided into 4 sections; 1 byte in each section. It can be represented in Dotted decimal, Binary or Hexadecimal. <br>
 With 32 bits, approximately 4.3 billions (2^32) of unique IP addresses can be formed. 
 <br>
 To address every unique IP address, all routers would need to store address of each and every machine on the internet. This would make efficient routing impossible even if only a fraction of the possible addresses were to be used.<br>
 Thus the solution lies on 2 or 3 level of hierarchical addressing scheme; network and host, or network, subnet, and host. 
 

 <h5>Network Addressing</h5>
 Network address or network number, uniquely identifies each network. Each machine on same network shares same network address.<br>
 Node address uniquely identifies a particular machine on a network, as opposed to the network address, which is a group.<br> <br>
 Based on the network size, classes are created.<br><br>
 
 <table>
 <th>Class </th><th>Fist bits </th><th>Network Address Range</th><th>Total Unique Hosts per Network</th>
<tr><td>Class A </td><td> 0 </td><td> 0 - 127 </td><td>2^(24) - 2 = 16,777,214</td></tr>
<tr><td>Class B </td><td> 10 </td><td> 128 - 191 </td><td>2^(16) - 2 = 65534</td></tr>
<tr><td>Class C </td><td> 110 </td><td> 192 - 223 </td><td>2^(8) - 2 = 254</td></tr>
<tr><td>Class D </td><td> 1110 </td><td> 224 - 239</td></tr>
<tr><td>Class E </td><td> 11110 </td><td> 240 - 255 </td></tr>
</table>

</p>