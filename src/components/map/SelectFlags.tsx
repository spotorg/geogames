import React, { useEffect, useState } from "react";
import { LatLng, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectUser, UserInfo } from "../../redux/slices/userSlice";
import { AddFlagButton } from "../../styles/buttons";
import { CreateGameHeader } from "../../styles/headers";
import { TopScreen } from "../../styles/screens";
import { BlackText } from "../../styles/text";
import { StyledNavigationOption2 } from "../navigation/Navigation";
import { StyledMap, StyledUserAvatar } from "./GameMap";

interface Props {
    setAddFlags: React.Dispatch<React.SetStateAction<boolean>>;
    setFlags: React.Dispatch<React.SetStateAction<any[]>>;
    flags: any[];
}

const SelectFlags: React.FC<Props> = ({ setAddFlags, setFlags, flags }) => {
    const userInfo: UserInfo = useSelector(selectUser);

    const [currentFlag, setCurrentFlag] = useState<any | null>(null);

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

    const setFlagCoords = (coords: LatLng) => {
        const new_flag = {
            latitude: coords.latitude,
            longitude: coords.longitude,
        };

        setCurrentFlag(new_flag);
    };

    const addFlag = () => {
        if (!currentFlag) {
            return;
        }

        setFlags([...flags, currentFlag]);

        setCurrentFlag(null);
    };

    return (
        <TopScreen style={{ height: "90%" }}>
            <CreateGameHeader>
                <StyledNavigationOption2
                    name="arrow-back-circle"
                    onPress={() => setAddFlags(false)}
                    style={{
                        marginRight: 5,
                    }}
                />

                <BlackText>Create game | Add flags</BlackText>
            </CreateGameHeader>

            <StyledMap
                initialRegion={{
                    latitude: center?.latitude ? center.latitude : 37.4219616,
                    longitude: center?.longitude
                        ? center.longitude
                        : -122.0839903,
                    latitudeDelta: 0,
                    longitudeDelta: 0.05,
                }}
                onPress={(e) => setFlagCoords(e.nativeEvent.coordinate)}
                style={{
                    height: "80%",
                }}
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

                {currentFlag ? (
                    <Marker
                        coordinate={{
                            latitude: currentFlag.latitude,
                            longitude: currentFlag.longitude,
                        }}
                    >
                        <StyledUserAvatar
                            source={require("../../../assets/icons/black_flag.png")}
                        />
                    </Marker>
                ) : null}

                {flags.map((flag, i) => {
                    return (
                        <Marker
                            key={i}
                            coordinate={{
                                latitude: flag.latitude,
                                longitude: flag.longitude,
                            }}
                        >
                            <StyledUserAvatar
                                source={require("../../../assets/icons/red_flag.png")}
                            />
                        </Marker>
                    );
                })}
            </StyledMap>

            <AddFlagButton onPress={() => addFlag()}>
                <BlackText>Add flag</BlackText>
            </AddFlagButton>
        </TopScreen>
    );
};

export default SelectFlags;
