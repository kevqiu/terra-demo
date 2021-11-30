import React from "react";

const TableToPrint = React.forwardRef(({ teams }, ref) => {
  return (
    <div ref={ref}>
      <table className="table table-auto w-full">
        <thead>
          <tr>
            <th>Judged Score</th>
            <th>Robot Skills Rank</th>
            <th>Skills Score</th>
            <th>W/L Record</th>
          </tr>
        </thead>
        <tbody>
          {teams?.map((team) => (
            <tr key={team.number}>
              <td>{team.score}</td>
              <td>{team.skills}</td>
              <td>{team.skillsScore}</td>
              <td>{team.record}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default TableToPrint;
