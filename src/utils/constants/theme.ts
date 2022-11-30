
export type Theme = {
    palette: {
        primary: {
            main: string,
        },
        secondary: {
            main: string,
        },
    }
}

const defaultTheme: Theme = {
    palette: {
        primary: {
            main: 'red',
        },
        secondary: {
            main: 'blue',
        },
    }
}
export default defaultTheme;