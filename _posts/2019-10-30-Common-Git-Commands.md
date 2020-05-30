---
layout: post
title: Basics of Git
categories: [Git VCS]
comments: true
image: git.png
---


Git is a Distributed Version Control System. It has different approach to handling data(versions of software) than most other VCS, which includes ways like, Creating Snapshots,
<!--continue-->
 Local Availability of Operations, use of SHA-1 hash mechanism for higher integrity, using 3 states to track files namely; Modified, Staged and Committed. 


<h3>Git Installation & Initialization</h3>
 <pre>
 git init   // initializes git repository in desired folder, technically adds .git directory
</pre>


<h3>Git Remote</h3>

<pre>
git remote  //show your remote
git remote -v   //show your remote with stored URLs

git clone --url   //clones the remote repository
git remote         // shows your remote "origin" by default

git remote add --remote_name --url  //add remote_name other than default 'origin' explicitly

git fetch --remote   //fetches all the data from remote... ** it doesn't merge any data
git fetch origin     //fetches data from the default remote 'origin'

git pull     //fetches data from the remote and tries to merge work in the currnet branch

git push --remote_name --branch_name   //shares the changes to upstream
git push origin master   //by default cloning of repository, changes are pushed to remote named origin and branch named master

git fetch       //multiple users working on same repository branch may need to first fetch to incorporate the changes made 
git push 

git remote show --remote_name   //additional information about branches in remote can be inspected

git remote rename --current_remote_name --new_name   //changes all remote-tracking branches name

git remote remove --remote_name   //all remote-tracking branches and configuration is destroyed along with remote

<h5>Error: refuged to merge unrelated histories ; is caused when new repository was created without cloning.</h5>
git pull origin master --allow-unrelated-histories

</pre>



<h3>Git Branching and Merging</h3>
<pre>
git branch [branch name]  //creates a branch
git checkout [branch name]  //switches to the branch
git checkout -b [branch name] //creates and switches to the new branch 

git checkout master  //switch to main branch --> required while merging

git merge [branch name]  //merge the branch to the master	
git branch -d [branch name]   //deletes the branch

<h5># Merge conflict occurs if same part of same file is changed in diffrent branches. In such case,
 git pauses the merge( creating unmerged paths) to be resolved and adds conflict-resolution markers 
 to the files that have conflicts; <<<<<<< , ========  and  >>>>>>>> . Sections above and below =======
 represents diffrent versions of same file in different branches. After replacing proper section and
erasing the markers, the file is staged to mark as resolved.
</h5>


git status    // check status of unmerged paths
git mergetool   // fires up default visual merge tool
git add [filename]       // stage the conflcted file to mark as resolved
git status     // to verify everything that had conflicts has been merged
git commit     // finalizes the merge commit
</pre>


<h3>Git Commit</h3>
<pre>
git reset --soft HEAD~1   //undo last commit while keeping changes

git reset --hard HEAD~1   //undo last commit and removes the changes altogether
</pre>