import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container } from './style';
import Switch from 'react-switch';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { title } = useContext(ThemeContext);

    return (
        <Container>
            <Switch
                onChange={toggleTheme}
                checked={ title === "light" }
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

export default Header;
