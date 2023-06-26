import React, { useEffect, useState } from 'react';
import { Col, Row, Space } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';

type EmployeeTimeframeDayProps = {
    keyProp: string,
    color: colors,
    worktime: number,
    maxWorktime: number,
    date: string,
    isNonWorkingDay?: boolean,
    previousWorktime: number,
    nextWorktime: number,
    highestWorktimeValue: number,
}

const EmployeeTimeframeDay: React.FC<EmployeeTimeframeDayProps> = ({
    keyProp, color, worktime, maxWorktime, date, isNonWorkingDay, previousWorktime, nextWorktime, highestWorktimeValue
}) => {
    const red = getAntDesignColor(colors.RED);
    const [teamColor, setTeamColor] = useState(getAntDesignColor(color));

    const [allertBorderLeft, setAllertBorderLeft] = useState<string>();
    const [allertBorderRight, setAllertBorderRight] = useState<string>();
    const [allertBoxHeight, setAllertBoxHeight] = useState<number>(0);

    const [upperLeftBoxHeight, setUpperLeftBoxHeight] = useState<number>(0);
    const [upperRightBoxHeight, setUpperRightBoxHeight] = useState<number>(0);

    const teamCardHeight = parseInt(variables.teamCardHeight.replace('px', ''));
    const maxHeight = teamCardHeight - 10;
    const scaleFactor = maxHeight / highestWorktimeValue;
    const capacityLimitHeight = maxWorktime * scaleFactor;
    const currentHeight = scaleFactor * worktime;
    const nextHeight = scaleFactor * nextWorktime;
    const previousHeight = scaleFactor * previousWorktime;

    useEffect(() => {
        setTeamColor(getAntDesignColor(color));
        if ( !isNonWorkingDay && currentHeight > previousHeight ) {
            setUpperLeftBoxHeight(0);
        } else if (previousWorktime > maxWorktime) {
            setUpperLeftBoxHeight(capacityLimitHeight - (isNonWorkingDay ? 1 : currentHeight))
        } else {
            setUpperLeftBoxHeight(previousHeight - (isNonWorkingDay ? 1 : currentHeight))
        }
        if ( !isNonWorkingDay && currentHeight > nextHeight ) {
            setUpperRightBoxHeight(0);
        } else if ( nextWorktime > maxWorktime ) {
            setUpperRightBoxHeight(capacityLimitHeight - (isNonWorkingDay ? 1 : currentHeight))
        } else {
            setUpperRightBoxHeight(nextHeight - (isNonWorkingDay ? 1 : currentHeight))
        }
        if ( worktime > maxWorktime ) {
            setAllertBoxHeight(scaleFactor * (worktime - maxWorktime));
            if ( !previousWorktime || previousWorktime === 0 || previousWorktime < maxWorktime ) {
                setAllertBorderLeft(`${variables.thinBorderNoColor} ${red[5]}`);
            }
            if ( !nextWorktime || nextWorktime === 0 || nextWorktime < maxWorktime ) {
                setAllertBorderRight(`${variables.thinBorderNoColor} ${red[5]}`);
            }
        }
    }, [previousWorktime, nextWorktime, worktime, color]);

    return (
        <Col
            key={keyProp}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                width: variables.dayColumnWidth,
                maxHeight: variables.teamCardHeight,
                opacity: 0.5,
            }}
        >
            <Row
                style={{
                    width: variables.dayColumnWidth,
                    alignItems: 'flex-end',
                }}
            >
                <Col
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}
                >
                    {previousWorktime > maxWorktime && (
                        <div
                            style={{
                                borderLeft: `${variables.thinBorderNoColor} ${red[5]}`,
                                height: worktime <= maxWorktime ? previousHeight - capacityLimitHeight : previousHeight - currentHeight,
                            }}
                        />
                    )}
                    <div
                        style={{
                            borderLeft: `${variables.thinBorderNoColor} ${teamColor[5]}`,
                            height: upperLeftBoxHeight,
                        }}
                    />
                </Col>
                <Col 
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}
                >
                    {nextWorktime > maxWorktime && (
                        <div
                            style={{
                                borderRight: `${variables.thinBorderNoColor} ${red[5]}`,
                                height: worktime <= maxWorktime ? nextHeight - capacityLimitHeight : nextHeight - currentHeight,
                            }}
                        />
                    )}
                    <div
                        style={{
                            borderRight: `${variables.thinBorderNoColor} ${teamColor[5]}`,
                            height: upperRightBoxHeight,
                        }}
                    />
                </Col>
            </Row>
            {worktime > maxWorktime ? (
                <Col
                    id={`${date}-timeframe-day`}
                >
                    <Row
                        style={{
                            display: isNonWorkingDay ? 'none' : 'block',
                            height: `${allertBoxHeight}px`,
                            borderTop: `${variables.thinBorderNoColor} ${red[5]}`,
                            borderLeft: `${allertBorderLeft} ${red[5]}`,
                            borderRight: `${allertBorderRight} ${red[5]}`,
                            background: red[2],
                            boxShadow: `${variables.boxShadowUpwardsNoColor} ${red[5]}`,
                        }}
                    />
                    <Row
                        style={{
                            height: isNonWorkingDay ? 0 : `${capacityLimitHeight}px`,
                            width: variables.dayColumnWidth,
                            background: teamColor[2],
                            borderTop: `${variables.thinBorderNoColor} ${teamColor[5]}`,
                        }}
                    />
                </Col>
            ) : (
                <Row
                    id={`${date}-timeframe-day`}
                    style={{
                        height: isNonWorkingDay ? 0 : `${scaleFactor * worktime}px`,
                        width: variables.dayColumnWidth,
                        background: teamColor[2],
                        borderTop: `${variables.thinBorderNoColor} ${teamColor[5]}`,
                    }}
                />
            )}
        </Col>
    );
};

export { EmployeeTimeframeDay };