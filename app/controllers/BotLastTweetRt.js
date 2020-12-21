const Bot = require('../bot/bot');
const BotRetweet = require('../scripts/BotRetweet');

module.exports = async () => {
  const query = {
    q: 'cyberpunk bug',
    result_type: 'recent',
  };
  const lastId = {
    id: (await Bot.get('search/tweets', query)).data.statuses[0].id_str,
  };
  console.log(lastId.id);
  Bot.post(`statuses/retweet/:id`, lastId, BotRetweet);
};
