import React from "react"
import Navigation from "../components/navigation/Navigation";
import { TopScreen } from "../styles/screens";
import GameMap from "../components/map/GameMap";

export default function MapScreen() {
    return (
        <TopScreen>
            <GameMap />

            <Navigation />
        </TopScreen>
    )
}