import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "getToDoList",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "all",
    }),
  }),
});

export const {} = countryApi;
