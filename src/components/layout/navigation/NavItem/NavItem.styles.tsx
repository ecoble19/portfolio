import * as React from 'react';
import {createUseStyles} from 'react-jss'
import {Theme} from "../../../../utils/constants/theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        listStyle: 'none',
        display: 'inline-block',
        textAlign: 'center',
        borderBottom: `4px solid transparent`,
        '&.active': {
            borderBottom: `4px solid ${theme.palette.primary.main}`
        }
    },
}));