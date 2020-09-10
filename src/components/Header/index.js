import React, { useState } from 'react';

import { Container } from './style';
import Switch from 'react-switch';

export default () => {
    const [checked, setChecked] = useState(false)

    function hendleChecked() {
        checked ? setChecked(false) : setChecked(true); 
    }

    return (
        <Container>
            <Switch 
                onChange={hendleChecked}
                checked={checked}
                offColor="#111"
                onColor="#FFF"
                onHandleColor="#111"
                checkedIcon={false}
                uncheckedIcon={false}
                width={56}
                height={28}
            />
        </Container>
    );
}
