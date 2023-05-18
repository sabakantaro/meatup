import { AxiosPromise } from "axios"

import client from "./client"

export const updateUser = (id: string, data: FormData): AxiosPromise => {
  return client.patch(`/users/${id}`, data)
}