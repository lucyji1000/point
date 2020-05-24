
const factories = require('factories');
const { createToken, requiresLogin } = require('helpers');
const { users, messages } = require('seed');

module.exports = {
  // queries
  message: requiresLogin(({ id }) => messages.find(m => m.id === id)),
  messages: requiresLogin(() => messages),
  user: requiresLogin(({ id }) => users.find(u => u.id === id)),
  users: requiresLogin(() => users),

  // mutations
  createMessage: requiresLogin(({ input }, context) => {
    const message = factories.Message.build({ 
      ...input,  
      authorId: context.currentUser.id,
    }).save();
    messages.push(message);
    return message;
  }),

  signUp: ({ input }) => {
    const { email } = input;
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    const user = factories.User.build(input).save();
    users.push(user);
    return { token: createToken(user) };
  },

  login: async ({ input }, context) => {
    const { email, password } = input;
    const { user } = await context.authenticate('graphql-local', { email, password });
    context.login(user);
    return { token: createToken(user) };
  },

  logout: requiresLogin((_, context) => {
    context.logout(context.currentUser);
    return 'success';
  }),
};
