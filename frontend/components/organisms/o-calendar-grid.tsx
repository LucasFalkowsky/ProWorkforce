import React, { useRef, useState } from 'react';
import { WeekData, WeekRow } from '../molecules/m-week-row';
import { Col, Row, Typography } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';

type YearWithOffset = {
    year: number,
    offset: number,
};

type CalendarGridProps = {
    weeks: WeekData[],
    color: colors,
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
    weeks, color
}) => {
    const { Title } = Typography;

    const firstYear = new Date(weeks[0].days[0].date).getFullYear();
    const initialYear: YearWithOffset = { year: firstYear, offset: 0 } as YearWithOffset;
    const [years, setyears] = useState<YearWithOffset[]>([initialYear]);

    return (
        <>
            <Col
                id='hide-scroll-bar'
                style={{
                    scrollbarWidth: 'none',
                    border: `1px solid ${getAntDesignColor(colors.NEUTRAL)[5]}`,
                    borderRadius: '2px',
                    overflowX: 'scroll',
                }}
            >
                <Row>
                {years.map((year, idx) => {
                    return (
                        <Title
                            level={3}
                            style={{
                                padding: '8px 0 0 8px',
                                transform: `translateX(${year.offset}px)`,
                                borderLeft: `${idx !== 0 && `1px solid ${getAntDesignColor(colors.NEUTRAL)[5]}`}`
                            }}
                        >
                            {year.year}
                        </Title>
                    )
                })}
                </Row>
                <Row style={{ flexWrap: 'nowrap', height: '100%' }}>
                {weeks.map((week, index) => {
                    return (
                        <WeekRow
                            key={week.week}
                            weekData={week}
                            color={color}
                            isStart={index === 10}
                            setNewYear={(year, offsetX) => {
                                setyears([...years, { year, offset: offsetX - 4 }]);
                            }}
                        />
                    );
                })}
                </Row>
            </Col>
        </>
    );
};

export { CalendarGrid };