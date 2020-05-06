---
layout: post
title : Using Bitcoin in Linux
categories: BlockChain
comments: true
image: 
description:
---


Bitcoin is the digital cryptocurrency system that uses blockchain technology. Digital currencies: E-cash, E-gold, WebMoney and many more were there before cryptocurrency, but due to the need for a central authority to be involved and manage trust to the system, any faliure such as bankruptcy or being held by authorites could simply create financial nightmare.
<!--continue-->
<br>
Thankfully, the progress of cryptography and the emergence of some clever solutions such as proof of work (for example, the hashcash Project—see http://hashcash.org) brought hope of breaking the deadlock.
<br><br>
Bitcoin, the new currency effectively harnessed cryptography techniques to manage ownership and to secure the system—hence the name cryptocurrency.



<h3>Running a bitcoin client for the first time</h3>
<p>A bitcoin client is the end-user software that allows us to perform bitcoin operations (sending transactions, receiving payments, and so on).

<br>2 common clients are: Bitcoin Core and Electrum

<u>Installing Bitcoin Core</u>
<pre>
--wget https://bitcoincore.org/bin/bitcoin-core-0.15.2/bitcoin-0.15.2-x86_64-linux-gnu.tar.gz
--sudo install -m 0755 -o root -g root -t /usr/local/bin bitcoin-0.15.2/bin/*
</pre>

<u>Installing Electrum: a lightweight wallet</u>
--sudo pacman -S electrum
</p>

<pre>	
bitcoin-cli -datadir=/mnt/.bitcoin/  createrawtransaction "[{\"txid\":\"d8f27e16e568aa1175d737bf0fcdac0c5c863f6911ed7b7a8bfd19016afb4ed6\",\"vout\":0}]" "{\"data\":\"48656c6c6f20576f726c64\",\"3F6H6zs5h25oxyUqGmvDJ7eooF7fWJMXam\":1.0000000}"

/output
0200000001d64efb6a0119fd8b7a7bed11693f865c0caccd0fbf37d77511aa68e5167ef2d80000000000ffffffff0200000000000000000d6a0b48656c6c6f20576f726c6400e1f5050000000017a91492ffdfc826c231d49b114b6f7c2fd4a29271c9cc8700000000
</pre>


<h4>Decode the RawTransaction</h4>
<pre>
--bitcoin-cli -datadir=/mnt/.bitcoin/ decoderawtransaction [HEX VALUE]

or

--electrum --testnet deserialize [HEXVALUE]
</pre>



<h3>Signing the Transaction</h3><hr>

<pre>
//generate the private key
--electrum --testnet listaddresses | electrum --testnet  getprivatekeys -

//Retrieve the transaction from the blockchain --> getting scriptpubkey
--electrum 

</pre>


