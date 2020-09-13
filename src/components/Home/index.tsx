import React, { useContext } from 'react';
import { FaEnvelope, FaUnlockAlt } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import {
    Container,
    View,
    FormContainer,
    ButtonSubmit,
    ContainerImage,
    Logo
} from './style';
import Input from '../Input';


const Home: React.FC = () => {
    const { title } = useContext(ThemeContext)

    return (
        <Container>
            <FormContainer>
                <View>
                    <Logo
                        src={ title === "dark" ? require(`../../assets/logo.svg`) : require(`../../assets/logo2.svg`) }
                        alt="logo" />
                    <Input
                        type="email"
                        placeholder="E-mail"
                        icon={<FaEnvelope size={25} />}
                    />
                    <Input
                        type="password"
                        placeholder="*******"
                        icon={<FaUnlockAlt size={25} />}
                    />
                    <ButtonSubmit>
                        Sign In
                    </ButtonSubmit>
                </View>
                <p style={{
                    color: "gray",
                    marginTop: 20
                }}>
                    Create count
                    </p>
            </FormContainer>
            <ContainerImage />
        </Container>
    );
}

export default Home;
