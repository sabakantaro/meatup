import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "http://localhost:5000/api/v1/",
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  }),
  options
);

export default client;
