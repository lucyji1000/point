class Message {
  constructor({ id, authorId, content }) {
    this.id = id;
    this.authorId = authorId;
    this.content = content;
    this.createdAt = null;
    this.updatedAt = null;
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