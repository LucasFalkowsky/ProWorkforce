import React from 'react';
import { Avatar } from 'antd';
import { red, yellow, orange, cyan, green, blue, purple, geekblue, magenta, volcano, gold, lime } from '@ant-design/colors';

enum colors {
    RED = 'red',
    YELLOW = 'yellow',
    ORANGE = 'orange',
    CYAN = 'cyan',
    GREEN = 'green',
    BLUE = 'blue',
    PURPLE = 'purple',
    GEEKBLUE = 'geekblue',
    MAGENTA = 'magenta',
    VOLCANO = 'volcano',
    GOLD = 'gold',
    LIME = 'lime',
}

type EmployeeImageProps = {
    employeeImagePath: string
    color: colors
}

const EmployeeImage: React.FC<EmployeeImageProps> = ({
    employeeImagePath, color
}) => {

    
    return (
        <>
            <Avatar src={employeeImagePath} style={{
                outline: `2px solid ${
                    color === colors.RED ? red[6] :
                    color === colors.YELLOW ? yellow[6] :
                    color === colors.ORANGE ? orange[6] :
                    color === colors.CYAN ? cyan[6] :
                    color === colors.GREEN ? green[6] :
                    color === colors.BLUE ? blue[6] :
                    color === colors.PURPLE ? purple[6] :
                    color === colors.GEEKBLUE ? geekblue[6] :
                    color === colors.MAGENTA ? magenta[6] :
                    color === colors.VOLCANO ? volcano[6] :
                    color === colors.GOLD ? gold[6] :
                    lime[6]
                }`,
                outlineOffset: '-3px',
            }} />
        </>
    );
};

export { EmployeeImage, colors };