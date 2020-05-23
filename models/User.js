class User {
  constructor({ id, username, email, phone, password }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.password = password;
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

module.exports = User;
