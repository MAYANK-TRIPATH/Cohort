// Program to validate email and pass using zod

const zod = require("zod");

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput ({
    email: "mayank@gmail.com",
    password: "11jhkjJHgj"
});


// program if its an array of number with atleast 1 input, return true, else false

const zod = require("zod");

function validateInput(arr) {

    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response);
}

validateInput([1, 2, 3]);