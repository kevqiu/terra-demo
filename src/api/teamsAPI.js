import { BASE_URL, Routes } from "../constants";

const getTeams = async () => {
  return fetch(`${BASE_URL}/${Routes.TEAMS}`);
};

const submitTeamScore = async ({ team, score, comment, username }) => {
  const options = {
    method: "POST",
    body: {
      team,
      score,
      comment,
      username,
    },
  };

  return fetch(`${BASE_URL}/${Routes.TEAMS}`, options);
};

const teamsAPI = {
  getTeams,
  submitTeamScore,
};

export default teamsAPI;
