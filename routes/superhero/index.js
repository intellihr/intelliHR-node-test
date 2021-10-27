const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const headers = {
    'Content-Type': 'application/json',
    'x-rapidapi-host': process.env.SUPERHERO_HOST,
    'x-rapidapi-key': process.env.SUPERHERO_TOKEN
};


router.get('/', (req, res) => {
    const query = req.query;
    if (query?.superhero) {
        const queryParams = `hero=${query.superhero}`;
        axios.get(process.env.SUPERHERO_BASE_URL + new URLSearchParams(queryParams).toString(), {
            headers
        }).then(heroReps => {
            if (heroReps.status === 200) {
                // Save the supehero search and his/her full name to the search.json file
                // including a generated id
            } else {
                res.json({error: `Response returned with status code ${heroReps.status}`});
            }
        })
        .catch(err => res.status(500).json({error: err}));
    } else {
        res.json({error: 'Please set a superhero name'});
    }
});

module.exports = router;

