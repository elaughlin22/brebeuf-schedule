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
  // can be modified if format in classroom changes
  const REG = /Period\s(?<period>[A-H]), Lunch\s(?<lunch>[1-3])\s\(Section\s\d\)/;
  var classes = {};
  
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].section !== undefined) {
      let info = courses[i].section.match(REG);
      if (info !== null) {
        classes[courses[i].name] = {
          "period": info.groups.period,
          "lunch": info.groups.lunch
        }
      }
    } 
  }
  for (const prop of Object.keys(classes)) {
    console.log(prop);
    console.log(classes[prop])
  }
}