const BotInit = require('./controllers/BotLastTweetRt');
const BotTweet = require('./controllers/BotTweet');

setInterval(BotTweet, 10 * 100);

setInterval(BotInit, 10 * 1000);
