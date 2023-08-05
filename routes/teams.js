const express = require('express');
const router = new express.Router();

const path = require('path');
const rootDir = path.dirname(process.argv[1]);

const { fetchSquadData } = require(`${rootDir}/models/api`);

router.get('/:id', async(req, res) => {
  const squadData = await fetchSquadData(req.params.id);

  // ポジションごとに選手をグループ化
  const groupedSquad = {};
  squadData.squad.forEach(player => {
    const positionKey = player.positions.first.group;
    if (groupedSquad[positionKey]) {
      groupedSquad[positionKey].push(player);
    } else {
      groupedSquad[positionKey] = [player];
    }
  });

  // グループをポジション順に並び替え
  const positionOrder = ['Goalkeeper', 'Defence', 'Midfield', 'Attack'];
  const orderedSquad = {};
  positionOrder.forEach(position => {
    orderedSquad[position] = groupedSquad[position];
  });

  res.render(`${rootDir}/views/teams.ejs`, { squad: orderedSquad });
});

module.exports = router;