# Centralized Workflow (not scalable)
- all work done by collaborators on a single branch
- lot of conflicts, disturb codebases  

# Feature Branches
- main is the ultimate source of truth
- merge work(however tiny) on other branches, to main
    - fetch the changes to origin
    - collaborate on the helper branch
    - commit updates to it & push changes to that branch on GH
    - if passes tests, merge with master
        - merge access with experienced devs only
        - send pull requests to these guys
- delete helper branch

# Pull Requests (PR)
- not native to Git: alert others to review work
- cannot push changes to branches that are protected

# Forking
- not native feature of Git 
- create a personal repo of the project repo (not same as clone)
    - origin is for repo in my account, not the original 
- reference tracker is that of the parent repo
- workflow: fork, clone your repo, make changes to repo, pull PR with changes  
    - origin: forked repo, upstream: parent repo (to pull changes)
    - pull from parent repo, push changes to forked repo, send PR to parent repo
- benefit no need to add individual contributors