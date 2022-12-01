
type PaletteColor = {
    dark: string,
    main: string,
    light: string,
    contrastText: string
}
export type Theme = {
    palette: {
        type: 'light' | 'dark',
        primary: PaletteColor,
        secondary: PaletteColor,
    },
    fontFamily: string
}

const defaultTheme: Theme = {
    palette: {
        type: 'light',
        primary: {
            light: 'rgb(108, 126, 154)',
            main: '#485E81',
            dark: 'rgb(50, 65, 90)',
            contrastText: '#fff'
        },
        secondary: {
            light: 'rgb(143, 214, 185)',
            main: '#73CCA8',
            dark: 'rgb(80, 142, 117)',
            contrastText: 'rgba(0, 0, 0, 0.87)'
        },
    },
    fontFamily: '"Titillium Web", sans-serif'
}
export default defaultTheme;