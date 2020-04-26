---
layout : post
title : IPv4 Addressing
description: 
categories: [Computer Network]
comments: true
image:
---

 <p>IP address is software address designed to facilitate communication between hosts in different networks. <br>
 Hardware address is hard-coded into NIC card and used for finding hosts on a local network.
 
 <!--continue-->
 <br>
 <br>
  An IPv4 address contains 32 bits divided into 4 sections; 1 byte in each section. It can be represented in Dotted decimal, Binary or Hexadecimal.
  <br> 
 With 32 bits, approximately 4.3 billions (2^32) of unique IP addresses can be formed. 
 <br>
 To address every unique IP address, all routers would need to store address of each and every machine on the internet. This would make efficient routing impossible even if only a fraction of the possible addresses were to be used.
 <br>
 Thus the solution lies on 2 or 3 level of hierarchical addressing scheme; network and host, or network, subnet, and host. 
 

 <h4><u>Classful Network Addressing</u></h4>

 Network address or network number, uniquely identifies each network. Each machine on same network shares same network address.
 <br>
 Node address uniquely identifies a particular machine on a network, as opposed to the network address, which is a group.
 <br> <br>
 
 Based on the network size, classes are created.<br><br>
 
<table>

<tr><th>Class </th><th>Fist bits </th><th>First Octet Values</th><th>Purpose</th></tr>

<tr><td>A </td><td> 0 </td><td> 1-126 </td><td>Unicast (Large Networks)</td></tr>

<tr><td> B </td><td> 10 </td><td> 128 - 191 </td><td>Unicast (Medium Sized Networks)</td></tr>

<tr><td> C </td><td> 110 </td><td> 192 - 223 </td><td>Unicast (Small Networks)</td></tr>

<tr><td> D </td><td> 1110 </td><td> 224 - 239</td><td>Mulitcast</td></tr>

<tr><td> E </td><td> 11110 </td><td> 240 - 255 </td><td>Reserved (Experimental)</td></tr>

</table>



<table>
	
<tr><th></th><th>Class A</th><th>Class B</th><th>Class C</th></tr>

<tr><td>First Octet Range</td><td>1-126</td><td>128-191</td><td>192-223</td></tr>

<tr><td>Valid Network Numbers</td><td>1.0.0.0 - 126.0.0.0</td><td>128.0.0.0 - 191.255.0.0</td><td>192.0.0.0 - 223.255.255.0</td></tr>

<tr><td>Total Networks</td><td>2^(7) - 2 = 126</td><td>2^(14) = 16,384</td><td>2^(21) = 2,097,152</td></tr>

<tr><td>Hosts Per Network</td><td>2^(24) -2 = 16,777,214</td><td>2^(16) - 2 = 65,534</td><td>2^(8) - 2 = 254</td></tr>

<tr><td>Octet (bits) in Network Part</td><td>1(8)</td><td>2(16)</td><td>3(24)</td></tr>

<tr><td>Octet (bits) in Host Part</td><td>2(24)</td><td>2(16)</td><td>1(8)</td></tr>

<tr><td>Default Mask</td><td>255.0.0.0</td><td>255.255.0.0</td><td>255.255.255.0</td></tr>

</table>

<h5>** Network Address begining with 0 and 127 are all reserved</h5>


<h4><u>Reserved Private IP address</u></h4>
<table>
<tr><th>Address Class</th><th>Reserved address space</th></tr>
<tr><td>Class A</td><td>10.0.0.0 ~ 10.255.255.255</td></tr>
<tr><td>Class B</td><td>172.16.0.0 ~ 172.31.255.255</td></tr>
<tr><td>Class C</td><td>192.168.0.0 ~ 192.168.255.255</td></tr>
</table>


</p>


<p>
	
<h4><u>Address formats</u></h4>
Unsubnetted Classful Networks have two structure: Network Part(Prefix) and Host Part. Comparing 2 IP address, we can observe: 
<ul>
	<li>Addressess in the same network have the same values in the newtork part.</li>
	<li>The addressess in the same network has different values in the host part.</li>
</ul>


<h4><u>Default Masks</u></h4>
Each network class has an associated default mask that defines the size of the network and host parts of an unsubnetted Class A, B, and C network.
<br>
The mask lists binary 1s for the bits considered to be in the network part and binary 0s for the bits considered to be in the host part.


<h4><u>Number of Hosts per Network</u></h4>
Each network reserves two numbers that would have otherwise been useful as host addresses but have
instead been reserved for special use: one for the network ID and one for the network broadcast address.
<br>
The number of hosts in a network is not 2^(H) ; instead, it is 2^(H) – 2, where H is the number of host bits.



<h4><u>Deriving the Network ID and Related Numbers</u></h4>
<ul>
<li>Network Number : the numerically lowest number in the network. However, the network number cannot be assigned as an IP address. So, the lowest number in the network is the network ID. </li>

<li>First (numerically lowest) usable address : one larger than the Network Number</li>

<li>Network broadcast address : the highest (last) number in the network</li>

<li>Last (numerically highest) usable address : one less than the network broadcast address </li>

</ul>


<i>Steps to get Information with a IP address</i>
<ol>
	
<li> : Determine the class of the IP address based on the first octet.</li>
<li> : Based on class, divide network and host octets</li>
<li> : Add 1 to the fourth octect of the network ID --> First  numerically lowest usuable IP address </li>
<li> : Change Network ID's host octets to 255  --> Network Broadcast address</li>
<li> : Substract 1 from the fourth octet of the network Broadcast address --> Last numerically highest usable address </li>
</ol>

</p>

<br>
<br>
<br>




<h3>Subnet Masks</h3>

<h4><u>Three Masks Format</u></h4>

<ol>
<li>Binary Format : 	
Subnet masks can be written as 32-bit binary numbers, and should follow the following rules:
<ul>
	<li>The value must not interleave 1s and 0s.</li>
	<li>If 1s exist, they are on the left.</li>
	<li>If 0s exist, they are on the right.</li>
</ul>
For Example : 
<br>
11111111 00000000 00000000 00000000 
<br>
11111111 11111111 11111111 00000000

</li>


<li>Dotted Decimal Notation (DDN) : 
For humans , convert each set of 8 bits into decimal equivalent.
<br>
For example:
<br>
255.0.0.0
<br>
255.255.255.0

</li>

<li>The Prefix Format : Because the subnet masks starts with some number of binary 1s and the rest of the digits are 0s, this format uses slash(/) followed by the number of binary 1s in the binary mask.  Also called Classless Interdomain Routing(CIDR) mask or sometimes slash mask.
<br>
For example: 
<br>
/8
<br>
/24

</li>


</ol>
