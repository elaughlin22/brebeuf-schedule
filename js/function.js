function brebeufDay(enterDate) {
  // enter date object
  enteredDate.setHours(0,0,0,0);
  var enteredTime = enteredDate.getTime();

  var day_one = specialDates.firstDayFirstSem;
 
  for (let y in EXTENDED_BREAK) {
    
    let newDate = new Date(EXTENDED_BREAK[y][1]);
    newDate.setDate(newDate.getDate() + 1);
    
    if (EXTENDED_BREAK[y][2] === "RESET" && enteredDate.getTime() > endDate.getTime()) day_one = new Date(newDate);
  }
  
  
  var brebeufDay = 0;
  var dayTest = new Date(day_one);

  if (enteredTime == day_one.getTime()) brebeufDay = 1;
  else if (enteredTime < day_one.getTime()) brebeufDay = null;
  else if (enteredDate.getDay() == 6 || enteredDate.getDay() == 0) brebeufDay = null;
  else {
    for (let s of specialDates.singleDays) {
      if (enteredTime == s.getTime()) brebeufDay = null;
    }
    for (let e of specialDates.extendedBreak) {
        if (enteredTime >= e[0].getTime() && enteredTime <= e[1].getTime()) brebeufDay = null;
    }
    
    if (brebeufDay !== null) {
      var dayCount = 0;

      var testEntered = new Date(enteredDate);
      testEntered.setDate(testEntered.getDate() + 1);
      
      while (dayTest.getTime() != testEntered.getTime()) {

        if (!(dayTest.getDay() == 6 || dayTest.getDay() == 0)) {
          var breakDay = false;
          for (let y of specialDays) {
            if (dayTest.getTime() == y.getTime()) breakDay = true;
          }
          if (!breakDay) dayCount ++;
        } 
        dayTest.setDate(dayTest.getDate() + 1);
      }

      brebeufDay = dayCount % 8;
    }
  }
  if (brebeufDay == 0) brebeufDay = 8;

  return brebeufDay;
}