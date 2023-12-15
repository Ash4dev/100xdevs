# Branching
- enable working in different contexts i.e. work out different even conflicting ideas is parallel
- stay indepenedent untill we *merge* the changes
- default branch(official aka truth i.e. no experiments):
    - git: master
    - github: master to main in 2020
- branches apply to all files and sub-directories
## if not commited/stashed progress is lost/carried: unreliable

# HEAD -> master
- the tip of different branches act like bookmarks
- the current page(loc) we are on is the HEAD

# Commands
- git branch: list all branches (active has *)
- git branch branch_name: create new branch, not switch
    - don't keep spaces in branch name
    - can't create unless not fully committed
    - 2 branch pointers at last head 
        - be careful where you initialize a branch
- git switch branch_name(make sure correct)
    - HEAD points to the new branch now
- git switch -c branch_name (c for create)

# Old (non-atomic)
- git checkout branch_name: switch branches or restore working tree files
    - https://www.grepper.com/answers/319966/git+switch+vs +checkout?ucard=1

# Deleting & Renaming branches
- git branch -d branch_name
    - error: can't delete current branch
    - error: can't delete unmerged brench
        - still use -D (delete force)
- git branch -m branch_name (m for move: like file rename)
    - r is reserved for recursive
    - need to be on that branch

# .git folder
- HEAD contains the relative file path for the history of the current branch
- the file contains the hash of the last commit