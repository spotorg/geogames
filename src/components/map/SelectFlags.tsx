import React, { useEffect, useState } from "react";
import { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectUser, UserInfo } from "../../redux/slices/userSlice";
import { TopScreen } from "../../styles/screens";
import { StyledMap, StyledUserAvatar } from "./GameMap";

function SelectFlags() {
    const userInfo: UserInfo = useSelector(selectUser);

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
        <TopScreen>
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
            </StyledMap>
        </TopScreen>
    );
}

export default SelectFlags;
