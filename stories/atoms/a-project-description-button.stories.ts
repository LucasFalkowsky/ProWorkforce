import { ProjectDescriptionButton } from '../../frontend/components/atoms/a-project-description-button';
import { Meta, StoryObj } from '@storybook/react';

let edit = false;

const meta: Meta<typeof ProjectDescriptionButton> = {
    title: 'atoms/ProjectDescriptionButton',
    component: ProjectDescriptionButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectDescriptionButton>;

export const primary: Story = {
    args: {
        edit: edit
    },
};