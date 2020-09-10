import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    color: #f1f1f1;
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
    background-image: url(${ props => props.bg ? props.bg : "" });
    background-size: cover;
    border-left: 1px solid #666;
`;

export const ButtonSubmit = styled.button`
    width: 95%;
    padding: 13px;
    margin: 10px;
    margin-top: 30px;
    background-color: orange;
    color: #fff;
    border: 1px solid orange;
    border-radius: 10px;
    cursor: pointer;
    transition: .2s ease-in;
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px black;

    &:hover {
        background-color: transparent;
        color: orange;
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
