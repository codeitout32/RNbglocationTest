// import { serverUrl } from "./serverUrl";

const serverUrl = "https://solshorts.herokuapp.com/api";
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
