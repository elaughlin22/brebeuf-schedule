function getCourses() {
  startLockout();
	return gapi.client.classroom.courses.list({
		"courseStates": "ACTIVE",
		"studentId": "me"
	}).then(function (response) {
		createCourses(response);
	}).catch(function (reason) {
		console.log(reason);
	});
}


function createCourses(response) {
  const courses = response.result.courses;
  
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].section !== undefined) {
      let info = courses[i].section.match(classroomFormat);
      if (info !== null) {
        //try {
          input[letterToNum(info.groups.period)].value = courses[i].name;
          radio[letterToNum(info.groups.period)][parseInt(info.groups.lunch, 10)-1].checked = true;
          input[letterToNum(info.groups.period)+8].value = courses[i].name;
          radio[letterToNum(info.groups.period)+8][parseInt(info.groups.lunch, 10)-1].checked = true;
        /*} catch(err) {
          console.log("Possibly incorrect information from Classroom");
        }*/
      }
    }
  }
  endLockout();
}


function letterToNum(letter) {
  return letter.charCodeAt(0) - 65;
}