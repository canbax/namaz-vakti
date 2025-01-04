import { describe, it, expect } from 'vitest';
import { HijriDate } from './HijriDate';

describe('Hijri Date', () => {
  it('Can convert the same gregorian date to the same hijri date', () => {
    const d1 = new HijriDate(1442, 3, 20);
    const d2 = new HijriDate(1442, 3, 20);
    expect(d1.dayDiff(d2)).toBe(0);
    expect(d1.compare(d2)).toBe(0);
  });

  it('Can convert to tomorrow', () => {
    const d1 = new HijriDate(1442, 3, 20);
    const d2 = new HijriDate(1442, 3, 21);
    expect(d1.dayDiff(d2)).toBe(1);
  });

  it('Can convert to tomorrow even if the month is different', () => {
    const d1 = new HijriDate(1442, 3, 30);
    const d2 = new HijriDate(1442, 4, 1);
    expect(d1.dayDiff(d2)).toBe(1);
  });

  it('Can convert to first and last day of the month', () => {
    const d1 = new HijriDate(1442, 3, 1);
    const d2 = new HijriDate(1442, 3, 30);
    expect(d1.dayDiff(d2)).toBe(29);
  });

  it('Should throw error if day is greater than maximum days in a month', () => {
    expect(() => new HijriDate(1442, 3, 31)).toThrowError(
      'day is either smaller than 1 or greater than maximum days in the month',
    );
  });

  it('Should throw error if day is less than minimum days in a month', () => {
    expect(() => new HijriDate(1442, 3, 0)).toThrowError(
      'day is either smaller than 1 or greater than maximum days in the month',
    );
  });

  it('Can convert 2020 start of sacred 3 months correctly', () => {
    const d1 = new HijriDate().toHijri(new Date(2020, 1, 25));
    expect(d1.getYear() === 1441 && d1.getMonth() === 6 && d1.getDay() === 1).toBe(true);
  });

  it('can convert a date with time', () => {
    const d1 = new HijriDate().toHijri(new Date(2023, 11, 14, 15, 14, 13, 12));
    expect(d1.compare(new HijriDate(1445, 5, 1))).toBe(0);
  });

  const gregorianToHijri = [
    {
      gregorian: [2020, 11, 6],
      hijri: [1442, 3, 21],
    },
    {
      gregorian: [2020, 0, 26],
      hijri: [1441, 5, 1],
    },
    {
      gregorian: [2020, 1, 25],
      hijri: [1441, 6, 1],
    },
    {
      gregorian: [2020, 1, 27],
      hijri: [1441, 6, 3],
    },
    {
      gregorian: [2020, 2, 21],
      hijri: [1441, 6, 26],
    },
    {
      gregorian: [2020, 2, 25],
      hijri: [1441, 7, 1],
    },
    {
      gregorian: [2020, 3, 7],
      hijri: [1441, 7, 14],
    },
    {
      gregorian: [2020, 3, 24],
      hijri: [1441, 8, 1],
    },
    {
      gregorian: [2020, 4, 19],
      hijri: [1441, 8, 26],
    },
    {
      gregorian: [2020, 4, 23],
      hijri: [1441, 8, 30],
    },
    {
      gregorian: [2020, 4, 24],
      hijri: [1441, 9, 1],
    },
    {
      gregorian: [2020, 7, 20],
      hijri: [1442, 0, 1],
    },
    {
      gregorian: [2020, 10, 16],
      hijri: [1442, 3, 1],
    },
    {
      gregorian: [2020, 11, 16],
      hijri: [1442, 4, 1],
    },
    {
      gregorian: [2021, 0, 14],
      hijri: [1442, 5, 1],
    },
    {
      gregorian: [2021, 1, 13],
      hijri: [1442, 6, 1],
    },
    {
      gregorian: [2021, 1, 18],
      hijri: [1442, 6, 6],
    },
    {
      gregorian: [2021, 2, 10],
      hijri: [1442, 6, 26],
    },
    {
      gregorian: [2021, 2, 14],
      hijri: [1442, 7, 1],
    },
    {
      gregorian: [2021, 2, 27],
      hijri: [1442, 7, 14],
    },
    {
      gregorian: [2021, 3, 13],
      hijri: [1442, 8, 1],
    },
    {
      gregorian: [2021, 4, 8],
      hijri: [1442, 8, 26],
    },
    {
      gregorian: [2021, 4, 12],
      hijri: [1442, 8, 30],
    },
    {
      gregorian: [2021, 4, 13],
      hijri: [1442, 9, 1],
    },
    {
      gregorian: [2021, 4, 14],
      hijri: [1442, 9, 2],
    },
    {
      gregorian: [2021, 4, 15],
      hijri: [1442, 9, 3],
    },
    {
      gregorian: [2021, 5, 11],
      hijri: [1442, 10, 1],
    },
    {
      gregorian: [2021, 6, 11],
      hijri: [1442, 11, 1],
    },
    {
      gregorian: [2021, 6, 19],
      hijri: [1442, 11, 9],
    },
    {
      gregorian: [2021, 6, 20],
      hijri: [1442, 11, 10],
    },
    {
      gregorian: [2021, 6, 21],
      hijri: [1442, 11, 11],
    },
    {
      gregorian: [2021, 6, 22],
      hijri: [1442, 11, 12],
    },
    {
      gregorian: [2021, 6, 23],
      hijri: [1442, 11, 13],
    },
    {
      gregorian: [2021, 7, 9],
      hijri: [1443, 0, 1],
    },
    {
      gregorian: [2021, 7, 18],
      hijri: [1443, 0, 10],
    },
    {
      gregorian: [2021, 8, 8],
      hijri: [1443, 1, 1],
    },
    {
      gregorian: [2021, 9, 7],
      hijri: [1443, 2, 1],
    },
    {
      gregorian: [2021, 9, 17],
      hijri: [1443, 2, 11],
    },
    {
      gregorian: [2021, 10, 6],
      hijri: [1443, 3, 1],
    },
    {
      gregorian: [2021, 11, 5],
      hijri: [1443, 4, 1],
    },
    {
      gregorian: [2027, 0, 4],
      hijri: [1448, 6, 26],
    },
    {
      gregorian: [2023, 11, 12],
      hijri: [1445, 4, 29],
    },
  ];

  it.each(gregorianToHijri)(
    'can convert gregorian to hijri correctly. Test case: %#',
    ({ gregorian, hijri }) => {
      const d1 = new HijriDate().toHijri(new Date(gregorian[0], gregorian[1], gregorian[2]));
      expect(d1.compare(new HijriDate(hijri[0], hijri[1], hijri[2]))).toBe(0);
    },
  );
});
