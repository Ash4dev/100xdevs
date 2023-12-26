# Remote Tracking Branches
- when we clone repo from Github, we get 2 pointers:
    1. regular bramch reference: pointer to default branch on the github repo (movable by me)
    2. remote tracking reference: pointer to last know commit on the default branch of Github repo (not movable by me)
        - <remote_name>/<branch_name>: state of branch_name branch on remote repo named remote_name
        - git branch -r: view remote tracking references
- when we make commits on the cloned default branch, we diverge from remote tracker
    - eg. x commit ahead of <remote_name>/<branch_name>
    - to check original use: git checkout <remote_name>/<branch_name> (detached head now), return back to a branch to get out of detached head state
    - push changes to github: git push <remote_name> <branch_name>

# Multiple remote branches
- when we try to git clone repository, with multiple branches we only receive the default branch in our workspace
    - however, we receive the different remote tracking branches
    - checkout leads to detached head state
- SOLUTION: simply switch <branc_name>
    - creates local branch from the remote branch of the same name & tracks the remote branch <remote_name>/<branch_name>

# Fetching & Pulling (2a.png)
//workspace////staging(index)/////localrepo////remoterepo
-> -> ->  git add -> -> -> git commit -> git push
<- <- <- <- <- <- <- <- <- <- <- <- <- <- git fetch
<- <- <- <- <- <- <- <- git pull <- <- <- <- <- <- <-

# Fetching(get latest information)
- download changes from remote repo, but not reflected in working files without having to merge into our working files
    - git fetch <remote_name> <branch_name>
        - empty: fetch from origin all branches
        - <remote_name>/<branch_name> updates its location to the new commits on the said branch
        - eg. your branch is behind <remote_name>/<branch_name> by x commit

# Pulling
- updates HEAD to whatever changes are retreived from remote 
    - combination of git fetch & git merge
- git fetch <remote_name> <branch_name>
    - fetch info from branch_name & merge it into **current branch we are on** 
        - may lead to merge conflict    
            - *before pushing files to github, make sure to pull changes onto the repo to stay upto date*
- not recommended if we have uncommited changes