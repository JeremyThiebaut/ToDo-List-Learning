import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
    language: 'en',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        },
    },
});

export const {changeLanguage} = languageSlice.actions;
export default languageSlice.reducer;