const express = require('express');
const router = express.Router();
const TASKS = require('../model/taskModel');
const { create_task, create_singlePage, delete_page, edit_page, edit} = require('../controller/taskController');


//post route c----create
router.post('/create', create_task)

//single page
router.get('/route/:id',create_singlePage)

// delete route D --delete
router.get('/delete/:id',delete_page)

// edit route 
router.get('/editpage/:id',edit_page)

router.post("/edit/:id",edit)

module.exports = router;