import { AxiosPromise } from "axios"
import client from "./client"

export const createBookmark = (eventId: string, data: FormData): AxiosPromise => {
  return client.post(`events/${eventId}/bookmarks`, data)
}

export const deleteBookmark = (eventId: string, id: string): AxiosPromise => {
  return client.delete(`/events/${eventId}/bookmarks/${id}`)
}