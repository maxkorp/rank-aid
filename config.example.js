module.exports = {
  // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
  mongoUrl: '',
  auth: {
    'facebookAuth': {
      'clientID': 'your-secret-clientID-here',
      'clientSecret': 'your-client-secret-here',
      'callbackURL': 'http://localhost:8081/auth/facebook/callback'
    },
    'twitterAuth': {
      'consumerKey': 'your-secret-clientID-here',
      'consumerSecret': 'your-client-secret-here',
      'callbackURL': 'http://localhost:8081/auth/twitter/callback'
    },
    'googleAuth': {
      'consumerKey': 'your-secret-clientID-here',
      'consumerSecret': 'your-client-secret-here',
      'callbackURL': 'http://localhost:8081/auth/google/callback'
    }
  }
}
