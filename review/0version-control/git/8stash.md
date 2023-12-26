# Saving unfinished changes
- if we try to switch branches before committing, 2 possible  outcomes:
    1. no conflict: changes travel
    2. conflict: warning of losing local changes
        - need to commit or stash changes

# Commands
- git stash save: save changes(staged/unstaged) that are not ready to be committed in a vector(due to possible conflict maybe)
    - revert changes in the working directory
    - don't fill it up a lot(1 fine)
- git stash pop: remove most recently stashed changes and reapply to working copy.
- git stash apply: apply stash top without removing it
- git stash list: check all the stashes
    - git stash apply stash@{id}
    - git stash drop stash@{id}