import { createSlice } from "@reduxjs/toolkit";

export interface GameInfo {
    game: null | string;
}

const initialState: GameInfo = {
    game: null,
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setGame: (state, action) => {
            state.game = action.payload;
        },
    },
});

export const { setGame } = gameSlice.actions;

export const selectGame = (state: any) => state.game;

export default gameSlice.reducer;
