---
layout: post
title: Open Short Path First (OSPF) Protocol
category: [Computer Network]
comments: true
image: ospf.png
---
Open Short Path First (OSPF) Protocol is the standarized link state routing protocol.
<!--continue-->



<p>
	<ul>
	<li>Routing Protocol :  A set of messages, rules, and algorithms used by routers for the overall purpose of learning routes. Examples include RIP, EIGRP, OSPF, and BGP. </li>


<li>Routed protocol and routable protocol:  protocol that defines a packet structure and logical addressing, allowing routers to forward or route the packets.  
Examples : IPVersion 4 (IPv4) and IP Version 6 (IPv6)</li>

</ul>
	<h3>Routing Protocol Functions</h3>

   <ol>
   	 <li>Learn routing information about IP subnets from neighboring routers.</li>
   	 <li>Advertise routing information about IP subnets to neighboring routers.</li>
   	 <li>If more than one possible route exists to reach one subnet, pick the best route based on a metric.</li>
   	 <li>Convergence : If the network topology changes—for example, a link fails—react by advertising that some routes have failed and pick a new currently best route.</li>
	</ol>
</p>



<p>
  <h3>Interior and Exterior Routing Protocols</h3>

  <ol>
  		<li>Interior Gateway Protocol (IGP) : A routing protocol that was designed and intended for use inside a single autonomous system (AS). Example: OSPF, EIGRP</li>

  		<li>Exterior Gateway Protocol (EGP) : A routing protocol that was designed and intended for use between different autonomous systems. Example: Border Gateway Protocol(BGP)</li>
  </ol>

<span>Autonomous System (AS) : An AS is a network under the administrative control of a single organization. Each AS can be assigned a number called an AS number (ASN). The IANA controls the worldwide rights to assign ASNs</span>
</p>





<p>
		<h3>IGP Routing Protocol Algorithms</h3>

<span>Three main branches of routing protocol algorithms exist for IGP routing protocols:</span>
<ol>
	<li>Distance vector : Used by Routing Information Protocol in 1980s. Cisco Proprietary Interior Gateway Routing Protocol(IGRP) introduced later</li>

<li>Advanced Distance Vector : Enhanced Interior Gateway Routing Protocol (EIGRP), a cisco proprietary routing protocol, was introduced to address the issues of slow convergence and potential of routing loops. Less planning was required while implementing than the Link-state</li>

<li>Link-state : Link-state protocols—in particular, Open Shortest Path First (OSPF) and Integrated Intermediate System to Intermediate System (IS-IS) were introduced at the same time as EIGRP to address the issues arised by the use of distance vector algorithm. They required more planning, extra CPU and memory on routers</li>
</ol>


<h3>IP IGP Metrics</h3>
<table>
	<tr><th>IGP</th><th>Metric</th><th>Description</th></tr>

   <tr><td>RIPv2</td><td>Hop Count</td><td>The number of routers (hops) between a router and the destination subnet</td></tr>

   <tr><td>OSPF</td><td>Cost</td><td>The sum of all interface cost settings for all links in a route, with the cost defaulting to be based on interface bandwidth</td></tr>

   <tr><td>EIGRP</td><td>Calculation based on bandwidth and delay</td><td>Calculated based on the route’s slowest link and the cumulative delay associated with each interface in the route</td></tr>
</table>

<h3>Interior IP Routing Protocols Comparision</h3>
<table>
<tr><th>Feature</th><th>RIPv2</th><th>EIGRP</th><th>OSPF</th></tr>

<tr><td>Classless/sends mask in updates/supports VLSM</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>

<tr><td>Algorithm (DV, advanced DV, LS)</td><td>DV</td><td>advanced DV</td><td>LS</td></tr>

<tr><td>Supports manual summarization</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>

<tr><td>Routing updates are sent to a multicast IP address</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>

<tr><td>Convergence</td><td>Slow</td><td>Fast</td><td>Fast</td></tr>

