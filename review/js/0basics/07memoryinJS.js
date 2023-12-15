let favTeam = "Arsenal";
let newfavTeam = favTeam;
// newfavTeam = favTeam; works as well
newfavTeam = "Tottenham";
console.table([favTeam, newfavTeam]);

// favTeam remains unchanged (as copy of it given to newfavTeam)

let u1 = {
    name: "raj",
    email: "lorem@google.com",
    id: 434242n
};

let u2 = u1;
u2.id = 2323;

console.table([u1.id, u2.id]);

// id of u1 gets changed as u2 is given the reference of u1

