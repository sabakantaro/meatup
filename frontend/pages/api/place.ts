import { AxiosPromise } from "axios"

import client from "./client"
import { PlaceApiJson } from "@/typings"

export const getPlaces = (): AxiosPromise<PlaceApiJson> => {
  return client.get("/places")
}

export const createPlace = (data: FormData): AxiosPromise => {
  return client.post("/places", data)
}

export const deletePlace = (id: number): AxiosPromise => {
  return client.delete(`/places/${id}`)
}