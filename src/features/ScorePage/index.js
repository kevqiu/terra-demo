import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { getTeams, submitTeamScore } from "../../state/teamSlice/thunk";
import { getInputClasses } from "../../util/input";

const ScorePage = () => {
  const dispatch = useDispatch();
  const { teams } = useSelector((state) => state.teams);
  const { currentUser } = useSelector((state) => state.user);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(
        submitTeamScore({
          team: values.team,
          score: values.score,
          comment: values.comment,
          username: currentUser,
        })
      );
      setShowSaved(true);
      resetForm();
    } catch (error) {}

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        team: "",
        score: "",
        intendedAutoScore: "",
        comment: "",
      }}
      onSubmit={onSubmit}
      validate={(values) => {
        // Hide saved text on any field change
        setShowSaved(false);

        const errors = {};
        if (!values.team) errors.team = "Team is required";
        if (!values.score) errors.score = "Score is required";
        return errors;
      }}
    >
      {({ isSubmitting, errors, touched, values }) => {
        const { team: teamClass, score: scoreClass } = getInputClasses(
          values,
          errors,
          touched
        );
        return (
          <Form>
            <div class="flex flex-col m-auto container">
              <h1 class="text-center text-3xl font-semibold text-primary mb-4">
                SCORE A TEAM
              </h1>
              <div class="flex flex-col w-2/3 sm:w-1/2 m-auto">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Team</span>
                  </label>
                  <Field
                    as="select"
                    name="team"
                    class={`select select-bordered select-${teamClass}`}
                  >
                    <option></option>
                    {teams.map((t) => (
                      <option key={t.number}>{t.number}</option>
                    ))}
                  </Field>
                </div>
                <ErrorMessage name="team">
                  {(msg) => <p class="text-xs text-error mt-2 ml-1">{msg}</p>}
                </ErrorMessage>

                <div class="form-control mt-4">
                  <label class="label">
                    <span class="label-text">Total Score</span>
                  </label>
                  <Field
                    name="score"
                    class={`input input-bordered input-${scoreClass}`}
                    type="number"
                  />
                </div>
                <ErrorMessage name="score">
                  {(msg) => <p class="text-xs text-error mt-2 ml-1">{msg}</p>}
                </ErrorMessage>

                <div class="form-control mt-4">
                  <label class="label">
                    <span class="label-text">Intended Autonomous Score</span>
                  </label>
                  <Field
                    name="intendedAutoScore"
                    class="input input-bordered input-primary"
                    type="number"
                  />
                </div>

                <div class="form-control mt-4">
                  <label class="label">
                    <span class="label-text">Comments</span>
                  </label>
                  <Field
                    as="textarea"
                    name="comment"
                    class="input input-bordered input-primary leading-5 h-32 pt-2"
                  />
                </div>

                <div class="flex justify-end items-center mt-8">
                  {showSaved && (
                    <span class="text-sm text-green-400 mr-4 transition">
                      Score saved!
                    </span>
                  )}
                  <button
                    class={`btn btn-primary ${isSubmitting && "loading"}`}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit Score
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 -mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ScorePage;
