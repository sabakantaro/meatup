import client from "./client"
import Cookies from "js-cookie"

export const getChatrooms = () => {
  return client.get("chatrooms", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      "client": Cookies.get("_client"),
      "uid": Cookies.get("_uid")
    }
  })
}

export const getChatroom = (id: string) => {
  return client.get(`chatrooms/${id}`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      "client": Cookies.get("_client"),
      "uid": Cookies.get("_uid")
    }
  })
}