import { AxiosPromise } from "axios"
import client from "./client"

export const createComment = (eventId: number, data: FormData): AxiosPromise => {
  return client.post(`/events/${eventId}/comments`, data)
}

export const deleteComment = (eventId: number, id: number): AxiosPromise => {
  return client.delete(`/events/${eventId}/comments/${id}`)
}