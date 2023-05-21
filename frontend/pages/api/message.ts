import client from "./client"
import { Message } from "@/typings"

export const createMessage = (data: Message) => {
  return client.post("messages", data)
}