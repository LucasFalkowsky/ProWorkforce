import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useRouter } from 'next/router';

type DateRangeProps = {
    startDate: Date;
    endDate: Date;
    primary?: boolean;
}

const DateRange: React.FC<DateRangeProps> = ({
    startDate, endDate, primary,
}) => {
    const { Text } = Typography;
    const router = useRouter();

    const [lang, setLang] = useState<string>('en');

    useEffect(() => {
        const newLang = localStorage.getItem('lang') || router.locale || 'en';
        setLang(newLang);
      }, []);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <>
            <Text type={primary ? undefined : "secondary"}>{formatDate(startDate)} - {formatDate(endDate)}</Text>
        </>
    );
};

export { DateRange };