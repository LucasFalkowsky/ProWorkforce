import { DayData } from "../molecules/m-timeframe";

export function getHighestWorktime(days: DayData[]): number {
    let highestWorktime = 0;
  
    days.forEach((day) => {
        if (day.worktime > highestWorktime) {
            highestWorktime = day.worktime;
        }
    })
      
    return highestWorktime;
}

export function getHighestMaxWorktime(days: DayData[]): number {
    let highestMaxWorktime = 0;
  
    days.forEach((day) => {
        if (day.maxWorktime > highestMaxWorktime) {
            highestMaxWorktime = day.maxWorktime;
        }
    })
      
    return highestMaxWorktime;
};