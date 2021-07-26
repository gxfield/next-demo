import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

type AuthState = {
  user: string | null
  token: string | null
  id: string | null
  email: string | null
  name: string | null
  phone: string | null
}

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    id: null,
    email: null,
    name: null,
    phone: null
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { login, token, user_id, email, name, phone }
      }: PayloadAction<{
        login: string
        token: string
        user_id: string
        email: string
        name: string
        phone: string
      }>
    ) => {
      state.user = login
      state.token = token
      state.id = user_id
      state.email = email
      state.name = name
      state.phone = phone
    }
  }
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
