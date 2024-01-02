const fillStartDates = (
  calendarGrid,
  prevMonthYear,
  prevMonth,
  lastDateOfPrevMonth
) => {
  let placeDate = lastDateOfPrevMonth;
  for (let col = 6; col >= 0; col--) {
    if (calendarGrid[0][col] == null) {
      calendarGrid[0][col] = [prevMonthYear, prevMonth, placeDate];
      placeDate -= 1;
    }
  }
};

const fillEndDates = (calendarGrid, nextMonthYear, nextMonth) => {
  let placeDate = 1;
  const lastRow = calendarGrid.length - 1;
  for (let col = 0; col < 7; col++) {
    if (calendarGrid[lastRow][col] == null) {
      calendarGrid[lastRow][col] = [nextMonthYear, nextMonth, placeDate];
      placeDate += 1;
    }
  }
};

const getCalendarRow = (row, currYear, currMonth, currDate) => {
  return (
    <div className="flex flex-row gap-4">
      {row.map(([year, month, date]) => (
        <div
          className={`w-10 ${
            year == currYear && month == currMonth && date == currDate
              ? "bg-blue-500"
              : ""
          }`}
        >
          {date}
        </div>
      ))}
    </div>
  );
};

const Calendar = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const numberOfDaysCurrMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();

  const prevMonthObj = new Date(year, month - 1);
  const prevMonthYear = prevMonthObj.getFullYear();
  const prevMonth = prevMonthObj.getMonth();

  const nextMonthObj = new Date(year, month + 1);
  const nextMonthYear = nextMonthObj.getFullYear();
  const nextMonth = nextMonthObj.getMonth();
  const numberOfDaysPrevMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    0
  ).getDate();

  const startDay = (new Date(year, month).getDay() + 6) % 7;
  const locations = [...new Array(numberOfDaysCurrMonth).keys()].map((key) => {
    const total = key + startDay;
    const row = Math.floor(total / 7);
    const col = total % 7;
    return [year, month, key + 1, row, col];
  });

  const testArray = new Array(5).fill(0).map(() => new Array(7).fill(null));
  locations.forEach(
    ([year, month, date, row, col]) =>
      (testArray[row][col] = [year, month, date])
  );
  fillStartDates(testArray, prevMonthYear, numberOfDaysPrevMonth);
  fillEndDates(testArray, nextMonthYear, nextMonth);
  console.log(testArray);

  return (
    <div className="w-fit">
      <div className="w-fit text-2xl p-4">
        {now.toLocaleString("default", { month: "long" })} {year}
      </div>
      <div className="flex flex-col gap-4 w-fit">
        <div className="flex flex-row gap-4">
          <div className="w-10">Mon</div>
          <div className="w-10">Tue</div>
          <div className="w-10">Wed</div>
          <div className="w-10">Thu</div>
          <div className="w-10">Fri</div>
          <div className="w-10">Sat</div>
          <div className="w-10">Sun</div>
        </div>
        {testArray.map((row) => getCalendarRow(row, year, month, date))}
      </div>
    </div>
  );
};

export default Calendar;
