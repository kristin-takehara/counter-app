const express = require ('express');
const app = express();
const PORT = process.env PORT || 3000;

const counter = {
  count: 0
};

app.get('/api.counter', (req, res) => {
  res.json(counter)
})

app.get('/api/counter/increment', (req, res) => {
  ++counter.count;
  res.end();
})

app.get('/api/counter/decrement', (req, res) => {
  --counter.count;
  res.end();
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
}