module.exports = {
  db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'localhost',

  sendgrid: {
    user: 'Your SendGrid Username',
    password: 'Your SendGrid Password'
  },

  nyt: {
    key: 'Your New York Times API Key'
  },

  lastfm: {
    api_key: 'Your API Key',
    secret: 'Your API Secret'
  },

  facebook: {
    clientID: '625968294229228',
    clientSecret: '5a8bd13756b366e9627c1ff5d448fcb1',
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  github: {
    clientID: 'Your Client ID',
    clientSecret: 'Your Client Secret',
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitter: {
    consumerKey: process.env.TWITTER_KEY || 'SGq7xVsr6bah7Moa4OtPAsc70',
    consumerSecret: process.env.TWITTER_SECRET || '8UznXMMlkQi44bt9xzGa2oAtpacn1SbmFKPokCXiWgObgUyYXp',
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  google: {
    clientID: 'Your Client ID',
    clientSecret: 'Your Client Secret',
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
  },

  tumblr: {
    consumerKey: 'Your Consumer Key',
    consumerSecret: 'Your Consumer Secret',
    callbackURL: '/auth/tumblr/callback'
  },

  foursquare: {
    clientId: 'Your Client ID',
    clientSecret: 'Your Client Secret',
    redirectUrl: 'http://localhost:3000/auth/foursquare/callback'
  },

  paypal: {
    host: 'api.sandbox.paypal.com', // or api.paypal.com
    client_id: 'Your Client ID',
    client_secret: 'Your Client Secret',
    returnUrl: 'http://localhost:3000/api/paypal/success',
    cancelUrl: 'http://localhost:3000/api/paypal/cancel'
  },
  watson:{
    "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
    "password": "iH2jiAeqzrYL",
    "username": "7a25dd19-4344-416c-b73a-1a9f9680cade"
  }
};
