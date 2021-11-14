import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AuthSession = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
    } else {
      navigate("/login");
    }
  }, [currentUser]);

  console.log(currentUser);
  return <>{children}</>;
};

export default AuthSession;
