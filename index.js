var express = require('express');
var cors = require('cors');
const fs = require('fs');
const port = 3001
var app = express();
app.use(cors());
app.use(express.json()); // Parse request body as JSON

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const DATA_PATH = "./data.json"

// util functions
const getVtubers = () => {
    return JSON.parse(fs.readFileSync(DATA_PATH));
}
const saveVtubers = (data) => {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data));
}

app.get('/get', (req, res) => {
    res.json(getVtubers());
})

app.post('/post', (req, res) => {
    const vtubers = getVtubers();
    const newId = vtubers[vtubers.length - 1].id + 1;
    const newVtubers = [
        ...vtubers,
        {
            ...req.body,
            id: newId
        }
    ]
    saveVtubers(newVtubers)
    res.json(newVtubers);
})

app.put('/put', (req, res) => {
    const vtubers = getVtubers();
    const newVtubers = vtubers.map(vtuber => vtuber.id === req.body.id ? req.body : vtuber);
    saveVtubers(newVtubers)
    res.json(newVtubers);
})

app.delete('/delete', (req, res) => {
    const vtubers = getVtubers();
    newVtubers = vtubers.filter(vtuber => vtuber.id !== req.body.id)
    saveVtubers(newVtubers)
    res.json(newVtubers);
})

app.listen(port, () => {
    console.log(`[Know your Hololive] listening on port ${port}`)
})