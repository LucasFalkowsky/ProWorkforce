import React from 'react';
import { Avatar } from 'antd';
import { red, yellow, orange, cyan, green, blue, purple, geekblue, magenta, volcano, gold, lime } from '@ant-design/colors';
import { colors, getAntDesignColor } from '../../styles/colors';

type EmployeeImageProps = {
    employeeImagePath: string
    color: colors
    shift?: boolean
}

const EmployeeImage: React.FC<EmployeeImageProps> = ({
    employeeImagePath, color, shift
}) => {
    return (
        <>
            <Avatar src={employeeImagePath} style={{
                outline: `2px solid ${getAntDesignColor(color)[6]}`, outlineOffset: '-3px', marginLeft: shift ? '-8px' : '0px'
            }} />
        </>
    );
};

export { EmployeeImage, colors };