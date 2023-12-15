const express = require('express')
const app = express()
app.use(express.json());

app.get('/add', (req, res) => {
    const array = req.body.array;
    const result = array.reduce((acc, val) => acc + val, 0);
    res.json({ result });
});

app.get('/product', (req, res) => {
    const array = req.body.array;
    const result = array.reduce((acc, val) => acc * val, 1);
    res.json({ result });
});


app.get('/evens', (req, res) => {
    const array = req.body.array;
    const result = array.filter((num) => num % 2 === 0);
    res.json({ result });
});

app.get('/min', (req, res) => {
    const array = req.body.array;
    const result = Math.min(...array);
    res.json({ result });
});

app.get('/max', (req, res) => {
    const array = req.body.array;
    const result = Math.max(...array);
    res.json({ result });
});

app.get('/sort', (req, res) => {
    const array = req.body.array;
    const ascending = req.body.ascending || true;
    const result = array.sort((a, b) => (ascending ? a - b : b - a));
    res.json({ result });
});

app.get('/target', (req, res) => {
    const array = req.body.array;
    const target = req.body.target;
    const result = hasPairWithSum(array, target);
    res.json({ result });
});

app.listen(3000)