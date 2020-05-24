class Message {
  constructor({ id, authorId, content }) {
    this.id = id;
    this.authorId = authorId;
    this.content = content;
    this.createdAt = null;
    this.updatedAt = null;
  }

  get author() {
    const { users } = require('seed');
    return users.find(user => user.id === this.authorId) || null;
  }

  save() {
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
    this.updatedAt = new Date();
    return this;
  }
}

module.exports = Message;