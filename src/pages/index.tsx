import React from 'react';
import Global from '../style/global';

import Home from '../components/Home';
import Header from '../components/Header';

const App :React.FC = () => {
    return (
        <>
            <Global />
            <Header />
            <Home />
        </>
    )
}

export default App;
