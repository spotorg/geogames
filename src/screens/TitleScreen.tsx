import { useNavigation } from "@react-navigation/native";
import React from "react"
import { useSelector } from "react-redux";
import { LanguageInfo, selectLanguage } from "../redux/slices/languageSlice";
import { selectUser, UserInfo } from "../redux/slices/userSlice";
import { SignInButton, SignUpButton } from "../styles/buttons";
import { CenterScreen } from "../styles/screens";
import { SignInButtonText, SignUpButtonText, TitleScreenBottom } from "../styles/text";

const TitleScreen: React.FC = () => {
    const navigation: any = useNavigation();

    const userInfo: UserInfo = useSelector(selectUser);
    const languageInfo: LanguageInfo = useSelector(selectLanguage);

    if(userInfo.info && userInfo.token){
        return null;
    }

    return (
        <CenterScreen>
            <SignInButton onPress={() => navigation.navigate("SignIn")}>
                <SignInButtonText>{languageInfo.data.title.signIn}</SignInButtonText>
            </SignInButton>
            <SignUpButton onPress={() => navigation.navigate("SignUp")}>
                <SignUpButtonText>{languageInfo.data.title.signUp}</SignUpButtonText>
            </SignUpButton>
            <TitleScreenBottom>2022 geogames</TitleScreenBottom>
        </CenterScreen>
    )
}

export default TitleScreen;