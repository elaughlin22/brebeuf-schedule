function getCourses() {
	const courseList = gapi.client.classroom.courses.list({
		'courseStates': 'ACTIVE',
		'studentId': 'me'
	})
	return courseList
	.then(function (response) {
		console.log(response.result.courses);
	}).catch(function (reason) {
		console.log(reason);
	});
}


// getCourses().courses[x].name