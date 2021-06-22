function main() {
  batchEvents()
  .then(function (response) {
    console.log(response.result);
  }).catch(function (reason) {
    console.log(reason);
  });
  listCourses()
  .then(function (response) {
    console.log(response.result.courses);
  }).catch(function (reason) {
    console.log(reason);
  });
}