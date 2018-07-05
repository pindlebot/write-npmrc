class WriteNpmrcError extends Error {
  constructor (message, code) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = 'WriteNpmrcError'
    this.code = code
    this.npmPatch = true
  }
};

module.exports = WriteNpmrcError
