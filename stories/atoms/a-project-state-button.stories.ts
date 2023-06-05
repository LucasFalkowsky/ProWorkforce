import { State } from '@prisma/client';
import { ProjectStateButton } from '../../frontend/components/atoms/a-project-state-button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProjectStateButton> = {
    title: 'atoms/ProjectStateButton',
    component: ProjectStateButton,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectStateButton>;

const displayState = (state: State) => {
    switch (state) {
        case State.DRAFT:
            return 'Draft';
        case State.ONGOING:
            return 'Ongoing';
        case State.COMPLETED:
            return 'Complete';
        case State.ARCHIVED:
            return 'Archived';
        default:
            return '';
    }
};

// Create a separate story for each state
export const draft: Story = {
    args: {
        status: State.DRAFT,
        setProjectStatus: (state) => {
            console.log(state);
        },
    },
};

export const ongoing: Story = {
    args: {
        status: State.ONGOING,
        setProjectStatus: (state) => {
            console.log(state);
        },
    },
};

export const completed: Story = {
    args: {
        status: State.COMPLETED,
        setProjectStatus: (state) => {
            console.log(state);
        },
    },
};

export const archived: Story = {
    args: {
        status: State.ARCHIVED,
        setProjectStatus: (state) => {
            console.log(state);
        },
    },
};

// Display the state in the story name
draft.storyName = displayState(State.DRAFT);
ongoing.storyName = displayState(State.ONGOING);
completed.storyName = displayState(State.COMPLETED);
archived.storyName = displayState(State.ARCHIVED);