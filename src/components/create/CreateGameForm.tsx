import React, { useState } from "react";
import { AddFlagButton, BlackButton } from "../../styles/buttons";
import { StyledCreateGameForm } from "../../styles/forms";
import { CreateGameHeader } from "../../styles/headers";
import { CreateInput } from "../../styles/inputs";
import { BlackText, WhiteText } from "../../styles/text";
import SelectFlags from "./../map/SelectFlags";
import { createGame } from './../../requests/gameRequests';

const CreateGameForm = () => {
    const [gameName, setGameName] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [gameAvatar, setGameAvatar] = useState("");
    const [addFlags, setAddFlags] = useState(false);
    const [flags, setFlags] = useState<any[]>([]);

    if (addFlags) {
        return (
            <SelectFlags
                setAddFlags={setAddFlags}
                setFlags={setFlags}
                flags={flags}
            />
        );
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
                <BlackText>Add flags {flags.length > 0 ? `(${flags.length})` : ""}</BlackText>
            </AddFlagButton>

            <BlackButton onPress={() => createGame(gameName, gameDescription, flags)}>
                <WhiteText>Create game</WhiteText>
            </BlackButton>
        </StyledCreateGameForm>
    );
};

export default CreateGameForm;
