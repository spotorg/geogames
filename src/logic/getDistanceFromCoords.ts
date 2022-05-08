const getDistanceFromCoords = (
    objectLat: number | null | undefined,
    objectLng: number | null | undefined,
    userLat: number | null | undefined,
    userLng: number | null | undefined
) => {
    if (!objectLat || !objectLng || !userLat || !userLng) {
        return null;
    }

    const latitudeDiff = userLng - objectLng;
    const longitudeDiff = userLat - objectLat;

    const distance = Math.sqrt(latitudeDiff ** 2 + longitudeDiff ** 2);
    const distanceKM = distance * 111.3 * 100 / 100;

    return distanceKM;
};

export default getDistanceFromCoords;
