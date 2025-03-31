const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-url.firebaseio.com"
});

module.exports = admin;
