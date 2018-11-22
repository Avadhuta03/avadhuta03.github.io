---
layout: post
title: Installing Arch Linux
categories: Linux
---
<h3>Installation of Arch Linux on hard drive from a live media. </h3>  
<ol>
<li>Connect to the Internet <br>
    wireless: wifi-menu <br> 
    ethernet: systemctl start dhcpcd   
</li>

<li>
   Partition the disk in suitable partition type:<br> cfdisk <br> mkfs.ext4 /dev/sda? <br> 
   Make one of the partitions available for swap: mkswap /dev/sda? && swapon /dev/sda?<br>
</li> 
<li>Mount the partition for root to /mnt directory: mount /dev/sda? /mnt </li> 
<li>Install the base package: pacstrap /mnt base<br> 
Also install the required packages if/for wifi connection: pacstrap -S wpa-supplicant dialog</li>
<li>Generate filesystem table(fstab): fstab -U /mnt >>/mnt/etc/fstab</li> 
<li>chroot: arch-chroot /mnt </li>
<li>set password for root: passwd</li>
<li>create initial ramdisk environment: mkinitcpio -p linux</li>
<li>install boot loader: pacman -S grub</li> 
<li>install grub on hard-drive(sda): grub-install /dev/sda</li>
<li>generate main conf. file : grub-mkconfig -o /boot/grub/grub.cfg<br>*if other OS are availabe, mount the specific partitions first. </li> 
<li>Check for additional information on install.txt in home directory.</li>     

</ol>




