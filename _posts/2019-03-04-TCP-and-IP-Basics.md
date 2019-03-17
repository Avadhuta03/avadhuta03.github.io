---
layout : post
title : Basics of  TCP/IP 
description: TCP/IP protocol is at the core of computer netwoking as we know today.
categories: [Computer Network]
image:
---
TCP/IP is at the core of computer netwoking as we know today. TCP/IP standards are checked against certain criteria to maintain its integrity and ensure that any dramatic changes are not made and proprietary features are not added. This open apporach makes it most reliable and thus, popular.<br>
<!--continue-->
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