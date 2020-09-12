import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    color: ${ props => props.theme.colors.text };
    display: flex;
`;

export const FormContainer = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerImage = styled.div`
    width: 50%;
    height: 100vh;
    background-image: url(${require("../../assets/bg.jpeg")});
    background-size: cover;
    border-left: 1px solid ${ props => props.theme.colors.primary };
`;

export const ButtonSubmit = styled.button`
    width: 95%;
    padding: 13px;
    margin: 10px;
    margin-top: 30px;
    background-color: ${ props => props.theme.colors.third };
    color: #fff;
    border: 1px solid ${ props => props.theme.colors.third };
    border-radius: 10px;
    cursor: pointer;
    transition: .2s ease-in;
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px black;

    &:hover {
        background-color: transparent;
        color: ${ props => props.theme.colors.third };
    }
`;

export const View = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Logo = styled.img`
    margin-bottom: 50px;
    padding: 10px;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
`;
