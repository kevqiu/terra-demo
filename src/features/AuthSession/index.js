import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../../state/userSlice";

// import { validateAuthToken } from "../../state/userSlice/thunk";

const AuthSession = ({ children }) => {
  // current user in cookie session
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = cookies;

  useEffect(() => {
    const validate = async () => {
      // If auth token is in cookies, validate and navigate based on status
      if (user) {
        try {
          // Successful auth refreshes token
          // const response = await dispatch(validateAuthToken({ authToken }));
          dispatch(setUser(user));
          setCookie("user", user);

          if (window.location.pathname.includes("login")) {
            navigate("/teams");
          }
        } catch {
          // If token is invalid, force user to login again
          navigate("/login");
        }
      } else {
        // If no token, user must login
        navigate("/login");
      }
    };

    validate();
  }, [user, dispatch, navigate, setCookie]);

  return <>{children}</>;
};

export default AuthSession;
