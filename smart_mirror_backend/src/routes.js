const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationPolicy = require('./policies/AuthenticationPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationPolicy.register,
    AuthenticationController.register)

  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello World!'
    })
  })
}
