const Twit = require('twit');
require('dotenv').config();
const config = require('./config/twitconfig');
const BotRetweet = require('./scripts/BotRetweet');

const Bot = new Twit(config);

async function botInit() {
  const query = {
    q: 'felps',
    result_type: 'recent',
  };
  const lastId = {
    id: (await Bot.get('search/tweets', query)).data.statuses[0].id_str,
  };
  console.log(lastId.id);
  Bot.post(`statuses/retweet/:id`, lastId, BotRetweet);
}

setInterval(botInit, 10 * 10000);
