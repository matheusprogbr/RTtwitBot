module.exports = (err, response) => {
  if (err) console.log(`Couldn´t retweet this post:${err}`);
  else console.log(`Retweed`);
};
