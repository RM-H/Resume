import { createSlice,createSelector } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'navigation',
    initialState: {
      active:1
    },
    reducers: {
        changeNav(state, action) {
            state.active=action.payload
        },

    }

})

export const { changeNav } = todosSlice.actions









// selectors

export const activeSelector = createSelector(
    state=>state.navigation,
   state=>state.active


)
export default todosSlice.reducer