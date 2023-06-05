import React from 'react';
import { EmployeeImage } from '../atoms/a-employee-image';
import { colors } from '../../styles/colors';
import { Row } from 'antd';

export type EmployeeImageProps = {
    employeeImagePath: string,
    color: colors,
}

type EmployeesImagesProps = {
    employeeImageColors: EmployeeImageProps[]
}

const EmployeesImages: React.FC<EmployeesImagesProps> = ({
    employeeImageColors,
}) => {
    return (
        <Row style={{ display: "inline-flex", paddingLeft: "8px" }}>
            {employeeImageColors.map((item) => {
                return (
                    <EmployeeImage employeeImagePath={item.employeeImagePath} color={item.color} shift/>
                )
            })}
        </Row>
    );
};

export { EmployeesImages };