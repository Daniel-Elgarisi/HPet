const client = require('../db/db')
const express = require('express');
const router = express.Router();

function varifyLogin(dbUsername, dbPassword, username, password) {
    if (dbUsername == username && dbPassword == password) {
        return true;
    }
    return false;
}

router.post('/login', (req, response) => {
    let name;
    let Role
    client.query('select * from users where user_name = $1', [req.body.username], (err, res) => {
        if (res && res.rows[0]) {
            if (varifyLogin(res.rows[0].user_name, res.rows[0].password, req.body.username, req.body.password)) {
                response.status(200).contentType('application/json').json({
                    "message": "login ok!",
                    "data": {
                        username: res.rows[0].user_name,
                        role: res.rows[0].role
                    }
                })
            }
            else {
                response.status(400).contentType('application/json').json({
                    "message": "Wrong username or password"
                })
            }
        }
        else {
            response.status(400).contentType('application/json').json({
                "message": "Wrong username or password"
            })
        }
    })
})


router.put('/update', (req, response) => {
    client.query('UPDATE users SET  first_name=$1, last_name=$2, email=$3, phone_number=$4 WHERE user_name = $5',
        [req.body.name, req.body.lname, req.body.email, req.body.phone, req.body.currentUser],
        (err, res) => {
            if(err){
                response.status(400).contentType('application/json').json({
                    "message": "edit failed!"
                })
            }
            response.status(200).contentType('application/json').json({
                "message": "edit ok!"
            })
        }
    )
})

module.exports = { router, varifyLogin } 