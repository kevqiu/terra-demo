import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AuthSession = ({ children }) => {
  // current user in cookie session
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      // check auth
      const sessionValid = true;

      if (sessionValid) {
        // if session is valid, redirect away from login to Teams
      } else {
        // otherwise, go to login
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [currentUser]);

  console.log(currentUser);
  return <>{children}</>;
};

export default AuthSession;
