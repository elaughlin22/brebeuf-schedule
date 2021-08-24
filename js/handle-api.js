<<<<<<< Updated upstream
// https://developers.google.com/calendar/v3/reference/events/insert#javascript
// https://github.com/google/google-api-javascript-client/blob/master/docs
// namespace may be needed

const API_KEY = 'AIzaSyAHzxZJfpp-RSjIVLAPy1TH8-4xAraOhu8';
// need to be web application with origin url added
const CLIENT_ID = '1061840141453-3gdbhsibjbfgg4tkocqsuu9uv39adkcq.apps.googleusercontent.com';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest', 'https://www.googleapis.com/discovery/v1/apis/classroom/v1/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/classroom.courses.readonly';
=======
var errorPage = document.getElementById("error");

function handleClientLoad() {
  try{
    gapi.load("client:auth2", start);
  } catch(err) {
  }
}
>>>>>>> Stashed changes

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

<<<<<<< Updated upstream
=======
// need to be web application with origin url added
// need to setup localhost
// enable apis, setup request screen
const CLIENT_ID = "22227420304-65mol9e9a34j1c0an8vc1l0mab6m91sr.apps.googleusercontent.com";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/classroom/v1/rest", "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest", "https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SCOPES = "https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/spreadsheets.readonly";

var authorizeButton = document.getElementById("authorize-button");
var signoutButton = document.getElementById("signout-button");
var executeButton = document.getElementById("execute-button");
var fetchButton = document.getElementById("fetch-button");

var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var lockout = document.getElementById("lockout");

>>>>>>> Stashed changes

gapi.load('client:auth2', start);

function start() {
  gapi.client.init({
    'apiKey': API_KEY,
    'discoveryDocs': DISCOVERY_DOCS,
    'clientId': CLIENT_ID,
    'scope': SCOPES,
  }).then(function () {

    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus); //listen for
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get()); //get now?
    authorizeButton.onclick = handleSignin;
    signoutButton.onclick = handleSignout;

  }).catch(function (reason) {
    console.log(reason);
    errorPage.style.display = "block";
  });
};


function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
<<<<<<< Updated upstream
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';

    return main();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
=======
    page1.style.display = "none";
    page2.style.display = "block";
    signoutButton.style.display = "block";

  } else {
    page1.style.display = "block";
    page2.style.display = "none";
    signoutButton.style.display = "none";
>>>>>>> Stashed changes
  }
}

function handleSignin() {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignout() {
  gapi.auth2.getAuthInstance().signOut();
}
