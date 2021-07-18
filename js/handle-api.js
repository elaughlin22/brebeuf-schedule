// namespace may be needed

// need to hide as secret in github repo
const API_KEY = "AIzaSyAHzxZJfpp-RSjIVLAPy1TH8-4xAraOhu8";
// need to be web application with origin url added
const CLIENT_ID = "1061840141453-3gdbhsibjbfgg4tkocqsuu9uv39adkcq.apps.googleusercontent.com";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest", "https://www.googleapis.com/discovery/v1/apis/classroom/v1/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/classroom.courses.readonly";

var authorizeButton = document.getElementById("authorize-button");
var signoutButton = document.getElementById("signout-button");

// need to setup localhost
gapi.load("client:auth2", start);

function start() {
  gapi.client.init({
    "apiKey": API_KEY,
    "discoveryDocs": DISCOVERY_DOCS,
    "clientId": CLIENT_ID,
    "scope": SCOPES,
  }).then(function () {

    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleSignin;
    signoutButton.onclick = handleSignout;

  }).catch(function (reason) {
    console.log(reason);
  });
};


function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = "none";
    signoutButton.style.display = "block";

    return main();
    
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
  }
}

function handleSignin() {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignout() {
  gapi.auth2.getAuthInstance().signOut();
}


// https://developers.google.com/calendar/v3/reference/events/insert#javascript
// https://github.com/google/google-api-javascript-client/blob/master/docs