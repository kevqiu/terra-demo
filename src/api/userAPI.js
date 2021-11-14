import { BASE_URL, Routes } from "../constants";

const login = async (username, password) => {
  const options = {
    method: "POST",
    body: {
      username,
      password,
    },
  };

  return fetch(`${BASE_URL}/${Routes.LOGIN}`, options);
};

const validateAuthToken = async (authToken) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + authToken,
    },
  };

  return fetch(`${BASE_URL}/${Routes.AUTH}`, options);
};

const userAPI = {
  login,
  validateAuthToken,
};

export default userAPI;
