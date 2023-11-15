const express = require('express');
const router = express.Router();
const TASKS = require('../model/taskModel');
const { create_task, create_singlePage, delete_page } = require('../controller/taskController');


//post route c----create
router.post('/create', create_task)

//single page
router.get('/route/:id',create_singlePage)

// delete route D --delete
router.get('/delete/:id',delete_page)

module.exports = router;