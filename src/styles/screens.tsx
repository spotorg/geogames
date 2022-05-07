import styled from "styled-components/native";

const CenterScreen = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
`;

const TopScreen = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 900;
`;

const CenterSSScreen = styled.View`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    CenterScreen,
    TopScreen,
    CenterSSScreen
}