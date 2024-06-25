import { configureStore } from "@reduxjs/toolkit";
import popupModal from './global'

export const store = configureStore({
    reducer: {
        popupModal
    }
})