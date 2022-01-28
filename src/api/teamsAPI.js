import { BASE_URL, Routes } from "../constants";

const getTeams = async () => {
  return fetch(`${BASE_URL}/${Routes.TEAMS}`);
};

const getTeamByNumber = async (teamNumber) => {
  return fetch(`${BASE_URL}/${Routes.TEAMS}/${teamNumber}`);
};

const submitTeamScore = async ({
  team,
  teamScore,
  designScore,
  amazeScore,
  buildScore,
  createScore,
  thinkScore,
  intendedAutoScore,
  comment,
  username,
}) => {
  const options = {
    method: "POST",
    body: {
      team: teamScore,
      design: designScore,
      amaze: amazeScore,
      build: buildScore,
      create: createScore,
      think: thinkScore,
      comment,
      username,
    },
  };

  return fetch(`${BASE_URL}/${Routes.TEAMS}/${team}/${Routes.SCORE}`, options);
};

const teamsAPI = {
  getTeamByNumber,
  getTeams,
  submitTeamScore,
};

export default teamsAPI;
