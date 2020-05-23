
const factories = require('factories');
const { users, messages } = require('seed');


module.exports = {
  // queries
  message: ({ id }) => messages.find(m => m.id === id),
  messages: () => messages,
  user: ({ id }) => users.find(u => u.id === id),
  users: () => users,

  // mutations
  createMessage: ({ input }) => {
    const message = factories.Message.build(input).save();
    messages.push(message);
    return message;
  },
  createUser: ({ input }) => {
    const user = factories.User.build(input).save();
    users.push(user);
    return user;
  }
};
