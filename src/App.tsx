import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./views/Home/HomePage/HomePage";
import defaultTheme from "./utils/constants/theme";
import {createTheming, ThemeProvider} from "react-jss";


const ThemeContext = React.createContext({})

// Creating a namespaced theming object.
const theming = createTheming(ThemeContext)

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <div className="App">
                <header className="App-header">
                    <HomePage/>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </ThemeProvider>
    );
}

export default App;
