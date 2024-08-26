import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import '../../../i18n/i18n.js/index.js'

type DateRangeProps = {
    startDate: Date;
    endDate: Date;
    primary?: boolean;
}

const DateRange: React.FC<DateRangeProps> = ({
    startDate, endDate, primary,
}) => {
    const { t } = useTranslation();

    const { Text } = Typography;
    const router = useRouter();

    const formatDate = (date: Date) => {
        return date.toLocaleDateString(`${t('a-date-range-lang')}`, { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <>
            <Text type={primary ? undefined : "secondary"}>{formatDate(startDate)} - {formatDate(endDate)}</Text>
        </>
    );
};

export { DateRange };