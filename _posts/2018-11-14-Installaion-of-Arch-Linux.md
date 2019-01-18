---
layout: post
title: How to install Arch Linux with usb  media? 
categories: Linux
image: arch.png
---
Arch  linux is a linux distribution for computers based on x86-64 architectures. This distro of linux is popular for its minimalism, simplicity, code correctness and elegance. The pacakage manager, <i>pacman</i> is used to install, remove and update software packages.

<!--continue-->
<h3>Installation of Arch Linux on hard drive from a live media. </h3>  
<ol>
<li>Connect to the Internet<pre>wireless: wifi-menu
ethernet: systemctl start dhcpcd</pre>   
</li>

<li>
Partition the disk in suitable file system and create swap space
<pre>cfdisk
mkfs.ext4 /dev/sda? /*? number varies */
mkswap /dev/sda? && swapon /dev/sda?</pre>
</li> 

<li>Mount the partition for root to /mnt directory<pre> mount /dev/sda? /mnt</pre>
 </li> 

<li>Install the base package and the required packages like for packages for wifi connection <pre>pacstrap /mnt base 
pacstrap /mnt wpa-supplicant dialog</pre>
</li>

<li>Generate filesystem table(fstab)<pre>fstab -U /mnt >> /mnt/etc/fstab</pre></li> 

<li>chroot<pre>arch-chroot /mnt </pre></li>

<li>set password for root<pre>passwd</pre></li>

<li>create initial ramdisk environment<pre>mkinitcpio -p linux</pre></li>

<li>install boot loader and install grub on hard-drive(sda)
<pre>pacman -S grub 
grub-install /dev/sda</pre>
</li>

<li>if other OS are available in different partitions, mount the partition containing os, download os-prober package and run it to scan.
<pre>os-prober</pre>
</li>

<li>generate grub configuration file to load OS during boot.
<pre>grub-mkconfig -o /boot/grub/grub.cfg</pre></li> 

<li>Check for official offline manual on the file <b>install.txt</b> located in the <b>/root</b> directory. 
 Also available on the internet at <a href="https://wiki.archlinux.org/index.php/installation_guide">arch wiki</a></li>     

</ol>




