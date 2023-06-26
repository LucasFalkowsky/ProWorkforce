import { InfobarElement } from '../../frontend/components/molecules/m-project-infobar-element';
import { getCalendarIcon, getShareIcon, getProgressElement, getCrownIcon } from '../../frontend/components/atoms/a-get-ant-icons';
import { ProjectInfobar } from '../../frontend/components/organisms/o-project-infobar';
import { Meta, StoryObj } from '@storybook/react';

const infobarElements: InfobarElement[] = [
    { icon: getCalendarIcon(), title: 'startdate', value: '23.10.2023'},
    { icon: getCalendarIcon(), title: 'enddate', value: '23.10.2023'},
    { icon: getShareIcon(), title: 'phases', value: getProgressElement()},
    { icon: getCrownIcon(), title: 'customer', value: 'Max Mustermann inc.'},
];

const meta: Meta<typeof ProjectInfobar> = {
    title: 'organisms/ProjectInfobar',
    component: ProjectInfobar,
    tags: ['autodocs'],
    parameters: {
        infobarElements: infobarElements,
    },
};

export default meta;
type Story = StoryObj<typeof ProjectInfobar>;

export const primary: Story = {
    args: {
        infobarElements: infobarElements,
    },
};