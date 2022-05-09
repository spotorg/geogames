import { getItemFromStore, saveItem } from "../store/storeOptions";

export const createGame = async (
    gameName: string,
    gameDescription: string,
    flags: any[]
) => {
    const new_game = {
        name: gameName,
        description: gameDescription,
        flags: flags,
    };

    const savedGamesString = await getItemFromStore("games");

    let savedGames = null;

    if(savedGamesString){
        savedGames = JSON.parse(savedGamesString);
    }else{
        savedGames = [];
    }

    savedGames = [...savedGames, new_game];

    const stringifiedGames = JSON.stringify(savedGames);

    console.log(stringifiedGames)

    await saveItem("games", stringifiedGames);
};
