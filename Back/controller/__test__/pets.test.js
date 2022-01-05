const client = require('../../db/db')
const request = require('supertest');
const app = require('../../index')

// describe("POST /pets/petRegister", () => {
//     it("It should respond 'New pet created successfully'", async () => {
//         const newPet = await request(app).post("/pets/petRegister").send({
//             phone_number: '0528287761',
//             name: 'rup',
//             breed: 'milow',
//             chip_number: '',
//             birthday: '11/02/2009',
//             gender: 'famle',
//             type: 'dog'
//         });
//         expect(newPet.body.message).toBe("New pet created successfully");
//         expect(newPet.statusCode).toBe(200);

//     });
// });

describe("POST /pets/petRegister", () => {
    it("It should respond 'pet is exist'", async () => {
        const newPet = await request(app).post("/pets/petRegister").send({
            phone_number: '0528287761',
            name: 'bell',
            breed: 'milow',
            chip_number: '',
            birthday: '11/02/2009',
            gender: 'famle',
            type: 'dog'
        });
        expect(newPet.body.message).toBe("pet is exist");
        expect(newPet.statusCode).toBe(400);

    });
});

