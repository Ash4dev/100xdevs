# Rebasing
- use carefully 
- functions:
    1. alternative to merging
    2. cleaning tool

# Merge alternative
- if not fast forward, lot of redudant merges
- rebasing alters the history such that the entire feature branch begins at the tip of the default branch (re-written history)
    - git switch feature
    - git rebase master (on master)
- linearize: fewer commits to deal with
    - don't rebase if anyone else is also working on the branch

# Need to add more content as needed (tags, reflogs, custom aliases)