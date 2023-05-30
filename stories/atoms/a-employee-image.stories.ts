import { EmployeeImage } from '../../frontend/components/atoms/a-employee-image';
import { Meta, StoryObj } from '@storybook/react';
import imageFile from '../assets/Amy Ferrah Fouler.png';

enum colors {
    PINK = 'pink',
    RED = 'red',
    YELLOW = 'yellow',
    ORANGE = 'orange',
    CYAN = 'cyan',
    GREEN = 'green',
    BLUE = 'blue',
    PURPLE = 'purple',
    GREEKBLUE = 'geekblue',
    MAGENTA = 'magenta',
    VOLCANO = 'volcano',
    GOLD = 'gold',
    LIME = 'lime',
}

const meta: Meta<typeof EmployeeImage> = {
    title: 'atoms/EmployeeImage',
    component: EmployeeImage,
    tags: ['autodocs'],
    parameters: {
        color: colors,
    }
};

export default meta;
type Story = StoryObj<typeof EmployeeImage>;

const image = {
  src: imageFile,
  alt: 'Amy Ferrah Fouler',
};

export const pink: Story = {
    args: {
        employeeImagePath: imageFile.src,
        color: colors.PINK,
    },
};

export const greekblue: Story = {
    args: {
        employeeImagePath: imageFile.src,
        color: colors.GREEKBLUE,
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