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

describe("POST /appointments/make", () => {
    it("It should respond 'user is not found'", async () => {
        const User = await request(app).post("/appointments/make").send({
            phone_number: '0528287768',
            name: 'bell',
            appointment_type: 'vaccine',
            time: '2022-12-26 19:30'

        });
        expect(User.body.message).toBe("user is not found");
        expect(User.statusCode).toBe(400);

    });
});

describe("POST /appointments/make", () => {
    it("It should respond 'pet is not found'", async () => {
        const User = await request(app).post("/appointments/make").send({
            phone_number: '0528287761',
            name: 'boni',
            appointment_type: 'vaccine',
            time: '2022-12-26 19:30'

        });
        expect(User.body.message).toBe("pet is not found");
        expect(User.statusCode).toBe(400);

    });
});

describe("POST /appointments/make", () => {
    it("It should respond 'Appointment is cell'", async () => {
        const User = await request(app).post("/appointments/make").send({
            phone_number: '0528287761',
            name: 'bell',
            appointment_type: 'vaccine',
            time: '2022-01-05 19:30'

        });
        expect(User.body.message).toBe("Appointment is cell");
        expect(User.statusCode).toBe(400);

    });
});
