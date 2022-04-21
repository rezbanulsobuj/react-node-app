const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.send('hi gulu gulu  mama mama nod')
})
const users = [
    { id: 1, name: 'sabana', job: 'actor', staus: 'married', email: 'sabana@123gmail.com' },
    { id: 2, name: 'bobita', job: 'guga', staus: 'mar', email: 'bobita@123gmail.com' },
    { id: 3, name: 'mousumi', job: 'mara', staus: 'mari', email: 'mousumi@123gmail.com' },
    { id: 4, name: 'anika', job: 'khau', staus: 'married', email: 'anika@123gmail.com' }
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

})
app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'oranges'])
})
app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('good idea', port)
})