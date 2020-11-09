---
layout: post
title : Linux File Permissions
categories: Linux
comments: true
image: linux.png
---

<h4>"Everything is a file", which is one of the definitive features of  UNIX Operating System and its derivatives like Linux.</h4>

<!--continue-->

<h3>Users, Groups and FileOwnership</h3>

<pre>
#whoami     //check current effective id
#id         //chekck which group you are in
#groups     //list the effective groups for current id
</pre>


<p>Every user has an ID and is a member of one primary group. So everyfile in linux has owner and one group associated to it.</p>

<pre>
#ls -l               //list permissions, user, group ... on files and dir. 
#ls -l filename      //details of ownership for mentioned filename
</pre>




<h3>Permissions </h3>

<h5>Permission Groups</h5>

<pre>owner(u), group(g), others(o), all users(a)</pre>

<h5>Permission Types</h5>

<pre>read(r), write(w), execute(x)</pre>

<h5>Ordinary Files : Permission Flag format</h5>

<pre> _rwxrwxrwx 1 owner group

-> first character _ is special permission flag which can vary
-> following set of 3 characters(rwx) is for owner permissions 
-> following second set of 3 characters(rwx)is for group permissions.
-> third set of 3 characters(rwx)is for all users permissions
-> following integer/number displays the number of hard links to the file.
-> the last part is the owner and group assignment as Owner:Group
</pre>


<h5>Directories</h5>
<p>For directories, permission flags are same but interpreted differently.</p>
<ul>
<li>Read permission for a directory allows a user with that permission to list the contents of the directory.</li>
<li>Write permission means a user with that permission can create or delete files in the directory.</li>
<li>Execute permission allows the user to enter the directory and access any subdirectories.</li>
	
</ul>

<p>**Without read permission, user can still access the directory contents with known full path</p>




<h5>FileSystem Objects</h5>
<table>
	<tr><th>Code</th><th>Object</th></tr>
	<tr><td>-</td><td>Regular File</td></tr>
	<tr><td>l</td><td>Symbolic link</td></tr>
	<tr><td>c</td><td>Character special devicce</td></tr>
	<tr><td>b</td><td>Block special devicce</td></tr>
	<tr><td>p</td><td>FIFO</td></tr>
	<tr><td>s</td><td>Socket</td></tr>
</table>

<h5><u>The eleventh character</u></h5>
<p>The eleventh character in the long listing <b>ls -l </b> command in recent distributions specifies whether an alternate access method applies to the file. If it's a space, there is no alternate access method. When it's a printing character, there is alternate method to access. GNU ls uses a ‘.’ (dot) character to signify a file with only an SELinux security context. Files with any other combination of alternate access methods are marked with the ‘+’ (plus) character. </p>


<h3>Changing Permissions</h3>

<h4><u>Adding Permission</u></h4>
<p>Using <b>chmod</b> with +x for execute, +r for read and  +w for write permissions.</p>

<pre>
#echo 'echo "Hello World!"' > hello.sh   //creates executable shell script
#ls -l hello.sh                          //list permissions.. for the script
-rw-r--r--  .....
#./hello.sh                              //executes the file
bash: ./hello.sh: Permission denied

#chmod +x hello.sh                       //adds execute permission to the file
#ls -l hello.sh
-rwxr-xr-x ....
#./hello.sh                              //execute the file
Hello World!
</pre> 

<h4><u>Being Selective while adding permissions</u></h4> 

<p>Using chmod with permissons as above sets permissions to all, users(u), groups(g) and others(o). To be selective, we can prefix the permission mode with u, g  and o. With <b>a</b> sets permissions for all users which is equivalent to ommiting it.</p>                                
<pre>
#echo 'echo "Hello World!"' > hello1.sh   //creates executable shell script
#ls -l hello.sh                           //list permissions.. for the script
-rw-r--r--  .....
#chmod ug+wx hello1.sh                    //sets write and execute permission for user and group
-rwxrwxr--   ......
</pre>



<h4><u>Removing permission</u></h4>
<p>use <b>-</b> instead of <b>+</b> in the permission mode expression</p>

<pre>
#ls -l hello.sh
-rwxr-xr-x ....
#chmod o-rx hello.sh                       //removes execute permission to other users7
#ls -l hello.sh 
-rwxr-x---
</pre>


<h4><u>Setting Permissions</u></h4>
<p>we can use <b>=</b> to set permission instead of - or + . </p>

<pre>
#chmod u=rwx,g=r-x,o= hello.sh    //sets permission
#ls -l hello.sh
-rwxr-x--- 
</pre>



<h4><u>Octal Permissions : Using Binary Refrences</u></h4>

<p>We can use 4 octal digits instead of (ugoa and rwx) to specify permissions. First digit is used for attributes. Second for user permissions, the third digit defines group permissions, and the fourth digit defines other permissions. 
<br>
The desired permission settings can be: read(4), write(2) and execute(1).
<table>
  <tr><th>Symbolic</th><th>Octal</th></tr>
  <tr><td>rwx</td><td>7</td></tr>
  <tr><td>rw-</td><td>6</td></tr>
  <tr><td>r-x</td><td>5</td></tr>
  <tr><td>r--</td><td>4</td></tr>
  <tr><td>-wx</td><td>3</td></tr>
  <tr><td>-w-</td><td>2</td></tr>
  <tr><td>--x</td><td>1</td></tr>
  <tr><td>---</td><td>0</td></tr>
</table>
</p>

<p>

	
<pre>
#chmod 640 filename            
//sets owner has read and write permissions, the group has read permissions,and all other users 
//have no permissions to the file.
</pre>

</p>

<br><br>



<h3>Access Modes</h3>

<p>After login, the new shell process runs with user and group IDs. The program initialized inherits your user id, and so cannot access the filesystem objects which has not been granted access.
<br>
For instanace: /etc/passwd file has write permission enabled only for root. But the normal users need to modify the file while changing their password.
<br>

<h4><u>suid and sgid</u></h4>
There are 2 special access modes in Linux Permission model : set user id (suid) and set group id (sgid).
<br><br>
With suid mode set for an executable file, it will run as if it had been started by the file's owner rather than by the user who really started it.
<br>
With sgid mode set, the progam will run as if the initalizing user belongs to the file's group rather than his won group.
<br><br>
Either or both access modes can be set.
<pre>
#ls -l /etc/passwd
-rwsr-xr-x 1 root root 63640 Feb  4 18:16 /usr/bin/passwd
</pre>
The above file has s in user's permission triplet instead of x. The lower case 's' means suid and executable bit is set for the executable file. If the file is  exectuable file and suid or guid bits are not set, it's displayed as uppercase 'S'.


<h4><u>Setting suid and guid</u></h4>
The suid and sgid bits are set and reset using the letter s.
<br>
For example: 
u+s sets the suid access mode . g-s removes the sgid access mode.
<br>
In the octal format, suid has the value 4 in the first (high order) digit, while sgid has the value 2.
</p>








<br><br><br>

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



