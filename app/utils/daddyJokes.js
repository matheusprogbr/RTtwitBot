require('dotenv').config();
const axios = require('axios');

const jokeURL = 'https://dad-jokes.p.rapidapi.com/random/joke';
module.exports = async () => {
  const response = await axios.get(jokeURL, {
    headers: {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
      useQueryString: true,
    },
  });
  return response.data.body;
};
