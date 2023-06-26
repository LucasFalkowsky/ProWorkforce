import { Meta, StoryObj } from '@storybook/react';
import { colors } from '../../frontend/styles/colors';
import { DayData, EmployeeTimeframe } from '../../frontend/components/molecules/m-employee-timeframe';
import { randomInt } from 'crypto';

const data: DayData = {
    date: '2023-11-06',
    worktime: 12,
    maxWorktime: 16,
};
  
const dayDataArray: DayData[] = [];
  
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
const worktime = [8, 14, 20];
for (let i = 0; i < 20; i++) {
    const previousWeekData = dayDataArray[i - 1];
    const previousDate = previousWeekData ? new Date(previousWeekData.date) : new Date(data.date);
  
    for (let j = 0; j < 7; j++) {
        const currentDate = addDays(previousDate, j + 1);
        // const day: number = (j + 1) % 7; // Calculate the day number based on the current day index
    
        const isNonWorkingDay: boolean = isWeekend(currentDate) || isNationalHoliday();
    
        dayDataArray.push({
            date: currentDate.toISOString().split('T')[0],
            worktime: worktime[Math.floor(Math.random()*worktime.length)],
            maxWorktime: 14,
            isNonWorkingDay,
        });

    }
}


const meta: Meta<typeof EmployeeTimeframe> = {
    title: 'molecules/EmployeeTimeframe',
    component: EmployeeTimeframe,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmployeeTimeframe>;

export const primary: Story = {
    args: {
        dayData: dayDataArray,
        color: colors.CYAN,
    },
};