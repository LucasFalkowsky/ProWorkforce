import React from 'react';
import { EmployeeImage } from '../atoms/a-employee-image';
import { colors } from '../../styles/colors';
import { Row } from 'antd';
import variables from '../../styles/variables.module.scss';

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
        <Row style={{ display: "inline-flex", paddingLeft: variables.paddingStandard }}>
            {employeeImageColors.map((item) => {
                return (
                    <EmployeeImage employeeImagePath={item.employeeImagePath} color={item.color} shift/>
                )
            })}
        </Row>
    );
};

export { EmployeesImages };