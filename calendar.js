// https://developers.google.com/calendar/v3/reference/events/insert#javascript
// https://github.com/google/google-api-javascript-client/blob/master/docs
// namespace may be needed

const API_KEY = 'AIzaSyAHzxZJfpp-RSjIVLAPy1TH8-4xAraOhu8';
// need to be web application with origin url added
const CLIENT_ID = '1061840141453-3gdbhsibjbfgg4tkocqsuu9uv39adkcq.apps.googleusercontent.com';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar';

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');


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
  });
};


function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';

    return batchEvents()
    .then(function (response) {
      console.log(response.result);
    }).catch(function (reason) {
      console.log(reason);
    });
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

function handleSignin() {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignout() {
  gapi.auth2.getAuthInstance().signOut();
}

function batchEvents() {
  const batch = gapi.client.newBatch();
  for (let i = 1; i < 5; i++) {
    const event = gapi.client.calendar.events.insert({
      'calendarId': 'c_kpefo0ahrgt3ul1je9btul9n2g@group.calendar.google.com',
      // month is 0-indexed
      'resource': createEvent(new Date(2021, 6 - 1, i, 15), new Date(2021, 6 - 1, i, 16))
    });
    batch.add(event, { 'id': i });
  }
  return batch;
}

// pass in date objects
function createEvent(firstDate, secondDate) {

  var event = {
    'summary': 'test',
    'start': {
      'dateTime': firstDate.toISOString(),
      'timeZone': 'America/Los_Angeles'
    },
    'end': {
      'dateTime': secondDate.toISOString(),
      'timeZone': 'America/Los_Angeles'
    }
  };
  return event;
}