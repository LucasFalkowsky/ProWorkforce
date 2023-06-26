import { ProjectToolbar } from '../../frontend/components/organisms/o-project-toolbar';
import { Meta, StoryObj } from '@storybook/react';
import { State } from '@prisma/client';

const teams = [
    'research',
    'design',
    'development',
];

const meta: Meta<typeof ProjectToolbar> = {
    title: 'organisms/ProjectToolbar',
    component: ProjectToolbar,
    tags: ['autodocs'],
    parameters: {
        teams: teams,
    },
};

export default meta;
type Story = StoryObj<typeof ProjectToolbar>;

// Create a separate story for each state
export const draft: Story = {
    args: {
        teams: teams,
        status: State.DRAFT,
    },
};

export const ongoing: Story = {
    args: {
        teams: teams,
        status: State.ONGOING,
    },
};

export const completed: Story = {
    args: {
        teams: teams,
        status: State.COMPLETED,
    },
};

export const archived: Story = {
    args: {
        teams: teams,
        status: State.ARCHIVED,
    },
};

// Display the state in the story name
draft.storyName = State.DRAFT;
ongoing.storyName = State.ONGOING;
completed.storyName = State.COMPLETED;
archived.storyName = State.ARCHIVED;
