---
layout: post
title : Linux File Permissions
categories: Linux
---

<h5>Permission Groups</h5>
<pre>owner(u), group(g), others(o), all users(a)</pre>

<h5>Permission Types</h5>
<pre>read(r), write(w), execute(x)</pre>

<h5>Command line format example</h5><pre> _rwxrwxrwx1owner:group
-> first character _ is special permission flag which can vary
-> following set of 3 characters(rwx) is for owner permissions 
-> following second set of 3 characters(rwx)is for group permissions.
-> third set of 3 characters(rwx)is for all users permissions
-> following integer/number displays the number of hard links to the file.
-> the last part is the owner and group assignment as Owner:Group
</pre>
<h5>Modifying permissions using <b>chmod</b><pre>chmod a+rw filename 
//adds read and write permissions from the all users group.
</pre>

<h5>Using Binary Refrences</h5><pre> r=4, w=2, x=1
chmod 640 filename //owner has read and write permissions, the group has write permissions,
and all other users have no rights to the file.</pre>


<h5>Owners and Groups</h5><pre>chown owner:group filename 
example: chown user1:kali filename
//changes the owner of filename to user1 and the group to kali</pre>

<h5> Advanced Permissions</h5>
Special permission flag can be marked with following:
<pre> _ -> no special permission
d ->directory
l ->file or directory is a symbolic link
s -> setuid/setgid permissions, represented in the read portion of the owner or group permissions. 
t -> sticky bit sermissions, represented in the executable portion of the all users permissions.  
</pre>



