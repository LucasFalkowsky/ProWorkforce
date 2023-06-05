import { ProjectInfobarElement } from '../../frontend/components/molecules/m-project-infobar-element';
import { Meta, StoryObj } from '@storybook/react';
import { getCrownIcon } from '../../frontend/components/atoms/a-get-ant-icons';

const meta: Meta<typeof ProjectInfobarElement> = {
    title: 'molecules/ProjectInfobarElement',
    component: ProjectInfobarElement,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectInfobarElement>;

export const primary: Story = {
    args: {
        icon: getCrownIcon(),
        title: 'customer',
        value: 'Customer Example Inc.',
    },
};