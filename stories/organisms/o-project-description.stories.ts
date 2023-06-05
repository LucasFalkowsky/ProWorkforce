import { ProjectDescription } from '../../frontend/components/organisms/o-project-description';
import { Meta, StoryObj } from '@storybook/react';

const exampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis ante, scelerisque vitae nisl quis, ultricies aliquet sem. Nam in sapien at enim luctus mollis suscipit a magna. Cras lobortis maximus elit, eget venenatis nulla rutrum eget. Nullam metus velit, vehicula sed porttitor eu, feugiat efficitur magna. Vivamus hendrerit sit amet diam ac eleifend. Donec ultricies, nibh a pulvinar ultrices, dui ante rutrum quam, vel condimentum augue tellus et metus. Fusce tristique justo neque, quis molestie orci rutrum in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse mollis dolor quis est venenatis rutrum in vitae dolor. Suspendisse suscipit efficitur massa ut dignissim. In vestibulum ipsum nec mi condimentum, eu pellentesque magna pellentesque. Aliquam sodales suscipit est, et consectetur est tristique eu.'

const meta: Meta<typeof ProjectDescription> = {
    title: 'organisms/ProjectDescription',
    component: ProjectDescription,
    tags: ['autodocs'],
    parameters: {
        description: exampleText,
    },
};

export default meta;
type Story = StoryObj<typeof ProjectDescription>;

export const primary: Story = {
    args: {
        description: exampleText,
    },
};