import { EmployeesImages } from '../../frontend/components/molecules/m-employees-images';
import { Meta, StoryObj } from '@storybook/react';
import imageFile1 from '../assets/Amy Ferrah Fouler.png';
import imageFile2 from '../assets/Bernadette Rostenkowsky.png';
import imageFile3 from '../assets/Howard Wolowitz.png';
import imageFile4 from '../assets/Leonard Hofstatter.png';
import imageFile5 from '../assets/Penny Hofstatter.png';
import { Colors } from '@prisma/client';

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
            {employeeImagePath: imageFile1.src, color: Colors.CYAN},
            {employeeImagePath: imageFile2.src, color: Colors.GEEKBLUE},
            {employeeImagePath: imageFile3.src, color: Colors.MAGENTA},
            {employeeImagePath: imageFile4.src, color: Colors.GEEKBLUE},
            {employeeImagePath: imageFile5.src, color: Colors.CYAN},]
    },
};