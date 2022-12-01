import * as React from 'react';
import {createUseStyles} from 'react-jss'
import {Theme} from "../../../../utils/constants/theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        listStyle: 'none',
        display: 'inline-block',
        textAlign: 'center',
        margin: '0 8px',
        padding: 0,
        fontSize: 16,
    },
    anchor: {
        height: 28,
        display: 'inline-block',
        borderBottom: `3px solid transparent`,
        padding: '0 8px',
        '&.active': {
            borderBottom: `3px solid ${theme.palette.secondary.main}`
        }
    }
}));