import React, {FC} from 'react';

type NavSelection = 'home';
type Props = {
    selected?: NavSelection
}

const NavItem: FC<

const NavBar: FC<Props> = ({selected}) => (
    <nav>
        <ul>
            <li><a title={"Home"}>Home</a></li>
        </ul>
    </nav>
)