<tr><td>Cisco-proprietary</td><td>No</td><td>Yes</td><td>No</td></tr>

</table>

*** Classless routing protocols support variable length subnet masks (VLSM) as well as manual route summarization by sending routing protocol messages that include the subnet masks in the message.

</p>




<p>

<h3>Administrative Distance</h3>

<span>If two or more AS use different routing protocols, and their networks need to connect to each other, they need to exchange some routing information. For example, If one company uses OSPF and the other uses EIGRP on at least one router, both OSPF and EIGRP must be used. Then that router can take routes learned by OSPF and advertise them into EIGRP, and vice versa, through a process called route redistribution.
<br><br>
Because protocols use diffrent metrics, there is no basis of comparision for finding out the best routes. When IOS must choose between routes learned using different routing protocols, IOS uses a concept called administrative distance. 
<br><br>
Administrative distance is a number that denotes how believable an entire routing protocol is on a single router. The lower the number, the better, or more believable, the routing protocol.</span>


<table>
	<h3>Default Administrative Distance</h3>

   <tr><th>Route Type</th><th>Administrative Distance</th></tr>

   <tr><td>Connected</td><td>0</td></tr>

   <tr><td>Static</td><td>1</td></tr>

   <tr><td>BGP (external routes [eBGP])</td><td>20</td></tr>

   <tr><td>EIGRP (internal routes)</td><td>90</td></tr>

   <tr><td>IGRP</td><td>100</td></tr>

   <tr><td>OSPF</td><td>110</td></tr>

   <tr><td>IS-IS</td><td>115</td></tr>

   <tr><td>RIP</td><td>120</td></tr>

   <tr><td>EIGRP (external routes)</td><td>170</td></tr>

   <tr><td>BGP (internal routes [iBGP])</td><td>200</td></tr>

   <tr><td>DHCP default route</td><td>254</td></tr>

   <tr><td>Unsuable</td><td>255</td></tr>

</table>



<pre>
-- show ip route     // lists each route’s administrative distance as the first of the two numbers inside the brackets. 
						The second number in brackets is the metric.

-- ip route 10.1.3.0 255.255.255.0 10.1.130.253 
					//defines a static route with a default administrative distance of 1

-- ip route 10.1.3.0 255.255.255.0 10.1.130.253 210
					//defines the same static route with an administrative distance of 210
</pre>

</p>





<p>
	
<h3>OSPF</h3>

<span>Open Shortest Path First (OSPF), the most popular link-state IP routing protocol, organizes topology information using Link State Advertisements (LSAs) and the link-state database (LSDB). <br>
Each LSA is a data structure with some specific information about the network topology; the LSDB is simply the collection of all the LSAs known to a router.
</span>

<br><br>

<h4>OSPF Process</h4>
<ol>
<li>First, the routers together build a lot of information about the network: routers, links, IP addresses, status information, and so on.</li>

<li>Second, the routers flood the information, so all routers know the same information. At that
point, each router can calculate routes to all subnets, but from each router’s own perspective.</li>

<li>All link state routing protocols uses Dijkstra Shortest Path First (SPF) algorithm, to process LSDB and builds the he routes that the local router should add to the IP routing table—routes that list a subnet number and mask, an outgoing interface, and a next-hoprouter IP address.</li>

</ol>


<br>
<span>OSPF routers accomplish the work of exchanging LSAs and calculating routes in three phases: </span>
<br>
<ol>
 <li>Becoming Neighbors : A relationship between two routers that connect to the same data link, created so that the neighboring routers have a means to exchange their LSDBs.</li>

 <li>Exchanging Databases : process of sending LSAs to neighbors so that all routers learn the same LSAs. </li>

 <li>Adding the best routes : each router independently running SPF, on their local copy of the LSDB, calculating the best routes, and adding those to the IPv4 routing table</li>

</ol>

</p>





