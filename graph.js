import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function getEvents(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.graphCalendarEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function createEvents(accessToken, event) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  //   headers.append("Authorization", bearer, "Content-Type", "application/json");
  console.log(event);
  const options = {
    method: "POST",
    headers: { Authorization: bearer, "Content-Type": "application/json" },
    body: JSON.stringify(event),
  };

  return fetch(graphConfig.graphCalendarEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
