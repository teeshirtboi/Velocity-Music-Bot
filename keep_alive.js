const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Velocity is Alive!'));

app.listen(port, () => console.log(`Velocity is listening to http://localhost:${port}`));