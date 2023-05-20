import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_AUTH_URL as string,
  }),
  options
);

export default client;
