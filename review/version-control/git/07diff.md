# Find the difference
- shows changes bwn commits, branches, files, directories over time
- changes represented as chunks(not show all source code):
    - headers @@ -line x extract y lines, line a extract b lines @@
    - green(in new), red(in old)
- multiple chunks can exist in a file
- git diff: only unstaged changes
    - compares working dir & stage area
    - once committed no difference
    - can restrict to individual files, compare branches/commits
        - git diff b1/c1..b2/c2 (.. not necessary)
    Commands:
    1. git diff HEAD: all changes since last commit
        - compares working dir to HEAD
        - changes still visible after commit
    2. git diff --staged or git diff --cached
        - changes between stage area and last commit
- ////////**last commit**//////**stage area**//////**current status**
-         ---------------------------------------------------------HEAD
-         -----------------------------------STAGED/CACHED
-                               -----------------------------------DIFF
