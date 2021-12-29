const client = require('../db/db')
const express = require('express');
const router = express.Router();

router.post('/make', MakeApp);
router.delete('/', DeleteApp);
router.get('/day', getAppOfDay);
router.get('/month', getAppOfMonth);
