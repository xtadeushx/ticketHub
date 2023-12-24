// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetEventsResponseDto } from "./dto/get-events-response.dto";
import { config } from "../../../core/config";
import { GetSingleEventResponseDto } from "./dto/get-single-event-response.dto";
import { GetRatesResponseDto } from "./dto/get-rate-response.dto";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.api.host }),
  endpoints: (builder) => ({
    getEvents: builder.query<GetEventsResponseDto, unknown>({
      query: () => `api/event`,
    }),
    getSingleEvent: builder.query<GetSingleEventResponseDto, number>({
      query: (id) => `/api/event/${id}`,
    }),
    getSectorsByEvent: builder.query<GetEventsResponseDto, number>({
      query: (dateId) => `api/eventDate/${dateId}/sectors`,
    }),
    getRatesBySectorId: builder.query<GetRatesResponseDto, number>({
      query: (sectorId) => `api/sectors/${sectorId}/rates`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetEventsQuery,
  useGetSingleEventQuery,
  useLazyGetSectorsByEventQuery,
  useLazyGetRatesBySectorIdQuery,
} = eventsApi;
