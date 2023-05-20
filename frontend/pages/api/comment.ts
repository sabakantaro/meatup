import { AxiosPromise } from "axios"
import client from "./client"

export const createComment = (eventId: string, data: FormData): AxiosPromise => {
  return client.post(`/events/${eventId}/comments`, data)
}

export const deleteComment = (eventId: string, id: string): AxiosPromise => {
  return client.delete(`/events/${eventId}/comments/${id}`)
}