

import NavBar from './NavBar';
import NavItem from "../NavItem/NavItem";

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'NavBar',
    component: NavBar
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any) => <NavBar {...args} />;

export const Default = {
    args: {
        children: [<NavItem title={"First"} active={true} onClick={() => {}} />,
            <NavItem title={"Second"} active={false} onClick={() => {}} />,
            <NavItem title={"Third"} active={false} onClick={() => {}} />]
    },
};

