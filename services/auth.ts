import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export interface UserResponse {
  user: string
  login: string
  token: string
  user_id: string
  name: string
  phone: string
  email: string
}

export interface LoginRequest {
  username: string
  password: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: publicRuntimeConfig.NEXT_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('Authorization', `Basic ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'GET',
        headers: {
          'Authorization': `Basic ${Buffer.from(`${credentials.username}:${credentials.password}`).toString('base64')}`
        }
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useLoginMutation, useProtectedMutation } = api
