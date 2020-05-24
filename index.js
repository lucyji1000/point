const express = require('express');
const graphqlHTTP = require('express-graphql');
const passport = require('passport');
const { buildContext } = require('graphql-passport');
const schema = require('schema');
const rootValue = require('resolver');
require('./passport');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(passport.initialize());

app.use('/api', 
  graphqlHTTP((req, res) => ({
    schema: schema,
    rootValue,
    graphiql: true,
    context: buildContext({ req, res })
  }))
);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));