import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { getTeamByNumber } from "../../state/teamSlice/thunk";

const TeamPage = () => {
  const dispatch = useDispatch();
  const { teamId } = useParams();
  const { byNumber } = useSelector((state) => state.teams);

  const team = byNumber[teamId];

  useEffect(() => {
    dispatch(getTeamByNumber(teamId));
  }, [dispatch, teamId]);

  return (
    <div className="flex flex-col m-auto container">
      <Link to="../" className="flex flex-row items-center text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="text-sm">Team List</span>
      </Link>
      <h1 className="text-center text-3xl font-semibold text-primary mb-8">
        {teamId}
      </h1>

      <div className="p-2 bg-white rounded mb-8">
        <div className="overflow-x-auto">
          <table className="table table-auto w-full">
            <thead>
              <tr>
                <th>Judged Score</th>
                <th>Robot Skills Rank</th>
                <th>Skills Score</th>
                <th>W/L Record</th>
              </tr>
            </thead>
            <tbody>
              {team && (
                <tr>
                  <td>{team.score}</td>
                  <td>{team.skills}</td>
                  <td>{team.skillsScore}</td>
                  <td>{team.record}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-2 bg-white rounded">
        <div className="overflow-x-auto">
          <table className="table table-auto w-full">
            <thead>
              <tr>
                <th>Score</th>
                <th>Judge</th>
                <th>Intended Auto</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {team &&
                team.judgeScores.map((j) => (
                  <tr key={j.provider}>
                    <td>{j.score}</td>
                    <td>{j.provider}</td>
                    <td>{j.intendedAutoScore}</td>
                    <td>
                      <p className="whitespace-pre-line">{j.comment}</p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
