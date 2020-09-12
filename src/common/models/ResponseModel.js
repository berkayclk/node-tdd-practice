class Response {
  constructor(message = '', success = false, data = null) {
    this.message = message;
    this.success = success;
    this.data = data;
  }
}

module.exports = Response;
