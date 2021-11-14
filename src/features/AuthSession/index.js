import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { validateAuthToken } from "../../state/userSlice/thunk";

const AuthSession = ({ children }) => {
  // current user in cookie session
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { authToken } = cookies;

  useEffect(() => {
    const validate = async () => {
      // If auth token is in cookies, validate and navigate based on status
      if (authToken) {
        try {
          // Successful auth refreshes token
          const response = await dispatch(validateAuthToken({ authToken }));
          setCookie("authToken", response.payload.auth_token);

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
  }, [authToken, dispatch, navigate, setCookie]);

  // console.log(currentUser);
  return <>{children}</>;
};

export default AuthSession;
