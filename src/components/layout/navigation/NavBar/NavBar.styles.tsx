import * as React from 'react';
import {createUseStyles} from 'react-jss'
import {Theme} from "../../../../utils/constants/theme";

export const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        width: '100%',
        //backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'flex-end',
        height: 48,
        textAlign: 'center',
    },
    list: {
        padding: 0,
        margin: 0,
        display: 'block',
        width: '100%'
    }
}));