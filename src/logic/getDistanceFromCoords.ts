const getDistanceFromCoords = (objectLat: number | null | undefined, objectLng: number | null | undefined, userLat: number | null | undefined, userLng: number | null | undefined) => {
    if(!objectLat || !objectLng || !userLat || !userLng){
        return null;
    }

    let latitudeDiff = userLng - objectLng;
    let longitudeDiff = userLat - objectLat;

    let distance = Math.sqrt((latitudeDiff ** 2) + (longitudeDiff ** 2));
    let distanceKM = Math.floor((distance * 111.3) * 100) / 100;

    return distanceKM;
}

export default getDistanceFromCoords;