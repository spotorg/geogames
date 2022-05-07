import React from "react";
import { TopScreen } from "../styles/screens";
import Navigation from "../components/navigation/Navigation";
import CreateGameForm from "../components/create/CreateGameForm";

const CreateScreen = () => {
    return (
        <TopScreen>
            <CreateGameForm />

            <Navigation />
        </TopScreen>
    );
};

export default CreateScreen;
