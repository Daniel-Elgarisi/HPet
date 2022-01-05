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
