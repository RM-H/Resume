import { configureStore } from '@reduxjs/toolkit'
import NavigationSlice from '../slices/navigationSlice.js'

const store = configureStore({
reducer:{
    navigation:NavigationSlice
}
})

export default store
