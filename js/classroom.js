function listCourses() {
	const courseList = gapi.client.classroom.courses.list({
		'courseStates': 'ACTIVE',
		'studentId': 'me'
	})
	return courseList;
}