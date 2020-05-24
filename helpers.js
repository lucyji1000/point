const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('config');
const { users } = require('seed');

const requiresLogin = resolver => (args, context, info) => {
  const user = verifyToken(context.req.headers.authorization);
  context.currentUser = user;
  return resolver(args, context, info);
};

const createToken = (user) => {
  return jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

const verifyToken = (authHeader) => {
  const token = authHeader && authHeader.replace(/Bearer\s+/, '');
  if (token) {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const user = users.find(user => user.id === decodedToken.sub);
    if (user) {
      return user;
    }
  }
  throw new Error('Unathorized');
};

module.exports = {
  createToken,
  requiresLogin,
};
