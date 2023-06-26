import { DayData } from "../molecules/m-employee-timeframe";

export function getHighestWorktime(days: DayData[]): number {
    let highestWorktime = 0;
  
    days.forEach((day) => {
        if (day.worktime > highestWorktime) {
            highestWorktime = day.worktime;
        }
    })
      
    return highestWorktime;
  }