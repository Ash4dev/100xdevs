const zod = require("zod");

const courseValid = zod.object({
    title: zod.string(),
    description: zod.string(),
    price: zod.number().positive(),
    image: zod.string(),
    author: zod.string(),
})

module.exports = {
    courseValid
}