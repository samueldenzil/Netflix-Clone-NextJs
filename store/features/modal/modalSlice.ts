import { createSlice } from '@reduxjs/toolkit'
import { Movie } from '../../../typings'

interface initialStateTypes {
  modalMovie: Movie | null
  showModal: boolean
}

const initialState: initialStateTypes = {
  modalMovie: null,
  showModal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.showModal = true
    },
    closeModal: (state) => {
      state.showModal = false
    },
    setBannerMovie: (state, action) => {
      state.modalMovie = action.payload
    },
  },
})

export const { openModal, closeModal, setBannerMovie } = modalSlice.actions

export default modalSlice.reducer
