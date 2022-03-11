import { SERVER_URL } from "@env";

export const serverUrl = SERVER_URL ?? process.env.NEXT_PUBLIC_SERVER_URL;

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
