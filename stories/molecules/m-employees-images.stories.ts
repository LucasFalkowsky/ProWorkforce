import { EmployeesImages } from '../../frontend/components/molecules/m-employees-images';
import { Meta, StoryObj } from '@storybook/react';
import imageFile1 from '../assets/Amy Ferrah Fouler.png';
import imageFile2 from '../assets/Bernadette Rostenkowsky.png';
import imageFile3 from '../assets/Howard Wolowitz.png';
import imageFile4 from '../assets/Leonard Hofstatter.png';
import imageFile5 from '../assets/Penny Hofstatter.png';
import { colors } from '../../frontend/styles/colors';

const meta: Meta<typeof EmployeesImages> = {
    title: 'molecules/EmployeesImages',
    component: EmployeesImages,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmployeesImages>;

export const primary: Story = {
    args: {
        employeeImageColors:[
            {employeeImagePath: imageFile1.src, color: colors.CYAN},
            {employeeImagePath: imageFile2.src, color: colors.GEEKBLUE},
            {employeeImagePath: imageFile3.src, color: colors.MAGENTA},
            {employeeImagePath: imageFile4.src, color: colors.GEEKBLUE},
            {employeeImagePath: imageFile5.src, color: colors.CYAN},]
    },
};