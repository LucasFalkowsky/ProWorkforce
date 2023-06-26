import { CalculateTimeModal } from '../../../frontend/components/organisms/modals/o-calculate-time-modal';
import { Meta, StoryObj } from '@storybook/react';

let open = true;
const teams = [
    'research',
    'design',
    'development',
]

const meta: Meta<typeof CalculateTimeModal> = {
    title: 'organisms/modals/CalculateTimeModal',
    component: CalculateTimeModal,
    tags: ['autodocs'],
    parameters: {
        isOpen: open,
        setIsOpen: () => {open = !open},
    },
};

export default meta;
type Story = StoryObj<typeof CalculateTimeModal>;

export const openState: Story = {
    args: {
        isOpen: true,
    },
};

export const closedState: Story = {
    args: {
        isOpen: false,
    },
};