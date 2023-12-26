const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ashutoshpiitkgp:lolCatsReddit@cluster0.plwafz7.mongodb.net/")

const Cat = mongoose.model("Cats", {
    name: String,
    age: Number,
    password: String,
});

const kitty = new Cat({
    name: "LOl",
    age: 5,
    password: "meow"
});

// put data to db
kitty.save()