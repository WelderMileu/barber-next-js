import React from 'react';
import Global from '../style/global';

import Home from '../components/Home';
import Header from '../components/Header';

export default () => {
    return (
        <>
            <Global />
            <Header />
            <Home />
        </>
    )
}
