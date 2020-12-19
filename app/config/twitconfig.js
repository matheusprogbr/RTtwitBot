require('dotenv').config();

module.exports = {
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET_KEY,
  access_token: process.env.ACESS_TOKEN,
  access_token_secret: process.env.ACESS_SECRET_TOKEN,
};
