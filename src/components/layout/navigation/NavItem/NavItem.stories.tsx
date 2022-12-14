// YourComponent.stories.js|jsx

import NavItem from './NavItem';

//π This default export determines where your story goes in the story list
export default {
    /* π The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Nav Item',
    component: NavItem,
    argTypes: {onClick: {action: 'clicked'}}
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args: any) => <NavItem {...args} />;

export const Inactive = {
    args: {
        //π The args you need here will depend on your component
        title: 'Inactive',
        active: false
    },
};

export const Active = {
    args: {
        //π The args you need here will depend on your component
        title: 'Active',
        active: true
    },
};
