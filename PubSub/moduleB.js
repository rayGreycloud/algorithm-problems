const pubSub = require('./pubsub');

pubSub.subscribe('anEvent', data => {
  console.log(`"anEvent", was published with this data: "${data.msg}"`);
});
