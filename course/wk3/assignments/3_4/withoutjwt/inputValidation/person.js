const zod = require("zod");

const personValid = zod.object({
    username: zod.string(),
    password: zod.string().min(8),
})

module.exports = {
    personValid
}