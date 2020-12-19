const Twit = require('twit');
require('dotenv').config();
const config = require('./config/twitconfig');

const T = new Twit(config);
