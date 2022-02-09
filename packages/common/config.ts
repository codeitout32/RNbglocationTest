export const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

//add your api routes here...
export const routes = {
  news: serverUrl + "/news",
  drops: serverUrl + "/drop",
  guides: serverUrl + "/guide",
  advert: serverUrl + "/advertise",
  services: serverUrl + "/our-service",
};
