import { AxiosPromise } from "axios"

import client from "./client"

export const getUser = (id: number): AxiosPromise => {
  return client.get(`/users/${id}`)
}

export const updateUser = (id: number, data: FormData): AxiosPromise => {
  return client.patch(`/users/${id}`, data)
}