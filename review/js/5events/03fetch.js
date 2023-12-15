async function getAllUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // takes time hence await to be used
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("E: ", error);
    }
}

getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log("Promise Fulfilled");
    console.log(data);
})
.catch((error) => {
    console.log("Promise Rejected");
    console.log("E: ", error);
})
.finally(() => {
    console.log("Promise Terminated");
})