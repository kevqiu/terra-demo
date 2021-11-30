import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";

import { getTeams } from "../../state/teamSlice/thunk";

import "./style.css";
import TableToPrint from "./TableToPrint";

const PrintPage = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const dispatch = useDispatch();
  const { byNumber, allTeams } = useSelector((state) => state.teams);

  const teamsList = allTeams
    .map((t) => byNumber[t])
    .sort((t1, t2) => t1.score - t2.score);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <div className="flex flex-col m-auto">
      <div className="flex justify-center mb-4">
        <button class="btn btn-primary" onClick={handlePrint}>
          Print Results
        </button>
      </div>

      <div>
        <div className="p-2 bg-white rounded">
          <div className="overflow-x-auto">
            <TableToPrint teams={teamsList} ref={componentRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPage;
