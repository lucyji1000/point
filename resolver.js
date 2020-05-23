
const { users, messages } = require('seed');

module.exports = {
  message: ({ id }) => {
    messages.find(m => m.id === id);
  },
  messages: () => messages,
  user: ({ id }) => users.find(u => u.id === id),
  users: () => users,
};
