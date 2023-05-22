import Cookies from "js-cookie";
import client from "./client";

export const getNotifications = () => {
  return client.get("/notifications", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

export const updateNotification = (id: string) => {
  return client.patch(`/notifications/${id}`);
};
