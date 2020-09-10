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
        fill: orange;
    }
`;

export const Input = styled.input`
    width: 400px;
    padding: 15px 0px 15px 80px;
    background-color: transparent;
    color: #f1f1f1;
    border: 1px solid #f1f1f1;
    border-radius: 9px;
    transition: .2s ease-in;

    &:focus {
        border: 1px solid orange;
    }
`;
