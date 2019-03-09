---
layout: post
title: Arch Linux Installation Guide 
categories: Linux
image: arch.png
---
Arch  linux is a linux distribution for computers based on x86-64 architectures. This distro of linux is popular for its minimalism, simplicity, code correctness and elegance. The pacakage manager, <i>pacman</i> is used to install, remove and update software packages.

<!--continue-->
<h3>Installation of Arch Linux on hard drive from a live media. </h3>  
<ol>
<li>Connect to the Internet<pre>wireless: wifi-menu
ethernet: systemctl start dhcpd</pre>   
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

<br>
<h3>Installing Desktop Environment</h3>
<br>

<ol>
<li>Create user to login other than root with admin privileges
<pre>useradd -m -g users -s /bin/bash user_name
passwd user_name   //set password for the user_name

/*giving admin priveleges requires to update sudoers file in /etc direcory 
if absent, install sudo package with pacman */

pacman -S sudo
vi /etc/sudoers
/*edit sudoers, add the following line; usually under the line,
root ALL=(ALL) ALL 
*/
user_name ALL=(ALL) ALL
</pre>
</li>

<li> Install Display server<pre>pacman -S xorg-server xorg-xinit</pre></li>
<li>Install Graphics driver<pre>pacman -S xf86-video-intel 
	/* install the driver as per your graphics card,
	   amd ---> xf86-xvideo-amdgpu
	   intel --> xf86-video-intel
	   nividea -->xf86-video-nouveau
	*/</pre>
</li>
<li>Install Display Manager<pre>//to install gnome diplay manager
	pacman -S gdm</pre>
</li>

<li>Finally install Desktop Environment and enable it on boot<pre>pacman -S gnome
systemctl enable gdm</pre>
</li>
</ol> 


