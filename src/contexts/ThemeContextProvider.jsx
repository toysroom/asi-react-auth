import { useState, createContext } from "react";
import PropTypes from 'prop-types';

// type THEME = 'dark' | 'light';

const _THEME_DARK = 'dark';
const _THEME_LIGHT = 'light';

export const ThemeContext = createContext(_THEME_LIGHT);

export const ThemeContextProvider = ( {children} ) => {

    const [theme, setTheme] = useState(_THEME_LIGHT);

    const switchTheme = () => {
        setTheme( (theme === _THEME_LIGHT) ? _THEME_DARK : _THEME_LIGHT );
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