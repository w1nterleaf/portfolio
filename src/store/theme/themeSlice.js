import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: 'dark'
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState, 
    reducers : {
        toggleTheme(state,action) {
            let current = state.theme == 'dark' ? 'light' : 'dark'
            state.theme = current
            localStorage.setItem('theme', current)
        },
        initTheme(state) {
            let value = localStorage.getItem('theme')
            if(value) {
                state.theme = value
            }
        }
    }
})

export const { toggleTheme, initTheme } = themeSlice.actions

export default themeSlice.reducer