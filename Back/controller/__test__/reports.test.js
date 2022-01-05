const client = require('../../db/db')
const request = require('supertest');
const app = require('../../index')


describe("POST /reports/uploadReport", () => {
    it("It should respond 'report is created successfully'", async () => {
        const User = await request(app).post("/reports/uploadReport").send({
            phone_number: '0528287761',
            name: 'bell',
            appointment_type: 'lab',
            report: 'test1',
        });
        expect(User.body.message).toBe("report is created successfully");
        expect(User.statusCode).toBe(200);

    });
});

describe("POST /reports/uploadReport", () => {
    it("It should respond 'user is not found'", async () => {
        const User = await request(app).post("/reports/uploadReport").send({
            phone_number: '0526640167',
            name: 'bell',
            appointment_type: 'lab',
            report: 'test1',

        });
        expect(User.body.message).toBe("user is not found");
        expect(User.statusCode).toBe(400);

    });
});
