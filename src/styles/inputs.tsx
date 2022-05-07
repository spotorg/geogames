import styled from "styled-components/native";

const AuthInput = styled.TextInput`
    width: 100%;
    height: 35px;
    border: 1px solid lightgray;
    padding: 0 10px;
    border-radius: 5px;
`;

const CreateInput = styled.TextInput`
    width: 100%;
    height: 50px;
    border: 1px solid lightgray;
    padding: 0 10px;
    border-radius: 5px;
    font-size: 16px;
`;

export {
    AuthInput,
    CreateInput
}