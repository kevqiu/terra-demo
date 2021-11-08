import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>PYRS Judging App</p>
        <Link to="/teamjudging">Team Judging</Link>
      </header>
    </div>
  );
};

export default HomePage;
