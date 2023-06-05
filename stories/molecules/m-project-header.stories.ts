import { ProjectHeader } from '../../frontend/components/molecules/m-project-header';
import { Meta, StoryObj } from '@storybook/react';
import imageFile from '../assets/example Project Icon.png';

const meta: Meta<typeof ProjectHeader> = {
    title: 'molecules/ProjectHeader',
    component: ProjectHeader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectHeader>;

export const primary: Story = {
    args: {
        projectImagePath: imageFile.src,
        projectName: 'Example Project Name',
    },
};