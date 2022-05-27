import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './features/modal/modalSlice'
import movieSlice from './features/movie/movieSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    movie: movieSlice,
  },
})
