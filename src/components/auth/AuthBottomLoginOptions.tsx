import React from 'react'
import styled from 'styled-components/native';
import { BlackText } from '../../styles/text';

export default function AuthBottomLoginOptions() {
  return (
    <StyledBottomContainer>
      <StyledBottomContainerButton>
        <ButtonIcon
            source={{uri: "https://www.siatechschools.org/wp-content/uploads/2016/07/new-google-favicon-logo.png"}}
            resizeMode="cover"
        />

        <BlackText>Continue with google</BlackText>
      </StyledBottomContainerButton>

      <StyledBottomContainerButton>

      <ButtonIcon
            source={{uri: "https://pngroyale.com/wp-content/uploads/2021/07/facebook-logo-png-rounded.png"}}
            resizeMode="cover"
        />

        <BlackText>Continue with facebook</BlackText>
          
      </StyledBottomContainerButton>
    </StyledBottomContainer>
  )
}

const StyledBottomContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledBottomContainerButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 40px;
    border-radius: 40px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10;
    flex-direction: row;
`;

const ButtonIcon = styled.Image`
    height: 30px;
    width: 30px;
    margin-right: 5px;
`;