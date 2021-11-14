import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <div class="flex-auto justify-center">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form class="w-1/2">
            <h1>Login</h1>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <Field
                name="username"
                class="input input-bordered input-primary"
              />
            </div>

            <div class="form-control mt-2">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <Field
                type="password"
                name="password"
                class="input input-bordered input-primary"
              />
            </div>

            <div class="mt-6">
              <button
                class="btn btn-wide"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
