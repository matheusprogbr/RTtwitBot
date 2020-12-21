const Bot = require('../bot/bot');
const daddyJokes = require('../utils/daddyJokes');

module.exports = async () => {
  const response = await daddyJokes();

  console.log(response[0].setup + response[0].punchline);

  const tweet = {
    status: `${response[0].setup}\nPunchline: ${response[0].punchline}`,
  };

  Bot.post('/statuses/update', tweet, (err, response) => {
    if (err) console.log(`Deu erro${err}`);
  });
};
