import httpClient from "./core";

const getUserList = () => httpClient.get("/users").then((res) => res.data);

export default {
  getUserList,
};
