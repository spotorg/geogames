import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { selectUser, setLocation, UserInfo } from "../redux/slices/userSlice";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TitleScreen from "../screens/TitleScreen";
import CreateScreen from "../screens/CreateScreen";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
    const userInfo: UserInfo = useSelector(selectUser);

    const dispatch = useDispatch();

    useEffect(() => {
        const getLoc = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status === "granted") {
                let location = await Location.getCurrentPositionAsync();
                dispatch(setLocation(location));
            }
        };

        getLoc();
    }, [dispatch, userInfo.location]);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Title"
                    component={TitleScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Map"
                    component={MapScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Create"
                    component={CreateScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
