import React, { useEffect, useState } from 'react';
import { Col } from 'antd';
import { getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { Colors } from '@prisma/client';
import { useTranslation } from 'react-i18next';

type DayColumnProps = {
    color: Colors,
    date: string,
    isNonWorkingDay?: boolean,
    selected: boolean,
    isNewYear: (offsetX: number) => void,
    onOver: (day: string) => void,
    onDown: (day: string, offsetX: number) => void,
    onUp: (day: string) => void,
}

const DayColumn: React.FC<DayColumnProps> = ({
    color, date, isNonWorkingDay, selected, isNewYear, onOver, onDown, onUp,
}) => {
    const { t } = useTranslation();
    const [bgColor, setBgColor] = useState<string>(isNonWorkingDay ? getAntDesignColor(Colors.NEUTRAL)[2] : getAntDesignColor(Colors.NEUTRAL)[0]);
    const selectedColor = selected ? getAntDesignColor(color)[3] : undefined;

    const today = new Date(date);

    useEffect(() => {
        const dayColumnHTMLElement = document.getElementById(`${date}-column`);
        if(today.getDate() === 1 && today.getMonth() === 0) {
            if (!dayColumnHTMLElement) { return; }
            const bounding = dayColumnHTMLElement.getBoundingClientRect();
            isNewYear(bounding.x);
        }
    }, []);

    const formatDate = (dateString: Date) => {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString(`${t('a-date-range-lang')}`);
        return formattedDate;
    };

    const handleMouseEnter = () => {
        onOver(formatDate(today));
        if (selected) return;
        setBgColor(isNonWorkingDay ? getAntDesignColor(Colors.NEUTRAL)[3] : getAntDesignColor(color)[3]);
    };

    const handleMouseLeave = () => {
        if (selected) return;
        setBgColor(isNonWorkingDay ? getAntDesignColor(Colors.NEUTRAL)[2] : getAntDesignColor(Colors.NEUTRAL)[0])
    };

    const handleMouseDown = () => {
        const dayColumnHTMLElement = document.getElementById(`${date}-column`);
        if (!dayColumnHTMLElement) { return; }
        const xCoordinate = dayColumnHTMLElement.getBoundingClientRect().x;
        onDown(formatDate(today), xCoordinate);
    };
    const handleMouseUp = () => {
        onUp(formatDate(today));
    };

    return (
        <Col
            id={`${date}-column`}
            style={{
                width: variables.dayColumnWidth,
                height: '100%',
                borderRight: `${variables.thinBorderNoColor} ${getAntDesignColor(Colors.NEUTRAL)[4]}`,
                backgroundColor: selectedColor ? selectedColor : bgColor
            }}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            onMouseDown={() => handleMouseDown()}
            onMouseUp={() => handleMouseUp()}
        />
    );
};

export { DayColumn };