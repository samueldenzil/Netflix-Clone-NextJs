import { createSlice } from '@reduxjs/toolkit'
import { Movie } from '../../../typings'

interface initialStateTypes {
  movie: Movie | null
}

const initialState: initialStateTypes = {
  movie: null,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload
    },
  },
})

export const { setMovie } = movieSlice.actions

export default movieSlice.reducer
