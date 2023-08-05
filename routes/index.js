const express = require('express');
const router = new express.Router();

const path = require('path');
const rootDir = path.dirname(process.argv[1]);

const { fetchLeagueData } = require(`${rootDir}/models/api`);


router.get('/', async(req, res) => {
  const leagueData = await fetchLeagueData();
  res.render(`${rootDir}/views/index.ejs`, { clubs: leagueData.clubs });
});

module.exports = router;