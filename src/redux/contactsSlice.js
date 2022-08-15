import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f923e7e056448035331797.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: 'contacts/',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});



export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } =
  phonebookApi;



