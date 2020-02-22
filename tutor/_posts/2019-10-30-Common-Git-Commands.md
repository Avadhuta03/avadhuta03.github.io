---
layout: post
title: Basics of Git
categories: Other
image: git.png
---


Git is a Distributed Version Control System. It has different approach to handling data(versions of software) than most other VCS, which includes ways like, Creating Snapshots,
<!--continue-->
 Local Availability of Operations, use of SHA-1 hash mechanism for higher integrity, using 3 states to track files namely; Modified, Staged and Committed. 


<h3>Git Installattion & Initialization</h3>
 <pre>
 git init   // initializes git repository in desired folder, technically adds .git directory
</pre>


<h3>Git Branching and Merging</h3>
<pre>
git branch [branch name]  //creates a branch
git checkout [branch name]  //switches to the branch
git checkout -b [branch name] //creates and switches to the new branch 

git checkout master  //switch to main branch *necessary when merging a branch
git merge [branch name]  //merge the branch to the master
	
git branch -d [branch name]   //deletes the branch

<h5># Merge conflict occurs if same part of same file is changed in diffrent branches. In such case,
 git pauses the merge( creating unmerged paths) to be resolved and adds conflict-resolution markers 
 to the files that have conflicts; <<<<<<< , ========  and  >>>>>>>> . Sections above and below =======
 represents diffrent versions of same file in different branches. After replacing proper section and
erasing the markers, the file is staged to mark as resolved.</h5>
git status    // check status of unmerged paths
git mergetool   // fires up default visual merge tool
git add [filename]       // stage the conflcted file to mark as resolved
git status     // to verify everything that had conflicts has been merged
git commit     // finalizes the merge commit
</pre>