const { response } = require('express');
const express = require('express');
const client = require('../db/db');
const router = express.Router();

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

router.post('/updateVaccein', (req, response) => {
    client.query(`INSERT into vaccantions (vaccine_type,pet_id,date) 
                VALUES ($1,$2,CURRENT_DATE)`,
        [req.body.vaccein, req.body.petId],
        (err, res) => {
            if (err) {
                console.log(err);
                response.status(400).contentType('application/json').json({
                    "message": "update failed!"
                })
            }
            else {
                response.status(200).contentType('application/json').json({
                    "message": "update ok!"
                })
            }

        }
    )
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

router.delete('/deletePet', (req, response) => {
    client.query(`DELETE FROM pets WHERE name=$1 and owner_id=$2`, [req.body.pname, req.body.ownerId],
        (err, res) => {
            if (err) {
                console.log(err);
                response.status(400).contentType('application/json').json({
                    "message": "delete failed!"
                })
            }
            else {
                console.log("owner: ", req.body.ownerId);
                console.log(res);
                response.status(200).contentType('application/json').json({
                    "message": "delete ok!"
                })
            }

        }
    )
})

function CheckRole(Role) {
    if (Role == 1) {
        return "OWNER"
    }
    if (Role == 2) {
        return "SECRETARY"
    }
    return "DOCTOR"
}
module.exports = router;