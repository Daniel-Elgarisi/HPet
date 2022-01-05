const client = require('../../db/db')
const request = require('supertest');
const app = require('../../index')

// describe("POST /appointments/make", () => {
//     it("It should respond 'appointments is created successfully'", async () => {
//         const User = await request(app).post("/appointments/make").send({
//             phone_number: '0528287761',
//             name: 'bell',
//             appointment_type: 'regular',
//             time: '2022-01-03 19:30'

//         });
//         expect(User.body.message).toBe("appointments is created successfully");
//         expect(User.statusCode).toBe(200);

//     });
// });
