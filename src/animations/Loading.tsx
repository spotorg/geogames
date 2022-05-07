import AnimatedLottieView from 'lottie-react-native';
import React from 'react'
import styled from 'styled-components/native';
import * as LoadingJson from "../../assets/animations/loading.json";

export default function Loading() {
    return (
        <StyledAnimationContainer>
            <StyledAnimation source={LoadingJson} autoPlay loop />
        </StyledAnimationContainer>
    )
}

const StyledAnimationContainer = styled.View`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledAnimation = styled(AnimatedLottieView)`
    width: 50px;
    height: 50px;
`;