const express = require('express');
const cors = require('cors');
const { router } = require('./routes');
const superhero = require('./routes/superhero');

const PORT = 4400;
const app = new express();

app.use('/api', router);
app.use('/api/search', superhero);

app.use((req, res) => {
    res.status(404).json({error: 'Invalid route path'});
});

app.use(cors());

app.listen(PORT, () => console.log(`App has started in url: http://localhost:${PORT}`));