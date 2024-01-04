const express = require("express");
const zod = require("zod");
const app = express();

//const schema = zod.array(zod.number());

/*
{
    email: string => email
    password: atleast 8 letters
    country: "IN", "US"
}
*/

const schema = zod.object({
    email: zod.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    // kidney = [1,2]
    const kidneys = req.body.kindneys;
    const response = schema.safeParse(kindneys)
    if (!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
        res.send({
            response
        })
    }
});

app.listen(3000);