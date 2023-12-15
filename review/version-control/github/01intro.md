# Github
- cloud host of github repositories, 
- functions: mostly collab tool, backup

# Cloning
- git clone hostURL: retrieves all files and history associated
    - no nested gits!

# Secure Shell Protocol
- helps us to transfer data from one computer to other over unsecured network. 
- 2 components: 
    1. SSH client: contains private key
    2. SSH server: contains public key
- When SSH client requests for connection with SSH server, the server asks the client to solve for a puzzle based on th public key which can only be solved with the knowledge of the private key.

# Creating SSH keys & adding it to GitHub
- https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
- https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

# How to get code on GitHub
1. Existing Repo
    1. create new repo on GH
    2. connect your local repo by adding a remote
        1. tell Git about remote repo on GH (set push destination aka target URL)
        2. git remote add <name> <url>
            1. origin default remote name(alterable)
        3. check remotes using git remote -v(optional)
        4. git remote rename <old> <new>
        5. git remote remove <name>
    3. push up changes to GH
        1. git push <remote> <branch>
            1. mostly master 
2. Start from scratch
    1. create new repo on GH
    2. clone it locally
    3. do some work locally
    3. push changes to GH