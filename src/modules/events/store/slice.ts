import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface EventOrderState {
  date: number | null
}

const initialState: EventOrderState = {
    date:  null,
}

export const eventOrderSlice = createSlice({
  name: 'eventOrder',
  initialState,
  reducers: {
    setEventDate : (state, action:PayloadAction<number>)=> {
        state.date = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setEventDate} = eventOrderSlice.actions

export const { reducer: eventDateReducer} = eventOrderSlice