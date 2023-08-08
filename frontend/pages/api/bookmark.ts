import { AxiosPromise } from "axios"
import client from "./client"

export const createBookmark = (eventId: number, data: FormData): AxiosPromise => {
  return client.post(`events/${eventId}/bookmarks`, data)
}

export const deleteBookmark = (eventId: number, id: number): AxiosPromise => {
  return client.delete(`/events/${eventId}/bookmarks/${id}`)
}