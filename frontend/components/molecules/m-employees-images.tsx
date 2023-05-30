import React from 'react';
import { EmployeeImage } from '../atoms/a-employee-image';
import { colors } from '../atoms/a-employee-image';

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
        <div style={{ display: "inline-flex", paddingLeft: "8px" }}>
            {employeeImageColors.map((item) => {
                return (
                    <div style={{ marginLeft: "-8px" }}>
                        <EmployeeImage employeeImagePath={item.employeeImagePath} color={item.color} />
                    </div>
                )
            })}
        </div>
    );
};

export { EmployeesImages };