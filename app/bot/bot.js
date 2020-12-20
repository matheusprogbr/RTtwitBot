const Twit = require('twit');
const config = require('../config/twitconfig');

const Bot = new Twit(config);
module.exports = Bot;
