import { useEffect, useState } from "react";
import { getWalletData } from "../../terra/api";
import { coinToString } from "../../utils/coin";
import Card from "../Card";

const PortfolioCard = ({ walletAddress }: Props) => {
  const [bank, setBank] = useState([] as string[]);
  const [error, setError] = useState("" as string);

  useEffect(() => {
    const getBank = async () => {
      try {
        const coins = await getWalletData(walletAddress);
        const formattedCoins = coins.map((c) => coinToString(c));
        setBank(formattedCoins);
        setError("");
      } catch (e) {
        setError("Invalid wallet address");
      }
    };
    if (walletAddress) {
      getBank();
    }
  }, [walletAddress]);

  return (
    <Card height="h-portfolio" title={"Portfolio & Assets"}>
      {error || bank.map((c) => <p key={c}>{c}</p>)}
    </Card>
  );
};

export default PortfolioCard;

interface Props {
  walletAddress: string;
}
