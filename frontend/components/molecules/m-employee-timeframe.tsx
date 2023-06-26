import React from 'react';
import { Row } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';
import { EmployeeTimeframeDay } from '../atoms/a-employee-timeframe-day';
import variables from '../../styles/variables.module.scss';
import { getHighestWorktime } from '../utils/get-hightest-worktime';

export type DayData = {
    date: string,
    worktime: number,
    maxWorktime: number,
    isNonWorkingDay?: boolean,
}

export type EmployeeTimeframeProps = {
    dayData: DayData[],
    color: colors,
}

const EmployeeTimeframe: React.FC<EmployeeTimeframeProps> = ({
    dayData, color
}) => {
    const dashBorderColor = getAntDesignColor(color)[5];
    const highestWorktime = getHighestWorktime(dayData);

    const teamCardHeight = parseInt(variables.teamCardHeight.replace('px', ''));
    const maxHeight = teamCardHeight - 10;
    const scaleFactor = maxHeight / highestWorktime;

    return (
        <>
            <Row
                style={{
                    height: variables.teamCardHeight,
                    display: 'inline-flex',
                    flexWrap: 'nowrap',
                    alignItems: 'flex-end',
                }}
            >
                {dayData.map((day, idx) => {
                    const previousWorktime = idx === 0 || dayData[idx - 1].isNonWorkingDay ? 0 : dayData[idx - 1].worktime;
                    const nextWorktime = idx === dayData.length - 1 || dayData[idx + 1].isNonWorkingDay ? 0 : dayData[idx + 1].worktime;

                    const capacityLimitHeight = day.maxWorktime * scaleFactor;
                    const previousCapacityLimitHeigth = idx === 0 || dayData[idx - 1].isNonWorkingDay ? 0 : dayData[idx - 1].maxWorktime * scaleFactor;
                    const previousisNonWorkingDay = idx === 0 || dayData[idx - 1].isNonWorkingDay ? true : false;

                    let currentLimitBorderHeight = 0;
                    let limitBorderMarginBottom = 0;

                    if (previousisNonWorkingDay || day.isNonWorkingDay) {
                        limitBorderMarginBottom = 0;
                    } else if (previousCapacityLimitHeigth > capacityLimitHeight) {
                        limitBorderMarginBottom = capacityLimitHeight;
                    } else if (previousCapacityLimitHeigth < capacityLimitHeight) {
                        limitBorderMarginBottom = previousCapacityLimitHeigth;
                    } else {
                        limitBorderMarginBottom = capacityLimitHeight;
                    }

                    if (previousCapacityLimitHeigth !== capacityLimitHeight || previousisNonWorkingDay || day.isNonWorkingDay) {
                        if (previousisNonWorkingDay && day.isNonWorkingDay) {
                            return;
                        } else if (previousisNonWorkingDay) {
                            currentLimitBorderHeight = capacityLimitHeight;
                        } else if (day.isNonWorkingDay) {
                            currentLimitBorderHeight = previousCapacityLimitHeigth;
                        } else {
                            currentLimitBorderHeight = Math.abs((previousCapacityLimitHeigth - capacityLimitHeight));
                        } 
                    }

                    return (
                        <div
                            key={`${idx}-Key`}
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                flexDirection: 'column',
                                width: variables.dayColumnWidth,
                            }}
                        >
                            <div style={{
                                width: 'inherit',
                                height: capacityLimitHeight,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'end',
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    marginLeft: variables.borderMaxCapOffset,
                                    marginBottom: limitBorderMarginBottom,
                                    height: currentLimitBorderHeight,
                                    width: variables.maxWorktimeBorderThickness,

                                    backgroundImage: `repeating-linear-gradient(0deg, ${dashBorderColor}, ${dashBorderColor} 6px, transparent 6px, transparent 16px, ${dashBorderColor} 16px), repeating-linear-gradient(90deg, ${dashBorderColor}, ${dashBorderColor} 6px, transparent 6px, transparent 16px, ${dashBorderColor} 16px), repeating-linear-gradient(180deg, ${dashBorderColor}, ${dashBorderColor} 6px, transparent 6px, transparent 16px, ${dashBorderColor} 16px), repeating-linear-gradient(270deg, ${dashBorderColor}, ${dashBorderColor} 6px, transparent 6px, transparent 16px, ${dashBorderColor} 16px)`,
                                    backgroundSize: '2px 100%, 100% 2px, 2px 100% , 100% 2px',
                                    backgroundPosition: '0 0, 0 0, 100% 0, 0 100%',
                                    backgroundRepeat: 'no-repeat'
                                }}/>
                                <div style={{
                                    marginBottom: day.isNonWorkingDay ? 0 : capacityLimitHeight,
                                    height: variables.maxWorktimeBorderThickness,
                                    width: 'inherit',

                                    backgroundImage: `repeating-linear-gradient(0deg, ${dashBorderColor}, ${dashBorderColor} 6px, transparent 6px, transparent 16px, ${dashBorderColor} 16px), repeating-linear-gradient(90deg, ${dashBorderColor}, ${dashBorderColor} 6px, transparent 6px, transparent 16px, ${dashBorderColor} 16px), repeating-linear-gradient(180deg, ${dashBorderColor}, ${dashBorderColor} 6px, transparent 6px, transparent 16px, ${dashBorderColor} 16px), repeating-linear-gradient(270deg, ${dashBorderColor}, ${dashBorderColor} 6px, transparent 6px, transparent 16px, ${dashBorderColor} 16px)`,
                                    backgroundSize: '2px 100%, 100% 2px, 2px 100% , 100% 2px',
                                    backgroundPosition: '0 0, 0 0, 100% 0, 0 100%',
                                    backgroundRepeat: 'no-repeat',
                                }} />
                            </div>
                            <EmployeeTimeframeDay
                                keyProp={`${idx}`}
                                color={color}
                                worktime={day.worktime}
                                maxWorktime={day.maxWorktime}
                                date={day.date}
                                isNonWorkingDay={day.isNonWorkingDay}
                                previousWorktime={previousWorktime}
                                nextWorktime={nextWorktime}
                                highestWorktimeValue={highestWorktime}
                            />
                        </div>
                    )
                })}
            </Row>
        </>
    );
};

export { EmployeeTimeframe };