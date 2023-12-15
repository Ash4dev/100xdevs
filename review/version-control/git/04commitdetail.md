# Atomic Commits
- commit each feature/change/fix separately
- independent components
    - add . leads to saved state for all or previous state for all
- commit frequency: https://softwareengineering.stackexchange.com/questions/74764/how-often-should-i-do-you-make-commits

# Git Message Pattern
- git recommended: use command like instructions(imperative) to the codebase as commit messages, past tense as made it do
- more descriptive commit messages can be put using text editor (default: nano, change it to VSC)
    - git config --global core.editor "code --wait"

# Logging
- git log --oneline (shows git msg nicely)
    - first line must be descriptive enough & explanation if neede

# Amending Commits (1 commit before only!)
- git add left task
- git commit --amend 
    - remove top node save if just add, else change message to

# Ignore some files
- include those files in .gitignore folder, to avoid git from tracking them
    - secrets, apis, os files, packages & modules etc.
- put it location where .git is present 
    - include the files, folders/, .ext to ignore
- useful tool: https://www.toptal.com/developers/gitignore/
