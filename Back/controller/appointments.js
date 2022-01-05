const client = require('../db/db')
const express = require('express');
const router = express.Router();

router.post('/make', MakeApp);
router.delete('/', DeleteApp);
router.get('/day', getAppOfDay);
router.get('/month', getAppOfMonth);


async function MakeApp(req, response) {

    let user = await client.query("select * from users where phone_number=$1", [req.body.phone_number]);
    if (user.rowCount == 0) {
        return response.status(400).json({ message: "user is not found" });
    }

    let userpets = await client.query('select * from pets where owner_id=$1 AND name=$2', [user.rows[0].id, req.body.name]);
    if (userpets.rowCount == 0) {
        return response.status(400).json({ message: "pet is not found" });
    }

    let ap = await client.query('select * from appointments where date=$1 AND time=$2', [req.body.date, req.body.time]);
    if (ap.rowCount > 0) {
        return response.status(400).json({ message: "Appointment is cell" });
    }


    let sql = 'INSERT INTO appointments(appointment_type, date, time, owner_id, pet_id, phone_number)';
    sql += " VALUES($1,$2,$3,$4,$5,$6)"
    let vars = [req.body.appointment_type, req.body.date, req.body.time, user.rows[0].id, userpets.rows[0].id, req.body.phone_number];


    client.query(sql, vars, (err, res) => {
        if (err) {
            console.log(err);
            return response.status(400).json({ message: "error" });
        } else {
            return response.status(200).json({ message: "appointments is created successfully" });
        }
    });


}