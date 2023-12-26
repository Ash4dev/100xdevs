# Repository
- workspace that tracks and manages files in a folder
- git repos are like countries(own laws: history)

# Getting and Creating Projects (https://git-scm.com/docs)
- git status: info of current status of repo contents in commit workflow
- git init: create new git repository(once/project, in top level project folder)
    - .git folder created (hidden files start with .)
    - if we rm -rf then history lost (be careful)
    - # DON'T INIT A REPO IN A REPO (check with git status before init)
        - https://github.com/swcarpentry/git-novice/issues/272#issuecomment-220706756

# Basic Snapshotting

## Commit
- each checkpoint/snapshot is a git commit(group save)
- multi-step process: work on stuff -> add changes(selectively) -> commit
    - working dir - git add > staging area - git commit > repository
    - git add: git add f1 f2 ... OR git add . 
        - (good practice: grp similar together)
        - make sure to save file before adding
        - if file is modified, need to first add it and then commit 
    - git commit:  need to include a good descriptive commit message
        - vim: prompt message in vim
        - inline: git commit -m  message (starter friendly)
- if successful, working tree becomes clean