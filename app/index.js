const BotInit = require('./controllers/BotLastTweetRt');
const BotTweet = require('./controllers/BotTweet');

BotTweet();
setInterval(BotTweet, 60 * 10000);
BotInit();
setInterval(BotInit, 60 * 1000);
