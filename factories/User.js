const { Factory } = require('rosie');
const faker = require('faker');
const { User } = require('models');

module.exports = Factory.define('user', User)
  .sequence('id')
  .attrs({
    email: faker.internet.email,
    password: faker.internet.password,
    phone: faker.phone.phoneNumber,
    username: faker.internet.userName,
  });