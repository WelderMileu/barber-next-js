import React from 'react';
import { FaEnvelope, FaUnlockAlt } from 'react-icons/fa';

import {
    Container,
    View,
    FormContainer,
    ButtonSubmit,
    ContainerImage,
    Logo
} from './style';
import Input from '../Input';

const Home :React.FC = () => {
    return (
        <Container>
            <FormContainer>
                <View>
                    <Logo 
                        src={require(`../../assets/logo.svg`)} 
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
            <ContainerImage bg={require(`../../assets/bg.jpeg`)} />
        </Container>
    );
}

export default Home;
