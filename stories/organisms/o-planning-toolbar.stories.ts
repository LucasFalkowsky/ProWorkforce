import { PlanningToolbar } from '../../frontend/components/organisms/o-planning-toolbar';
import { Meta, StoryObj } from '@storybook/react';
import { State } from '@prisma/client';
import { colors } from '../../frontend/styles/colors';

const team = 'development';

const meta: Meta<typeof PlanningToolbar> = {
    title: 'organisms/PlanningToolbar',
    component: PlanningToolbar,
    tags: ['autodocs'],
    parameters: {
        team: team,
    },
};

export default meta;
type Story = StoryObj<typeof PlanningToolbar>;

// Create a separate story for each state
export const draft: Story = {
    args: {
        team: team,
        teamColor: colors.GEEKBLUE,
        status: State.DRAFT,
        plannedTime: 120,
        optimisticGuess: 240,
        realisticGuess: 310,
        pessimisticGuess: 450,
    },
};

export const ongoing: Story = {
    args: {
        team: team,
        teamColor: colors.GEEKBLUE,
        status: State.ONGOING,
        optimisticGuess: 240,
        realisticGuess: 310,
        pessimisticGuess: 450,
    },
};

export const completed: Story = {
    args: {
        team: team,
        teamColor: colors.GEEKBLUE,
        status: State.COMPLETED,
        optimisticGuess: 240,
        realisticGuess: 310,
        pessimisticGuess: 450,
    },
};

export const archived: Story = {
    args: {
        team: team,
        teamColor: colors.GEEKBLUE,
        status: State.ARCHIVED,
        optimisticGuess: 240,
        realisticGuess: 310,
        pessimisticGuess: 450,
    },
};

// Display the state in the story name
draft.storyName = State.DRAFT;
ongoing.storyName = State.ONGOING;
completed.storyName = State.COMPLETED;
archived.storyName = State.ARCHIVED;
