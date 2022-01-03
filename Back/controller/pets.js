const client = require('../db/db')
const express = require('express');
const joi = require('joi');
const { checkPreferences } = require('joi');
const router = express.Router();

router.get('/', getAllPets);
router.get('/byuser/:phonenumber', getAllPetsByUser);
router.get('/petbyuser/:phonenumber/:petname', getPet);
router.post('/', addPet);
router.get('/:phonenumber/:petname', UpdateStatusePet);

router.get('/pets', (req, res) => {
    let allpets = []
    for (let i = 0; i < pets.length; i++) {
        if (pets[i].owner == req.body.owner) {
            if (pets[i].type == req.body.type) {
                allpets.push(pets[i])
            }
        }
    }
    res.status(200).contentType('application/json').json({
        "data": allpets
    })
})


router.post('/findPetIdByName', (req, response) => {
    client.query(`SELECT id FROM pets WHERE name=$1 AND owner_id=$2`, [req.body.pname, req.body.ownerId],
        (err, res) => {
            if (err) {
                response.status(400).contentType('application/json').json({
                    "message": "not found!"
                })
            }
            else {
                try {
                    if (res.rows[0]) {
                        console.log("owner: ", req.body.ownerId);
                        console.log(res);
                        console.log(res.rows[0]);
                        response.status(200).contentType('application/json').json({
                            "message": "ok!",
                            "data": res.rows[0].id
                        })
                    }
                }
                catch {
                    response.status(400).contentType('application/json').json({
                        "message": "not found!"
                    })
                }

            }
        })
})



module.exports = router;
