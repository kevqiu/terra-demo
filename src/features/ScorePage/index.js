import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { getTeams, submitTeamScore } from "../../state/teamSlice/thunk";
import { getInputClasses } from "../../util/input";

import "./style.css";

const NumberPicker = ({ onChange, size, selected }) => (
  <input
    type="range"
    className="range range-primary"
    max={size}
    value={selected}
    onChange={(e) => onChange(e.target.value)}
  />
  // In case we ever want to go back to buttons
  // <div className="btn-group">
  //   {Array(size)
  //     .fill()
  //     .map((x, i) => (
  //       <button
  //         className={`btn btn-primary btn-sm ${
  //           selected !== i && "btn-outline"
  //         } btn-number-picker`}
  //         onClick={() => onClick(i)}
  //         key={i}
  //         type="button"
  //       >
  //         {i}
  //       </button>
  //     ))}
  // </div>
);

const ScorePage = () => {
  const dispatch = useDispatch();
  const { allTeams } = useSelector((state) => state.teams);
  const { currentUser } = useSelector((state) => state.user);

  const teamState = useState(-1);
  const designState = useState(-1);
  const amazeState = useState(-1);
  const buildState = useState(-1);
  const createState = useState(-1);
  const thinkState = useState(-1);
  const numberPickers = [
    { key: "team", state: teamState },
    { key: "design", state: designState },
    { key: "amaze", state: amazeState },
    { key: "build", state: buildState },
    { key: "create", state: createState },
    { key: "think", state: thinkState },
  ];

  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(
        submitTeamScore({
          team: values.team,
          teamScore: Number(values.teamScore),
          designScore: Number(values.designScore),
          amazeScore: Number(values.amazeScore),
          buildScore: Number(values.buildScore),
          createScore: Number(values.createScore),
          thinkScore: Number(values.thinkScore),
          intendedAutoScore: Number(values.intendedAutoScore),
          comment: values.comment,
          username: currentUser,
        })
      );
      setShowSaved(true);

      numberPickers.forEach((np) => np.state[1](-1));
      resetForm();
    } catch (error) {}

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        team: "",
        teamScore: -1,
        designScore: -1,
        amazeScore: -1,
        buildScore: -1,
        createScore: -1,
        thinkScore: -1,
        intendedAutoScore: "",
        comment: "",
      }}
      onSubmit={onSubmit}
      validate={(values) => {
        // Hide saved text on any field change
        setShowSaved(false);

        const errors = {};
        if (!values.team) errors.team = "Team is required";

        for (let { key } of numberPickers) {
          if (values[`${key}Score`] < 0) {
            const keyProper =
              key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase();
            errors[`${key}Score`] = `${keyProper} score is required`;
          }
        }
        return errors;
      }}
    >
      {({ isSubmitting, errors, touched, values, setFieldValue }) => {
        const { team: teamClass } = getInputClasses(values, errors, touched);

        const numberPickerOnClick = (field, setScore) => {
          return (v) => {
            setScore(v);
            setFieldValue(field, v);
          };
        };

        return (
          <Form>
            <div className="flex flex-col m-auto container">
              <h1 className="text-center text-3xl font-semibold text-primary mb-4">
                SCORE A TEAM
              </h1>
              <div className="flex flex-col w-2/3 sm:w-1/2 m-auto">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Team</span>
                  </label>
                  <Field
                    as="select"
                    name="team"
                    className={`select select-bordered select-${teamClass}`}
                  >
                    <option></option>
                    {allTeams.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </Field>
                </div>
                <ErrorMessage name="team">
                  {(msg) => (
                    <p className="text-xs text-error mt-2 ml-1">{msg}</p>
                  )}
                </ErrorMessage>

                {numberPickers.map(({ key, state: [value, setValue] }) => (
                  <>
                    <div className="form-control mt-4">
                      <label className="label">
                        <span className="label-text capitalize">
                          {key} Score{value > -1 && ":"}{" "}
                          {value > -1 && <b>{value}</b>}
                        </span>
                      </label>
                      <div className="flex flex-col m-auto w-full">
                        <NumberPicker
                          key={key}
                          size={key === "team" ? 5 : 10}
                          onChange={numberPickerOnClick(
                            `${key}Score`,
                            setValue
                          )}
                          selected={value}
                        />
                      </div>
                    </div>
                    <ErrorMessage name={`${key}Score`}>
                      {(msg) => (
                        <p className="text-xs text-error mt-2 ml-1">{msg}</p>
                      )}
                    </ErrorMessage>
                  </>
                ))}

                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text">
                      Intended Autonomous Score
                    </span>
                  </label>
                  <Field
                    name="intendedAutoScore"
                    className="input input-bordered input-primary"
                    type="number"
                  />
                </div>

                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text">Comments</span>
                  </label>
                  <Field
                    as="textarea"
                    name="comment"
                    className="input input-bordered input-primary leading-5 h-32 pt-2"
                  />
                </div>

                <div className="flex justify-end items-center mt-8">
                  {showSaved && (
                    <span className="text-sm text-green-400 mr-4 transition">
                      Score saved!
                    </span>
                  )}
                  <button
                    className={`btn btn-primary ${isSubmitting && "loading"}`}
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
