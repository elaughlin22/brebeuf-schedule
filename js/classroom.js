function getCourses() {
	const courseList = gapi.client.classroom.courses.list({
		"courseStates": "ACTIVE",
		"studentId": "me"
	})
	return courseList
	.then(function (response) {
		printRes(response);
	}).catch(function (reason) {
		console.log(reason);
	});
}

function printRes(response) {
  const courses = response.result.courses;
  // can be modified if format in classroom changes
  const REG = /Period\s(?<period>[A-H]), Lunch\s(?<lunch>[1-3])\s\(Section\s\d\)/;
  for (let i = 0; i < courses.length; i++) {
    console.log(courses[i].section);
    
    if (courses[i].section !== undefined) {
      let info = courses[i].section.match(REG);
      if (info !== null) {
        console.log(info.groups.period);
        console.log(info.groups.lunch);
      }
    } 
    

  }
}