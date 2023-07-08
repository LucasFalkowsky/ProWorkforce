import { EmployeeImage } from '../../frontend/components/atoms/a-employee-image';
import { Meta, StoryObj } from '@storybook/react';
import imageFile from '../assets/Amy Ferrah Fouler.png';
import { Colors } from '@prisma/client';

const meta: Meta<typeof EmployeeImage> = {
    title: 'atoms/EmployeeImage',
    component: EmployeeImage,
    tags: ['autodocs'],
    parameters: {
        color: Colors.GEEKBLUE,
    }
};

export default meta;
type Story = StoryObj<typeof EmployeeImage>;

const image = {
  src: imageFile,
  alt: 'Amy Ferrah Fouler',
};

export const cyan: Story = {
    args: {
        employeeImagePath: imageFile.src,
        color: Colors.CYAN,
    },
};

export const geekblue: Story = {
    args: {
        employeeImagePath: imageFile.src,
        color: Colors.GEEKBLUE,
    },
};

export const magenta: Story = {
    args: {
        employeeImagePath: imageFile.src,
        color: Colors.MAGENTA,
    },
};

export const lime: Story = {
    args: {
        employeeImagePath: imageFile.src,
        color: Colors.LIME,
    },
};