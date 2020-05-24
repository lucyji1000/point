class User {
  constructor({ id, email, password }) {
    this.id = id;
    this.email = email;
    this.password = password; // normally would be hashed
    this.createdAt = null;
    this.updatedAt = null;
  }

  get messages() {
    const { messages } = require('seed');
    return messages.filter(message => message.authorId === this.id);
  }

  save() {
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
    this.updatedAt = new Date();
    return this;
  }
}

module.exports = User;
