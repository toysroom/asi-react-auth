import { useState, createContext } from "react";
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeContextProvider = ( {children} ) => {

    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        setTheme( (theme === 'light') ? 'dark' : 'light' );
    }

    return (
        <ThemeContext.Provider value={
            {
                theme,
                switchTheme
            }
        }>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeContextProvider.propTypes = {
    children: PropTypes.object,
}