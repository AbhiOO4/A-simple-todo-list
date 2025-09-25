
const {v4: uuid} = require('uuid')

const express = require('express');

const app = express()

app.set('view engine','ejs')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const todos = [
    {
        id : uuid(),
        task : 'Workout',
        time : 10,
        priority : 1
    },
    {
        id : uuid(),
        task : 'Create projects',
        time : 12,
        priority : 3
    },
    {
        id : uuid(),
        task : 'Eat protiens',
        time : 2,
        priority : 1
    },
]


app.get('/todos',(req, res)=> {
    res.render('index.ejs',{todos})
})

app.post('/todos/create',(req,res)=> {
    const {task, time, priority} = req.body
    console.log(req.body)
    let id = uuid()
    todos.push({id, task, time, priority})
    console.log('It worked')
    res.redirect('/todos')
})



app.listen(3000, ()=>{
    console.log('Server is runnning on port 3000')
})


