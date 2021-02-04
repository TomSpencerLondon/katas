function isACentury(year: number) {
  return year % 100 === 0;
}

function centuryIsLeapYear(year: number) {
  return year % 400 === 0;
}

function nonCenturyLeapYear(year: number) {
  return year % 4 === 0;
}

// eslint-disable-next-line max-len
export const isLeapYear = (year: number): boolean => (isACentury(year) ? centuryIsLeapYear(year) : nonCenturyLeapYear(year));

type Year = {
  january: number;
  february: number;
  march: number;
  april: number;
  may: number;
  june: number;
  july: number;
  august: number;
  september: number;
  october: number;
  november: number;
  december: number;
};

type Month =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december';

type DayOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export const yearOrLeapYear = (year: number): Year => ({
  january: 3,
  february: isLeapYear(year) ? 1 : 0,
  march: 3,
  april: 2,
  may: 3,
  june: 2,
  july: 3,
  august: 3,
  september: 2,
  october: 3,
  november: 2,
  december: 3,
});

export const isStartsOnSunday = (month: Month, year: number): boolean => {
  let indexOfDayStartingAt : number = 0;
  let startMonth = 0;
  let startYear = 1901;
  const months: Month[] = [
    'january', 'february', 'march',
    'april', 'may', 'june',
    'july', 'august', 'september',
    'october', 'november', 'december',
  ];

  while (startYear <= year) {
    if (startYear === year && months.indexOf(month) === startMonth) {
      break;
    }

    const daysToAdd: number = Number(yearOrLeapYear(startYear)[months[startMonth]]);
    indexOfDayStartingAt = (indexOfDayStartingAt + daysToAdd) % 7;
    if (startMonth === 11) {
      startYear += 1;
    }
    startMonth = (startMonth + 1) % 12;
  }

  return indexOfDayStartingAt === 5;
};

export const getSundays = (startYear: number, endYear: number): number => {
  const years: number[] = Array.from({ length: (endYear - startYear) + 1 }).map((_, year) => year + startYear);
  const months: Month[] = [
    'january', 'february', 'march',
    'april', 'may', 'june',
    'july', 'august', 'september',
    'october', 'november', 'december',
  ];

  let numberOfSundays = 0;

  for (let i = 0; i < years.length; i += 1) {
    const year = years[i];
    for (let j = 0; j < months.length; j += 1) {
      const month = months[j];
      if (isStartsOnSunday(month, year)) {
        numberOfSundays += 1;
      }
    }
  }
  return numberOfSundays;
};

export const getSundaysWithCalendar = (startYear: number, endYear: number): number => {
  let sundays = 0;

  for (let year = startYear; year <= endYear; year += 1) {
    for (let month = 0; month < 12; month += 1) {
      if ((new Date(year, month, 1)).getDay() === 6) {
        sundays += 1;
      }
    }
  }

  return sundays;
};
