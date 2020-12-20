const Bot = require('../bot/bot');
const mathRandom = require('../utils/mathRandom');
const rawTweet = require('../utils/data/tweet');

module.exports = () => {
  const tweet = {
    status: rawTweet.status[mathRandom(0, 11)],
  };

  Bot.post('/statuses/update', tweet, (err, response) => {
    if (err) console.log(`Deu erro${err}`);
  });
};
