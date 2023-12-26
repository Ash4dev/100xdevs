# Mongoose
- Mongoose most popular ODM, acts as frontend to MongoDB(NoSQL database: document data model)
- Databases -> Collections -> Documents (https://studio3t.com/wp-content/uploads/2022/04/hierachy-768x469.png)
- MongoDB + Mongoose combination is extremely popular in the Node community
	- document storage and query system looks very much like JSON

## Defining and creating models
- models are defined using schema interface (how you tell Mongoose what your documents look like.)
- schema allows us to define fields & add conditions on fields like required, length, default vals
- schemas are later compiled to models, that helps in CRUD operations. Model ==> Collection
- modelName = mongoose.model(singular name of collection, collection Schema)

### Virtual Properties
- document properties that you can get and set but that do not get persisted to MongoDB
	- getters: formatting or combining fields, (full name from first & last name)
	- setters:  de-composing a single value into multiple values for storage. (vice-versa example)
	- see example: https://mongoosejs.com/docs/guide.html#virtuals

### Methods
- Instance methods: specific tasks that individual documents have access to
- Static Methods: tasks that are available with the whole collection, not with documents
- Query Methods: methods that actually perform the CRUD(async) operations, helper ops also exist
	- find, findOne, updateOne, deleteOne, countDocuments
``` 
Model.find({ key: 'value' }, (err, result) => {
    // Handle results
});
Model.findOne({ key: 'value' }, (err, result) => {
    // Handle result
});
Model.updateOne({ key: 'value' }, { $set: { newKey: 'updatedValue' } }, (err, result) => {
    // Handle result
});
Model.deleteOne({ key: 'value' }, (err) => {
    // Handle result
});
Model.countDocuments({ key: 'value' }, (err, count) => {
    // Handle count
});
```

## Using Models
- use CRUD operations using try, catch blocks when using async/await syntax

### Creating, Updating & Saving
```
// Create Document
const awesome_instance = new SomeModel({ name: "awesome" });
await awesome_instance.save();
OR
await SomeModel.create({ name: "also_awesome" });

// Update and Save Document
console.log(awesome_instance.name); 
awesome_instance.name = "New cool name";
await awesome_instance.save();
```

### Querying
- if we cannot find values in search, it is NOT an error, need to check the case for empty list separately.
	- if found, return Query Object which can be narrowed down in stages if necessary
- findById() uses native unique ID, findOne(), findByIdAndDelete/Remove/Update()

### Related Documents
```
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

// single author assumed
const storySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

const Story = mongoose.model("Story", storySchema);
const Author = mongoose.model("Author", authorSchema);
```

```
const bob = new Author({ name: "Bob Smith" });
await bob.save();

// Bob now exists, so lets create a story
const story = new Story({
  title: "Bob goes sledging",
  author: bob._id, // assign the _id from our author Bob. This ID is created by default!
});

await story.save();

Story.findOne({ title: "Bob goes sledding" })
  .populate("author") // Replace the author id with actual author information in results
  .exec();
```

### One Schema/Model per file
- we highly recommend defining each model schema in its own module (file), then exporting the method to create the model.



































