const axios = require('axios');
const env = require('dotenv').config().parsed;

module.exports = {
  fetchLeagueData: async (params) => {
    const options = {
      method: 'GET',
      url: 'https://transfermarket.p.rapidapi.com/clubs/list-by-competition',
      params: {
        id: env.leagueId,
        domain: env.domain
      },
      headers: {
        'X-RapidAPI-Key': env.key,
        'X-RapidAPI-Host': env.host
      }
    }
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  fetchSquadData: async (id) => {
    const options = {
      method: 'GET',
      url: 'https://transfermarket.p.rapidapi.com/clubs/get-squad',
      params: {
        id: id,
        saison_id: '2023',
        domain: env.domain
      },
      headers: {
        'X-RapidAPI-Key': env.key,
        'X-RapidAPI-Host': env.host
      }
    }
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  fetchPlayerData: async (id) => {
    const options = {
      method: 'GET',
      url: 'https://transfermarket.p.rapidapi.com/players/get-performance-summary',
      params: {
        id: id,
        seasonID: '2022',
        domain: env.domain
      },
      headers: {
        'X-RapidAPI-Key': env.key,
        'X-RapidAPI-Host': env.host
      }
    }
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}