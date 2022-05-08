import React, { useState } from "react";
import { AddFlagButton } from "../../styles/buttons";
import { StyledCreateGameForm } from "../../styles/forms";
import { CreateGameHeader } from "../../styles/headers";
import { CreateInput } from "../../styles/inputs";
import { BlackText } from "../../styles/text";
import SelectFlags from './../map/SelectFlags';

const CreateGameForm = () => {
    const [gameName, setGameName] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [gameAvatar, setGameAvatar] = useState("");
    const [addFlags, setAddFlags] = useState(false);

    if(addFlags){
        return <SelectFlags setAddFlags={setAddFlags} />
    }

    return (
        <StyledCreateGameForm style={{ height: "90%" }}>
            <CreateGameHeader>
                <BlackText>Create game</BlackText>
            </CreateGameHeader>

            <CreateInput
                placeholder="game name"
                value={gameName}
                onChangeText={(text) => setGameName(text)}
                style={{ backgroundColor: "#ffffff" }}
            />

            <CreateInput
                placeholder="game description"
                value={gameDescription}
                onChangeText={(text) => setGameDescription(text)}
                style={{ backgroundColor: "#ffffff" }}
            />

            <AddFlagButton onPress={() => setAddFlags(true)}>
                <BlackText>Add flags</BlackText>
            </AddFlagButton>
        </StyledCreateGameForm>
    );
};

export default CreateGameForm;
