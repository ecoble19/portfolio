import React, {FC, ReactElement, ReactNode} from 'react'
import {ThemeProvider} from "react-jss";
import defaultTheme from "../constants/theme";
import {render, RenderOptions} from "@testing-library/react";

const AllTheProviders: FC<{children: ReactNode}> = ({children}) => {
    return (
        <ThemeProvider theme={defaultTheme}>
                {children}
        </ThemeProvider>
    )
}

const customRender = (ui: ReactElement, options: RenderOptions = {}) =>
    render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}