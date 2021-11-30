import { Formik, Form, Field, ErrorMessage } from "formik";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";

// import { login } from "../../state/userSlice/thunk";

const LoginPage = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, setCookie] = useCookies();

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      // const response = await dispatch(login(values));
      setCookie("user", values.username);
      navigate("/teams");
    } catch (error) {}

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.username) errors.username = "Username is required";
        // if (!values.password) errors.password = "Password is required";
        return errors;
      }}
    >
      {({ isSubmitting, errors, touched }) => {
        const inputClass = (field) => {
          if (errors[field] && touched[field]) return "input-error";
          return "input-primary";
        };

        return (
          <Form>
            <div className="flex flex-col m-auto container">
              <h1 className="text-center text-3xl font-semibold text-primary">
                LOGIN
              </h1>

              <p className="mt-8 mb-6 text-center">
                Welcome to the PYRS Judging App! Please login to get started.
              </p>
              <div className="flex flex-col w-2/3 sm:w-1/2 m-auto">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <Field
                    name="username"
                    className={`input input-bordered ${inputClass(
                      "username"
                    )} `}
                  />
                </div>
                <ErrorMessage name="username">
                  {(msg) => (
                    <p className="text-xs text-error mt-2 ml-1">{msg}</p>
                  )}
                </ErrorMessage>

                {/* <div className="form-control mt-2">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className={`input input-bordered ${inputClass("password")}`}
                  />
                </div>
                <ErrorMessage name="password">
                  {(msg) => <p className="text-xs text-error mt-2 ml-1">{msg}</p>}
                </ErrorMessage> */}

                <div className="flex justify-end mt-8">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
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

export default LoginPage;
