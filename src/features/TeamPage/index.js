import { useParams } from "react-router";

const TeamPage = () => {
  const { teamId } = useParams();
  return (
    <div className="App">
      <header className="App-header">
        <p>Team Page: {teamId}</p>
      </header>
    </div>
  );
};

export default TeamPage;
