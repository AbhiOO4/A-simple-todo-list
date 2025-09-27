
const {v4: uuid} = require('uuid')

const path = require('path')
const express = require('express');

const methodOverride = require('method-override');

const app = express()

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(methodOverride('_method'));

let todos = [
    {
        id : uuid(),
        task : 'Create projects',
        time : '12:00',
        priority : 3,
        checked : true
    },
    {
        id : uuid(),
        task : 'Workout',
        time : '15:00',
        priority : 1,
        checked : false
    },
    
]

const colors = ['white','red','orange','yellow','blue','green']


todos.sort((a, b) => a.time.localeCompare(b.time));



app.get('/todos',(req, res)=> {
    res.render('index.ejs',{todos,colors})
})



app.post('/todos/create',(req,res)=> {
    let {task, time, priority} = req.body
    let id = uuid()
    priority = parseInt(priority)
    let checked = false
    todos.push({id, task, time, priority, checked})
    todos.sort((a, b) => a.time.localeCompare(b.time));
    console.log(todos)
    console.log('It worked')
    res.redirect('/todos')
})

app.post('/todos/:id',(req,res) => {
    const {id} = req.params
    const found = todos.find((task)=> (task.id == id))
    if (found.checked){
        found.checked = false
    }
    else{
        found.checked = true
    }
    res.redirect('/todos')
})

app.delete('/todos/:id',(req,res) => {
    const {id} = req.params;
    todos = todos.filter((task)=> (task.id != id));
    res.redirect('/todos')
})






app.listen(3000, ()=>{
    console.log('Server is runnning on port 3000')
})


