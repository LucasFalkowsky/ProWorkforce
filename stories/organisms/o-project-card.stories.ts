import { ProjectCard } from '../../frontend/components/organisms/o-project-card';
import { Meta, StoryObj } from '@storybook/react';
import imageFile1 from '../assets/Amy Ferrah Fouler.png';
import imageFile2 from '../assets/Bernadette Rostenkowsky.png';
import imageFile3 from '../assets/Howard Wolowitz.png';
import imageFile4 from '../assets/Leonard Hofstatter.png';
import imageFile5 from '../assets/Penny Hofstatter.png';
import projectIcon from '../assets/Bazinga.png';
import { colors } from '../../frontend/styles/colors';
import { State } from '@prisma/client';

const startDate = new Date('2023-12-17T03:24:00');
const endDate = new Date('2024-01-17T03:24:00');

const meta: Meta<typeof ProjectCard> = {
    title: 'organisms/ProjectCard',
    component: ProjectCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const primary: Story = {
    args: {
        totalPhasesCount: 4,
        finishedPhasesCount: 2,
        employeeImageColors:[
            {employeeImagePath: imageFile1.src, color: colors.CYAN},
            {employeeImagePath: imageFile2.src, color: colors.GEEKBLUE},
            {employeeImagePath: imageFile3.src, color: colors.MAGENTA},
            {employeeImagePath: imageFile4.src, color: colors.GEEKBLUE},
            {employeeImagePath: imageFile5.src, color: colors.CYAN},
        ],
        projectIconPath: projectIcon.src,
        projectName: 'Bazinga',
        startDate: startDate,
        endDate: endDate,
        status: State.ONGOING,
    },
};