// updates needed
const specialDates = {
  // assuming days never reset except at the beginning of new semesters
  // first and last days are school days
  "firstDayFirstSem" : new Date(2021, 8-1, 5),
  "firstDaySecondSem" : new Date(2022, 1-1, 4),
  "lastDay" : new Date(2022, 5-1, 27),
  "singleDays" : [
    new Date(2021, 9-1, 6),
    new Date(2021, 9-1, 16),
    new Date(2021, 10-1, 13),
    new Date(2022, 1-1, 17),
    new Date(2022, 4-1, 15),
    new Date(2022, 4-1, 18)
  ],
  "extendedBreak" : [
    // start date and end date both are unnumbered days
    [new Date(2021, 10-1, 18), new Date(2021, 10-1, 22)],
    [new Date(2021, 11-1, 24), new Date(2021, 11-1, 26)],
    [new Date(2021, 12-1, 15), new Date(2021, 12-1, 17)],
    [new Date(2021, 12-1, 20), new Date(2022, 1-1, 3)],
    [new Date(2022, 2-1, 18), new Date(2022, 2-1, 21)],
    [new Date(2022, 3-1, 28), new Date(2022, 4-1, 1)],
    [new Date(2022, 5-1, 25), new Date(2022, 5-1, 27)]
  ],
  "delayedOpening" : [
  ]
}

const classOrder = [
  // 0-indexed
  [1, 8, 6, 5, 3],
  [2, 1, 7, 6, 4],
  [3, 2, 8, 7, 5],
  [4, 3, 1, 8, 6],
  [5, 4, 2, 1, 7],
  [6, 5, 3, 2, 8],
  [7, 6, 4, 3, 1],
  [8, 7, 5, 4, 2]
];

const normalSchedule = {
  // start time and end time in hours and minutes
  // lunch: 0 indexed
  "firstPeriod" : [[8, 30, 9, 30]],
  "secondPeriod" : [[9, 35, 10, 35]],
  "prtA" : [[10, 35, 11, 10]],
  "thirdPeriod" : [
    [11, 40, 12, 40], // lunch 1
    [11, 10, 11, 40, 12, 10, 12, 40], // lunch 2
    [11, 10, 12, 10] // lunch 3
  ],
  "fourthPeriod" : [[12, 45, 13, 45]],
  "prtB" : [[13, 45, 14, 20]],
  "fifthPeriod" : [14, 20, 15, 20]
}

const classroomFormat = /Period\s(?<period>[A-H]), Lunch\s(?<lunch>[1-3])\s\(Section\s\d\)/;
