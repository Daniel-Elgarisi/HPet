const client = require('../../db/db')
const request = require('supertest');
const app = require('../../index')

// describe("POST /user/register", () => {
//     it("It should respond 'New user created successfully'", async () => {
//         const newUser = await request(app).post("/user/register").send({
//             user_name: 'ddi',
//             password: '123',
//             first_name: 'dori',
//             last_name: 'fourer',
//             email: 'ddi@gmail.com',
//             phone_number: '0648929226',
//             role: 1
//         });
//         expect(newUser.body.message).toBe("New user created successfully");
//         expect(newUser.statusCode).toBe(200);

//     });
// });

describe("POST /user/register", () => {
    it("It should respond 'Existing username or existing email or existing cell phone number'", async () => {
        const newUser = await request(app).post("/user/register").send({
            user_name: 'daniel12',
            password: '1234',
            first_name: 'daniel',
            last_name: 'grounin',
            email: 'daniel12@gmail.com',
            phone_number: '0528287761',
            role: 1
        });
        expect(newUser.body.message).toBe("Existing username or existing email or existing cell phone number");
        expect(newUser.statusCode).toBe(400);

    });
});