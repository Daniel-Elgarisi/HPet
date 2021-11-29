const pets = [
    {type: "dog", breed: "shitzu", name: "ray", owner: "daniel"},
    {type: "dog", breed: "sheperd", name: "belle", owner: "daniel"},
    {type: "cat", breed: "siamese", name: "dani", owner: "daniel"},
    {type: "cat", breed: "siamese", name: "philip", owner: "lahad"},
]

const express = require('express');
const router = express.Router();

router.get('/pets', (req,res)=> {
    let allpets = []
    for (let i = 0; i < pets.length; i++) {
        if(pets[i].owner == req.body.owner){
            if(pets[i].type==req.body.type){
                allpets.push(pets[i])
            }
        }  
    }
    res.status(200).contentType('application/json').json({
        "data": allpets
    })
})


function CheckRole(Role)
{
    if(Role==1){
        return "OWNER"
    }
    if(Role==2){
        return "SECRETARY"
    }
    return "DOCTOR"
}
module.exports = router;