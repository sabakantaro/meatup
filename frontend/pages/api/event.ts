import { AxiosPromise } from "axios"

import client from "./client"
import { EventApiJson } from "@/typings"

export const getEvents = (): AxiosPromise<EventApiJson> => {
  return client.get("/events")
}

export const getEvent = (id: number): AxiosPromise<EventApiJson> => {
  return client.get(`/events/${id}`)
}

export const createEvent = (data: FormData): AxiosPromise => {
  return client.post("/events", data)
}

export const deleteEvent = (id: number): AxiosPromise => {
  return client.delete(`/events/${id}`)
}