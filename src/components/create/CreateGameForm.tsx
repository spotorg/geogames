import React, { useState } from "react";
import { StyledCreateGameForm } from "../../styles/forms";
import { CreateInput } from "../../styles/inputs";

const CreateGameForm = () => {
    const [gameName, setGameName] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [gameAvatar, setGameAvatar] = useState("");

    return (
        <StyledCreateGameForm style={{height: "90%"}}>
            <CreateInput
                placeholder="game name"
                value={gameName}
                onChangeText={(text) => setGameName(text)}
                style={{backgroundColor: "#ffffff"}}
            />

            <CreateInput
                placeholder="game description"
                value={gameDescription}
                onChangeText={(text) => setGameDescription(text)}
                style={{backgroundColor: "#ffffff"}}
            />
        </StyledCreateGameForm>
    );
};

export default CreateGameForm;
