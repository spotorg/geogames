import React from "react";
import styled from "styled-components/native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { selectUser, UserInfo } from "../../redux/slices/userSlice";
import { useNavigation } from "@react-navigation/core";
import { AppInfo, selectApp } from "../../redux/slices/appSlice";

export default function Navigation() {
    const userInfo: UserInfo = useSelector(selectUser);
    const appInfo: AppInfo = useSelector(selectApp);

    const navigation: any = useNavigation();

    return (
        <StyledNavigation>
            <StyledNavigationOptionContainer
                onPress={() => navigation.navigate("Home")}
            >
                <StyledNavigationOption name="home" />
            </StyledNavigationOptionContainer>

            <StyledNavigationOptionContainer
                onPress={() => navigation.navigate("Create")}
            >
                <StyledNavigationOption name="add-box" />
            </StyledNavigationOptionContainer>

            <StyledNavigationOptionContainer
                onPress={() => navigation.navigate("Map")}
            >
                <StyledNavigationOption name="location-on" />
            </StyledNavigationOptionContainer>
        </StyledNavigation>
    );
}

const StyledNavigation = styled.View`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 30px;
    background-color: #ffffff;
    min-height: 60px;
`;

const StyledNavigationOptionContainer = styled.TouchableOpacity`
    position: relative;
    z-index: 100;
`;

const StyledNavigationOption = styled(MaterialIcon)`
    font-size: 40px;
    z-index: 5;
`;

const StyledNavigationOption2 = styled(Ionicon)`
    font-size: 40px;
    z-index: 5;
`;

const StyledMaterialCommunityIcon = styled(MaterialCommunityIcon)`
    font-size: 40px;
    z-index: 5;
`;

const StyledNavigationProfile = styled.Image`
    width: 37px;
    height: 37px;
    border-radius: 5px;
`;

export { StyledNavigationOption2 };
