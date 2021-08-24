function brebeufDay(enteredDate) {
  // enter date object
  enteredDate.setHours(0,0,0,0);
  const enteredTime = enteredDate.getTime();

  var dayOne = specialDates.firstDayFirstSem;
  if (enteredTime >= specialDates.firstDaySecondSem.getTime()) dayOne = specialDates.firstDaySecondSem;
  
  var brebeufDay = null;

  if (enteredTime == dayOne.getTime()) brebeufDay = 1;
  else if (enteredTime < dayOne.getTime() || enteredTime > specialDates.lastDay.getTime()) brebeufDay = null;
  else if (!normalDay(enteredDate)) brebeufDay = null;
  else {
    var dayCount = 0;
    var dayTest = new Date(dayOne);

    var stopTest = new Date(enteredDate);
    stopTest.setDate(stopTest.getDate() + 1);

    while (dayTest.getTime() != stopTest.getTime()) {
      if (normalDay(dayTest)) dayCount ++;
      dayTest.setDate(dayTest.getDate() + 1);
    }

    brebeufDay = dayCount % 8;
    if (brebeufDay == 0) brebeufDay = 8;
  }

  return brebeufDay;
}

function normalDay(enteredDate) {
  // enter date object
  var normal = true;
  const enteredTime = enteredDate.getTime();
  if (enteredDate.getDay() == 6 || enteredDate.getDay() == 0) normal = false;
  else {
    for (let days of specialDates.singleDays) {
      if (enteredTime == days.getTime()) {
        normal = false;
        break;
      }
    }
    if (normal) {
      for (let breaks of specialDates.extendedBreak) {
        if (enteredTime >= breaks[0].getTime() && enteredTime <= breaks[1].getTime()) {
          normal = false;
          break;
        }
      }
    }
  }

  return normal;
}