export default function setHeader(
  header:
    | {
        autherization?: string;
        contentType?: string;
      }
    | undefined
): object {
  console.log("headerCred", header);
  return {
    Accept: "*/*",
    "Content-Type": header?.contentType || "application/json",
    Authorization: "myAuthToken", //`Bearer ${header?.autherization}`,
  };
}
