const client = require('../../db/db')
const request = require('supertest');
const app = require('../../index')


describe("GET /photo/watchAlbum", () => {
    it("It's Ok!", async () => {
        const response = await request(app).get("/photo/watchAlbum/0528287761/bell");
        expect(response.body[0]).toHaveProperty("url");
        expect(response.statusCode).toBe(200);
    });
});
