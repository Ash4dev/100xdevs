const givenArray = [
    { "name": "Yosha Gamuda", "phone": 1234567890 },
    { "name": "Portia Umeng", "phone": 4894759371 },
    { "name": "Yosha Gamuda", "phone": 1234567890 },
    { "name": "Portia Umeng", "phone": 4894759371 }
];
givenArray.sort((name1, name2) => {
    name1 = name1.name.toUpperCase();
    name2 = name2.name.toUpperCase();
    return (name1 < name2) ? -1 : (name1 > name2) ? 1 : 0;
})
console.log(givenArray);
