const { Factory } = require('rosie');
const faker = require('faker');
const { Message } = require('models');

module.exports = Factory.define('message', Message)
  .sequence('id')
  .attrs({
    authorId: faker.random.number,
    content: faker.lorem.sentence,
  });
