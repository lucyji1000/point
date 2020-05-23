const _ = require('lodash');
const { Message, User } = require('factories');

const NUM_USERS = 10;
const MIN_MESSAGES_PER_USER = 0;
const MAX_MESSAGES_PER_USER = 10;

const generateUsers = (numUsers) => _.times(numUsers, () => User.build().save());

const generateMessagesForUser = ({ user, min = MIN_MESSAGES_PER_USER, max = MAX_MESSAGES_PER_USER }) => {
  const numMessages = Math.floor(Math.random() * max) + min;
  return _.times(numMessages, () => Message.build({ authorId: user.id }).save());
};

const seed = () => {
  const users = generateUsers(NUM_USERS);
  const messages = _.flatMap(users, (user) => {
    return generateMessagesForUser({ user });
  });
  return { users, messages };
};

module.exports = seed();



