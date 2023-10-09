import { Ref } from "vue";
import { HijriDate } from "./util/HijriDate";

export type SupportedLanguage =
  | "ar"
  | "az"
  | "de"
  | "en"
  | "es"
  | "fa"
  | "fr"
  | "id"
  | "it"
  | "kk"
  | "ko"
  | "ky"
  | "ms"
  | "ru"
  | "tr"
  | "zh";

export type RemainingTimeFormat =
  | "XX:YY:ZZ"
  | "XX:YY"
  | `X hour Y minute Z second`
  | `X hour Y minute`;

type _1To9 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type _0To9 = 0 | _1To9;
type _0To5 = 0 | 1 | 2 | 3 | 4 | 5;
type _0To3 = 0 | 1 | 2 | 3;

export type HourString =
  | `${0 | 1}${_0To9}:${_0To5}${_0To9}`
  | `${2}${_0To3}:${_0To5}${_0To9}`;

export interface RemainingToPray {
  currPrayIdx: Ref<number>;
  remainingTime: Ref<string>;
}

export interface DateStringFormat {
  year: "YYYY" | "YY" | "-";
  month: "MMMM" | "MMM" | "MM";
  weekDay: "DDDD" | "DDD" | "-";
}

export interface Sabbatical {
  month: number;
  day: number;
  name: string;
}

export interface SabbaticalCalendar {
  hijri: HijriDate;
  gregorian: Date;
  sabbatical: Sabbatical;
}
