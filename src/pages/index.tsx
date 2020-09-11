import React, { useState } from 'react';
import Global from '../style/global';
import { ThemeProvider } from 'styled-components';

import Home from '../components/Home';
import Header from '../components/Header';

import light from '../style/theme/light';
import dark from '../style/theme/dark';

const App: React.FC = () => {
    const [theme, setTheme] = useState(light);

    function toggleTheme() {
        theme === light ? setTheme(dark) : setTheme(light);
    }

    return (
        <>
            <ThemeProvider theme={theme} >
                <Global />
                <Header toggleTheme={toggleTheme} />
                <Home />
            </ThemeProvider>
        </>
    )
}

export default App;
