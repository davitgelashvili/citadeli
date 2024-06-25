import { createSlice } from "@reduxjs/toolkit";

const initalData = {
    activePopup: false
}

const globalState = createSlice({
    name: 'global',
    initialState: initalData,
    reducers: {
        changeActivePopup(state, action){
            state.activePopup = action.payload
        }
    }
})

export const globalStateAction = globalState.actions

export default globalState.reducer