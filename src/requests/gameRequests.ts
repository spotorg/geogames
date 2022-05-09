export const createGame = (
    gameName: string,
    gameDescription: string,
    flags: any[]
) => {
    const new_game = {
        name: gameName,
        description: gameDescription,
        flags: flags
    }

    const stringifiedGame = JSON.stringify(new_game);

    console.log(stringifiedGame)
};
