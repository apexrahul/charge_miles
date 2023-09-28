const express = require('express');
const data = require("./dummy");
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Worlmdnkdfhhed!');
});

app.get('/advertising', (req, res) => {
    res.status(200).json(data);
  });

app.listen(PORT, () => {console.log(`Server listening on ${PORT}`)})
