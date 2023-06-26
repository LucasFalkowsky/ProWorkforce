import React, { useEffect, useState } from 'react';
import { Col } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';

type DayColumnProps = {
    color: colors,
    date: string,
    isNonWorkingDay?: boolean,
    isNewYear: (offsetX: number) => void,
}

const DayColumn: React.FC<DayColumnProps> = ({
    color, date, isNonWorkingDay, isNewYear
}) => {
    const [bgColor, setBgColor] = useState<string>(isNonWorkingDay ? getAntDesignColor(colors.NEUTRAL)[2] : getAntDesignColor(colors.NEUTRAL)[0]);

    const today = new Date(date);

    useEffect(() => {
        const dayColumnHTMLElement = document.getElementById(`${date}-column`);
        if(today.getDate() === 1 && today.getMonth() === 0) {
            if (!dayColumnHTMLElement) { return; }
            const bounding = dayColumnHTMLElement.getBoundingClientRect();
            isNewYear(bounding.x);
        }
    }, []);

    const handleMouseDown = () => {
        const dayColumnHTMLElement = document.getElementById(`${date}-column`);
        if (!dayColumnHTMLElement) { return; }
        const xCoordinate = dayColumnHTMLElement.getBoundingClientRect().x;
    };
    const handleMouseUp = () => {
        const dayColumnHTMLElement = document.getElementById(`${date}-column`);
        if (!dayColumnHTMLElement) { return; }
        const xCoordinate = dayColumnHTMLElement.getBoundingClientRect().x;
    };

    return (
        <>
            <Col
                id={`${date}-column`}
                style={{
                    width: variables.dayColumnWidth,
                    height: '100%',
                    borderRight: `${variables.thinBorderNoColor} ${getAntDesignColor(colors.NEUTRAL)[4]}`,
                    backgroundColor: bgColor
                }}
                onMouseEnter={() => isNonWorkingDay ? setBgColor(getAntDesignColor(colors.NEUTRAL)[3]) : setBgColor(getAntDesignColor(color)[3])}
                onMouseLeave={() => setBgColor(isNonWorkingDay ? getAntDesignColor(colors.NEUTRAL)[2] : getAntDesignColor(colors.NEUTRAL)[0])}
                onMouseDown={() => handleMouseDown()}
                onMouseUp={() => handleMouseUp()}
            />
        </>
    );
};

export { DayColumn };