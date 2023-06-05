import React, { useEffect, useState } from 'react';
import { Col } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';

type DayColumnProps = {
    key: number,
    color: colors,
    date: string,
    isNonWorkingDay?: boolean,
    isNewYear: (offsetX: number) => void,
}

const DayColumn: React.FC<DayColumnProps> = ({
    key, color, date, isNonWorkingDay, isNewYear
}) => {
    const [bgColor, setBgColor] = useState<string>(isNonWorkingDay ? getAntDesignColor(colors.NEUTRAL)[2] : getAntDesignColor(colors.NEUTRAL)[0]);

    const today = new Date(date);

    useEffect(() => {
        if(today.getDate() === 1 && today.getMonth() === 0) {
            const element = document.getElementById(`${date}-column`);
            if (!element) {
                return;
            }
            const bounding = element.getBoundingClientRect();
            isNewYear(bounding.x);
        }
    }, []);

    return (
        <>
            <Col
                id={`${date}-column`}
                key={key}
                style={{
                    width: '15px',
                    height: '100%',
                    borderRight: `1px solid ${getAntDesignColor(colors.NEUTRAL)[4]}`,
                    backgroundColor: bgColor
                }}
                onMouseEnter={() => isNonWorkingDay ? setBgColor(getAntDesignColor(colors.NEUTRAL)[3]) : setBgColor(getAntDesignColor(color)[1])}
                onMouseLeave={() => setBgColor(isNonWorkingDay ? getAntDesignColor(colors.NEUTRAL)[2] : getAntDesignColor(colors.NEUTRAL)[0])}
            />
        </>
    );
};

export { DayColumn };