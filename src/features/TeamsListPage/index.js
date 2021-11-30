import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { getTeams } from "../../state/teamSlice/thunk";

import "./style.css";

const TeamsListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { byNumber, allTeams } = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <div className="flex flex-col m-auto container">
      <h1 className="text-center text-3xl font-semibold text-primary mb-2">
        TEAM LIST
      </h1>
      <Formik initialValues={{ search: "" }}>
        {({ values }) => {
          const { search } = values;

          const filteredTeamsList = search
            ? allTeams.filter((t) =>
                t.toLowerCase().includes(search.toLowerCase())
              )
            : allTeams;
          const populatedTeamsList = filteredTeamsList.map((t) => byNumber[t]);

          return (
            <div>
              <Form>
                <div className="flex justify-center">
                  <div className="form-control mb-6 w-2/3 sm:w-1/3">
                    <label className="label">
                      <span className="label-text"></span>
                    </label>
                    <Field
                      name="search"
                      className="input input-bordered input-primary"
                      placeholder="Search for a team"
                    />
                  </div>
                </div>
              </Form>

              <div className="p-2 bg-white rounded">
                <div className="overflow-x-auto">
                  <table className="teams-table table table-auto w-full">
                    <thead>
                      <tr>
                        <th className="bg-primary">Team</th>
                        <th>Judged Score</th>
                        <th>Robot Skills Rank</th>
                        <th>Skills Score</th>
                        <th>W/L Record</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!populatedTeamsList && (
                        <tr>
                          <span>lol</span>
                        </tr>
                      )}
                      {populatedTeamsList.map((team, i) => (
                        <tr
                          key={team.number}
                          onClick={() => navigate(team.number)}
                          className="hover cursor-pointer"
                        >
                          <td>{team.number}</td>
                          <td>{team.score}</td>
                          <td>{team.skills}</td>
                          <td>{team.skillsScore}</td>
                          <td>{team.record}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default TeamsListPage;
