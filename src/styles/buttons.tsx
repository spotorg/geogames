import styled from "styled-components/native";

const SignUpButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    border-radius: 40px;
    background-color: #ffffff;
    border: 3px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 0 0;
`;

const SignInButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    border-radius: 40px;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AuthButton = styled.TouchableOpacity`
    width: 200px;
    height: 40px;
    border-radius: 40px;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AddFlagButton = styled.TouchableOpacity`
    width: 100%;
    height: 10%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BlackButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    SignUpButton,
    SignInButton,
    AuthButton,
    AddFlagButton,
    BlackButton
}