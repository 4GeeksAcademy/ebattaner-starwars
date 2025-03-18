export const baseUrl =
  "https://zany-journey-5gxqqpjgxgr52v6g7-3000.app.github.dev/";

export const userUrl = "users";
export const filmsUrl = "films/";
export const peopleUrl = "people/";
export const planetsUrl = "planets/";
export const meUrl = "me";

export const fetchWrapper = async (url, init) => {
  return await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": sessionStorage.getItem("csrf_access_token") || "",
    },
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText || response.status);
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
