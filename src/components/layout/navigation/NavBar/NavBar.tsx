import React, {FC, ReactElement, ReactNode} from 'react';
import {useStyles} from "./NavBar.styles";

type Props = {
    children: ReactNode
}

const NavBar: FC<Props> = ({children}) => {
    const classes = useStyles();
    return (
        <nav className={classes.root}>
            <ul className={classes.list}>
                {children}
            </ul>
        </nav>
    )
}

export default NavBar;