const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;

const counter = {
  count: 0
};

app.use(express.static(__dirname + '/public'));

app.get('/api/counter', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
})