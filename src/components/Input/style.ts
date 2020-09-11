import styled from 'styled-components';

export const InputGroup = styled.div`
    padding: 10px;
    position: relative;
`;

export const InputPrepend = styled.div`
    position: absolute;
    top: 25px;
    left: 35px;

    svg {
        fill: ${ props => props.theme.colors.third };
    }
`;

export const InputContent = styled.input`
    width: 400px;
    padding: 15px 0px 15px 80px;
    background-color: transparent;
    color: ${ props => props.theme.colors.text };
    border: 1px solid ${ props => props.theme.colors.primary };
    border-radius: 9px;
    transition: .2s ease-in;

    &:focus {
        border: 1px solid orange;
    }
`;
