import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./views/Home/HomePage/HomePage";
import defaultTheme from "./utils/constants/theme";
import {createTheming, ThemeProvider} from "react-jss";
import NavBar from "components/layout/navigation/NavBar/NavBar";
import NavItem from "components/layout/navigation/NavItem/NavItem";


const ThemeContext = React.createContext({})

// Creating a namespaced theming object.
const theming = createTheming(ThemeContext)
type Page = "home";

function App() {
    const page: Page = "home";

    function navigate(u: string) {
        //set url here
        console.log('clicked');
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <div style={{background: '#333', height: '100%', minHeight: '100vh', color: '#ccc'}}>
                <NavBar>
                    <NavItem title={"Home"} active={page === "home"} onClick={() => navigate("home")} />
                </NavBar>
                <HomePage/>
            </div>
        </ThemeProvider>
    );
}

export default App;
