import { useForm } from "react-hook-form";
import LunaPriceCard from "../LunaPriceCard";
import PortfolioCard from "../PortfolioCard";
import RecentActivityCard from "../RecentActivityCard";

const HomePage = () => {
  const { register, watch, getValues } = useForm();

  const walletAddress = watch("walletAddress");

  return (
    <div className="flex flex-col m-auto container">
      <div className="flex w-full flex-col">
        <div className="ml-4 mt-4">
          {/* <form> */}
          <input
            type="text"
            placeholder="Wallet address (terra1...)"
            className="input w-full max-w-xs"
            {...register("walletAddress")}
          />
          {/* </form> */}
        </div>
        <div className="flex w-full flex-row">
          <div className="flex-col w-1/2">
            <PortfolioCard walletAddress={walletAddress} />
          </div>
          <div className="flex-col w-1/4">
            <LunaPriceCard />
            <RecentActivityCard />
          </div>
          <div className="flex-col w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
