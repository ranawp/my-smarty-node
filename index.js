const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hey broooo,Look Mama!I am coding node now yeaaaahh!!!!')
})

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '017777888' },
    { id: 2, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '017777888' },
    { id: 3, name: 'srabonti', email: 'srabonti@gmail.com', phone: '017777888' },
    { id: 4, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '017777888' },
    { id: 5, name: 'Labony', email: 'labony@gmail.com', phone: '017777888' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        console.log('query', req.query)
        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange'])
})
app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour fazle flavour')
})

app.listen(port, () => {
    console.log('Listening to port', port);
});
