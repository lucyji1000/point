const passport = require('passport');
const { GraphQLLocalStrategy } = require('graphql-passport');
const { users } = require('seed');

passport.use(
  new GraphQLLocalStrategy((email, password, done) => {
    const user = users.find((user) => user.email === email);
    if (!user || user.password !== password) {
      return done(new Error('Invalid email or password'), null);
    }
    return done(null, user);
  }),
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
