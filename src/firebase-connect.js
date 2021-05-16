var admin = require("firebase-admin");

var serviceAccount = require("../service-account.json");

var defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://com-android-foodbody.firebaseio.com"
});

console.log(defaultApp.name);  // '[DEFAULT]'

// Retrieve services via the defaultApp variable...
var defaultAuth = defaultApp.auth();
var defaultDatabase = defaultApp.database();

// ... or use the equivalent shorthand notation
defaultAuth = admin.auth();
defaultDatabase = admin.database();

defaultDatabase.ref("/adad").set({"name":"ere","asd":"sdsd"})
