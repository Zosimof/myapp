var express = require('express');
var router = express.Router();

let tasks = [];

router.get('/getTasks', function(req, res, next){
    res.json(tasks);
})

router.delete('/removeTask/:id', function(req, res, next){
    if(req.params && req.params.id){
        let id = req.params.id;
        tasks = tasks.filter(task => task.id !== id);
        res.json(tasks)
    }else{
        res.json({})
    }
})

router.post('/addTasks', function(req, res, next){
    let timestamp = Date.now() + Math.random();
    if(req.body && req.body.name && req.body.description && req.body.dueDate){
        req.body.id = timestamp.toString();
        tasks.push(req.body);
        res.json(tasks)
        }else {
            res.status(200).json(tasks)
        }
    res.status(400).json(tasks);
})

module.exports = router;