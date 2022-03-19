import { serverUrl } from "./serverUrl";

console.log("serverurl", serverUrl);
//add your api routes here...
export const routes = {
  news: serverUrl + "/news",
  drops: serverUrl + "/drop",
  guides: serverUrl + "/guide",
  advert: serverUrl + "/advertise",
  services: serverUrl + "/our-service",
  category: serverUrl + "/category",
};
