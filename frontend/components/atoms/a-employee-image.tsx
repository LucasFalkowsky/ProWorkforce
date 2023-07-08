import React from 'react';
import { Avatar } from 'antd';
import { getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';
import { Colors } from '@prisma/client';

type EmployeeImageProps = {
    employeeImagePath: string
    color: Colors
    shift?: boolean
}

const EmployeeImage: React.FC<EmployeeImageProps> = ({
    employeeImagePath, color, shift
}) => {
    return (
        <>
            <Avatar src={employeeImagePath} style={{
                outline: `${variables.outlineNoColor} ${getAntDesignColor(color)[6]}`, outlineOffset: variables.offsetOutline, marginLeft: shift ? variables.shiftLeft : '0px'
            }} />
        </>
    );
};

export { EmployeeImage, Colors };