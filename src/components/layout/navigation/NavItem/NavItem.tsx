import React, {FC} from 'react';
import {useStyles} from "./NavItem.styles";
import clsx from "clsx";

type Props = {
    title: string
    active: boolean
    onClick(): void
}

const NavItem: FC<Props> = ({title, active, onClick}) => {
    const classes = useStyles();
    return (
        <li className={clsx(classes.root, active ? 'active' : null)}><a title={title} onClick={onClick}>{title}</a></li>
    )
}

export default NavItem;