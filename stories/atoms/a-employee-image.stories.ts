import { EmployeeImage } from '../../frontend/components/atoms/a-employee-image';
import { Meta, StoryObj } from '@storybook/react';
import imageFile from '../assets/Amy Ferrah Fouler.png';
import { colors } from '../../frontend/styles/colors';

const meta: Meta<typeof EmployeeImage> = {
    title: 'atoms/EmployeeImage',
    component: EmployeeImage,
    tags: ['autodocs'],
    parameters: {
        color: colors.GEEKBLUE,
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
        color: colors.CYAN,
    },
};

export const geekblue: Story = {
    args: {
        employeeImagePath: imageFile.src,
        color: colors.GEEKBLUE,
    },
};

export const magenta: Story = {
    args: {
        employeeImagePath: imageFile.src,
        color: colors.MAGENTA,
    },
};

export const lime: Story = {
    args: {
        employeeImagePath: imageFile.src,
        color: colors.LIME,
    },
};