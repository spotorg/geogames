import React from "react"
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import Navigation from "../components/navigation/Navigation";
import { selectUser, UserInfo } from "../redux/slices/userSlice";
import { TopScreen } from "../styles/screens";
import { AppInfo, selectApp } from "../redux/slices/appSlice";
import { useNavigation } from "@react-navigation/core";

export default function MapScreen() {
    const userInfo: UserInfo = useSelector(selectUser);
    const appInfo: AppInfo = useSelector(selectApp);

    const navigation: any = useNavigation();

    return (
        <TopScreen>
            <StyledMapScreen>

                <StyledMap
                    initialRegion={{
                        latitude: userInfo.location?.coords.latitude ? userInfo.location?.coords.latitude : 37.4219616,
                        longitude: userInfo.location?.coords.longitude ? userInfo.location?.coords.longitude : -122.0839903,
                        latitudeDelta: 0,
                        longitudeDelta: 0.05
                    }}
                >
                    {
                        userInfo.location?.coords.latitude && userInfo.location?.coords.longitude && userInfo.info ? (
                            <Marker 
                                coordinate={{
                                    latitude: userInfo.location.coords.latitude,
                                    longitude: userInfo.location.coords.longitude
                                }}                            
                            >
                                <StyledUserAvatar source={{uri: userInfo.info.avatar}} />
                            </Marker>
                        ) : (null)
                    }
                    

                    {
                        appInfo.jobs && appInfo.jobs.map((job, i: number) => {
                            if(!job.latitude || !job.longitude){
                                return null;
                            }

                            if(appInfo.jobFilters.length > 0 && !appInfo.jobFilters.includes(job.category)){
                                return null;
                            }

                            return (
                                <Marker
                                    onPress={() => navigation.navigate({
                                        name: "JobOffer", 
                                        params: {
                                            info: job
                                        }
                                    })}
                                    key={i}
                                    coordinate={{
                                        latitude: job.latitude,
                                        longitude: job.longitude
                                    }}
                                >
                                    
                                </Marker>
                            )
                        })
                    }
                </StyledMap>
            </StyledMapScreen>

            <Navigation />
        </TopScreen>
    )
}

const StyledMap = styled(MapView)`
    width: 100%;
    height: 100%;
`;

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

export {
    StyledUserAvatar,
    StyledSpotImage,
    StyledMap
}