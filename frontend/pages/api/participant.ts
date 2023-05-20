import { AxiosPromise } from "axios"
import client from "./client"

export const createParticipant = (data: FormData): AxiosPromise => {
  return client.post('/participants', data)
}