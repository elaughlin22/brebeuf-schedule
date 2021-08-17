function getCourses() {
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
        classes[letterToNum(info.groups.period)] = {
          "name": courses[i].name,
          "lunch": parseInt(info.groups.lunch, 10)
        }
      }
    } 
  }
  return checkExistingCalendar();
}


function letterToNum(letter) {
  return letter.charCodeAt(0) - 65;
}