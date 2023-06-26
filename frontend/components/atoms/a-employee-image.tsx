import React from 'react';
import { Avatar } from 'antd';
import { colors, getAntDesignColor } from '../../styles/colors';
import variables from '../../styles/variables.module.scss';

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
                outline: `${variables.outlineNoColor} ${getAntDesignColor(color)[6]}`, outlineOffset: variables.offsetOutline, marginLeft: shift ? variables.shiftLeft : '0px'
            }} />
        </>
    );
};

export { EmployeeImage, colors };