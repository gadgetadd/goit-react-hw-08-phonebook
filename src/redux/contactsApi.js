import { createApi } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: '' }) =>
        async ({ url, method, data, params }) => {
            try {
                const result = await axios({ url: baseUrl + url, method, data, params })
                return { data: result.data }
            } catch (axiosError) {
                let err = axiosError
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }
            }
        }

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://645897178badff578ef539ed.mockapi.io' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => ({
                url: "/contacts",
                method: 'GET',
            }),
            providesTags: (result) => (result
                ? [...result.map(({ id }) => ({ type: 'Contacts', id })), { type: 'Contacts', id: 'LIST' }]
                : [{ type: 'Contacts', id: 'LIST' }]),
        }),
        addContact: builder.mutation({
            query: (data) => ({
                url: "/contacts",
                method: 'POST',
                data,
            })
            ,
            invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            })
            ,
            invalidatesTags: [{ type: 'Contacts', id: 'LIST' }]
        })
    }),
})


export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi