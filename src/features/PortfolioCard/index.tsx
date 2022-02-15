import { useEffect, useState } from "react";
import { getWalletData } from "../../terra/api";
import { coinToString } from "../../utils/coin";
import Card from "../Card";

const PortfolioCard = () => {
  const [bank, setBank] = useState([] as string[]);

  useEffect(() => {
    const getBank = async () => {
      const coins = await getWalletData(
        "terra1allgm586eztgmry763wsh3nqcna5jadrtztfnh"
      );

      const formattedCoins = coins.map((c) => coinToString(c));
      setBank(formattedCoins);
    };
    getBank();
  }, [setBank]);

  return (
    <Card height="h-portfolio" title={"Portfolio & Assets"}>
      {bank}
    </Card>
  );
};

export default PortfolioCard;
