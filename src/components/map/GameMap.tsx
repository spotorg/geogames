import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import MapView, { Circle, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { AppInfo, selectApp } from "../../redux/slices/appSlice";
import { selectUser, UserInfo } from "../../redux/slices/userSlice";

function GameMap() {
    const userInfo: UserInfo = useSelector(selectUser);
    const appInfo: AppInfo = useSelector(selectApp);

    const navigation: any = useNavigation();

    const [center, setCener] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);

    useEffect(() => {
        if (userInfo.location) {
            setCener({
                latitude: userInfo.location.coords.latitude,
                longitude: userInfo.location.coords.longitude,
            });
        }
    }, [userInfo.location]);

    return (
        <StyledMapScreen>
            <StyledMap
                initialRegion={{
                    latitude: center?.latitude ? center.latitude : 37.4219616,
                    longitude: center?.longitude
                        ? center.longitude
                        : -122.0839903,
                    latitudeDelta: 0,
                    longitudeDelta: 0.05,
                }}
                onPress={(e) => console.log(e.nativeEvent.coordinate)}
            >
                {center?.latitude && center?.longitude ? (
                    <Marker
                        coordinate={{
                            latitude: center.latitude,
                            longitude: center.longitude,
                        }}
                    >
                        <StyledUserAvatar
                            source={require("../../../assets/avatars/amongus_gun.png")}
                        />
                    </Marker>
                ) : null}

                {center?.latitude && center?.longitude ? (
                    <Circle
                        center={{
                            latitude: center.latitude,
                            longitude: center.longitude,
                        }}
                        radius={20}
                        strokeColor="#e03e1d"
                        fillColor="rgba(0, 0, 0, 0)"
                    />
                ) : null}
            </StyledMap>
        </StyledMapScreen>
    );
}

const StyledMapScreen = styled.View`
    width: 100%;
    height: 90%;
`;

const StyledMapLoading = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledMap = styled(MapView)`
    width: 100%;
    height: 100%;
`;

const StyledUserAvatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 5px;
`;

const StyledSpotImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 5px;
`;

export default GameMap;
export {
    StyledMap,
    StyledUserAvatar
}