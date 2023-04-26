import { Root } from "./Users";

export async function FetchData(URL: string): Promise<Root> {
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const myJson = await response.json();
  return myJson;
}
