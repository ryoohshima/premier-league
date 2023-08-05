const express = require('express');
const router = new express.Router();

const path = require('path');
const rootDir = path.dirname(process.argv[1]);

const { fetchPlayerData } = require(`${rootDir}/models/api`);

router.get('/:id', async(req, res) => {
  const playerData = await fetchPlayerData(req.params.id);
  console.log(playerData.competitionPerformanceSummery);
  const properties = [
    'minutesPlayed',
    'goals',
    'penaltyGoals',
    'minutesPerGoal',
    'assists',
    'yellowCards',
    'redCards',
    'matches'
  ];
  res.render(`${rootDir}/views/players.ejs`, { data: playerData, properties: properties });
});

module.exports = router;