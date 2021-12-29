const client = require('../db/db')
const express = require('express');
const router = express.Router();

router.post('/medical', MakeMedical);
router.get('/:phonenumber/:petname', getAllPetReports)

