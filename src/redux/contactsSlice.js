import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f923e7e056448035331797.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
    }),
  }),
});


export const { useGetContactsQuery } = phonebookApi;



