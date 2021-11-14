import { ROUTES } from "../constants";

const validateAuthToken = async (authToken) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + authToken,
    },
  };

  return fetch(`/${ROUTES.AUTH}`, options);
};

const userAPI = {
  validateAuthToken,
};

export default userAPI;
