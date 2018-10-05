const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

const things = ['tree', 'space', 'cat', 'paper', 'something'];
app.use(cors());

app.get('/things', (req, res) => res.json(things));
app.listen(port, () => console.log(`Api listening on port ${port}`));
