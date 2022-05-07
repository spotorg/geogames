import styled from "styled-components/native";

const AuthForm = styled.View`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    border-radius: 10px;
    background-color: #ffffff;
    margin: 0 0 20px 0;
`;

const StyledCreateGameForm = styled.View`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

export {
    AuthForm,
    StyledCreateGameForm
}