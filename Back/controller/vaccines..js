const client = require('../db/db')
const express = require('express');
const router = express.Router();

router.get('/:phonenumber/:petname', getVaccines);
router.post('/', updateVaccines);
