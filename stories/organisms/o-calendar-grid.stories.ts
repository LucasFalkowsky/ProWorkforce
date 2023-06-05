import { colors } from '../../frontend/styles/colors';
import { WeekData } from '../../frontend/components/molecules/m-week-row';
import { CalendarGrid } from '../../frontend/components/organisms/o-calendar-grid';
import { Meta, StoryObj } from '@storybook/react';

const data: WeekData = {
    week: 45,
    days: [
      { day: 1, date: '2023-11-06' },
      { day: 2, date: '2023-11-07' },
      { day: 3, date: '2023-11-08' },
      { day: 4, date: '2023-11-09' },
      { day: 5, date: '2023-11-10', isNonWorkingDay: true },
      { day: 6, date: '2023-11-11', isNonWorkingDay: true },
      { day: 0, date: '2023-11-12', isNonWorkingDay: true },
    ],
};
  
const weekDataArray: WeekData[] = [];
  
// Helper function to add days to a given date
function addDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}
  
// Helper function to check if a given date is a weekend day (Saturday or Sunday)
function isWeekend(date: Date): boolean {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // 0: Sunday, 6: Saturday
}
  
// Helper function to check if a given date is a national holiday (DE, BY)
function isNationalHoliday(): boolean {
    return Math.random() < 0.1; // Probability of returning true is 1/20 = 0.05
}
  
// Generate 20 WeekData objects
for (let i = 0; i < 20; i++) {
    const previousWeekData = weekDataArray[i - 1];
    const previousDate = previousWeekData ? new Date(previousWeekData.days[6].date) : new Date(data.days[6].date);
    const newWeekData: WeekData = {
        week: data.week + i < 53 ? data.week + i : data.week + i - 52,
        days: [],
    };
  
    for (let j = 0; j < 7; j++) {
        const currentDate = addDays(previousDate, j + 1);
        const day: number = (j + 1) % 7; // Calculate the day number based on the current day index
    
        const isNonWorkingDay: boolean = isWeekend(currentDate) || isNationalHoliday();
    
        newWeekData.days.push({
            day,
            date: currentDate.toISOString().split('T')[0],
            isNonWorkingDay,
        });
    }
  
    weekDataArray.push(newWeekData);
}

const meta: Meta<typeof CalendarGrid> = {
    title: 'organisms/CalendarGrid',
    component: CalendarGrid,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CalendarGrid>;

export const primary: Story = {
    args: {
        weeks: weekDataArray,
        color: colors.CYAN,
    },
};