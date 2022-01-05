const client = require('../../db/db')
const request = require('supertest');
const app = require('../../index')


describe("POST /vaccines/updateVaccein", () => {
    it("It should respond 'vaccines is created successfully'", async () => {
        const User = await request(app).post("/vaccines/updateVaccein").send({
            phone_number: '0528287761',
            petname: 'bell',
            vaccine_type: 'משושה 1',

        });
        expect(User.body.message).toBe("vaccines is created successfully");
        expect(User.statusCode).toBe(200);

    });
});
