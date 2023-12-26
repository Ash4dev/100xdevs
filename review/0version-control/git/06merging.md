# Merging
- incorporate changes from 1 branch to other
- important notes:
    1. we merge branches, *not commits*
    2. always merge to current HEAD branch
- process:
    - move to receiving branch
    - git merge branch_name
    - # master now points at the new branch tip

# Types of Merge
1. *fast forward merge* (simplest):
    - catches up with the other branch
    - gets access to work from branch(not deleted)
    - visually: https://youtu.be/VkSvbRRr9AM?si=S7WobzaOkYTXgnkM&t=420
2. *merge* (master moved ahead of when we started)
    - create merged node with 2 parents (user recursive strategy)
    - master and head are on the merged node
    - visually: https://youtu.be/VkSvbRRr9AM?si=EypPIEf-q1mX0SIx&t=1098
    - # in case of no conflicts
3. *conflict merge* (move ahead disrupting on what we did)
    - need to resolve conflict manually(auto fail)
    - conflicts shown in conflict markers
        - conflict between ====== && >>>>>
    - delete unneeded component
