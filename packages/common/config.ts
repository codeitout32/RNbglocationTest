import { serverUrl } from "./serverUrl";

// const serverUrl = "http://dev.solshorts.io/api";
console.log("serverurl", serverUrl);
//add your api routes here...
export const routes = {
  news: serverUrl + "/news",
  drops: serverUrl + "/drop",
  guides: serverUrl + "/guide",
  advert: serverUrl + "/advertise",
  adclick: serverUrl + "/adclick",
  services: serverUrl + "/our-service",
  category: serverUrl + "/category",
  user: serverUrl + "/user",
  notificationStatus: serverUrl + "/user/notification-status",
};
