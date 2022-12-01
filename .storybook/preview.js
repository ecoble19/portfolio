import {ThemeProvider} from "react-jss";
import defaultTheme from "../src/utils/constants/theme";
import {addDecorator} from "@storybook/react";
import '../src/App.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((story) => (
    <>
      <ThemeProvider theme={defaultTheme}>
              {story()}
      </ThemeProvider>
    </>
))