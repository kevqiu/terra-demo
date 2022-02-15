import LunaPriceCard from "../LunaPriceCard";
import PortfolioCard from "../PortfolioCard";
import RecentActivityCard from "../RecentActivityCard";

const HomePage = () => {
  return (
    <div className="flex flex-col m-auto container">
      <div className="flex w-full">
        <div className="flex-col w-1/2">
          <PortfolioCard />
        </div>
        <div className="flex-col w-1/4">
          <LunaPriceCard />
          <RecentActivityCard />
        </div>
        <div className="flex-col w-1/4"></div>
      </div>
    </div>
  );
};

export default HomePage;
