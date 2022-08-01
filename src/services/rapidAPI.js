import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidHeader = {
    'X-RapidAPI-Key': 'c66321ad25msh035ba70e23afc4dp18e4b6jsncc0d75e57bf0',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
}

export const rapidAPI = createApi({
    reducerPath: 'rapidAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://covid-193.p.rapidapi.com"
    }),
    endpoints: (builder) => ({
        statistics: builder.query({
            query: () => ({
                url: `/statistics`,
                method: 'GET',
                headers: rapidHeader
            })
        }),
        history: builder.query({
            query: (arg) => {
                const {country, date} = arg;
                console.log('arg: ', arg);
                return{
                    url: `/history?country=${country}&day=${date}`,
                    method: 'GET',
                    headers: rapidHeader
                };
            },
        }),
        // another endpoints here
    }),
})

export const {
    useStatisticsQuery, useHistoryQuery
} = rapidAPI