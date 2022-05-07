import styled from "styled-components/native";

const InputLabelContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 5px 0;
`;

const AuthQuestionContainer = styled.View`
    margin: 20px 0;
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export {
    InputLabelContainer,
    AuthQuestionContainer
}