import { useEffect, useState } from "react";
import { MICRO } from "../../constants";
import { getLunaPrice } from "../../terra/api";
import { coinToString, formatCoinToString } from "../../utils/coin";

import Card from "../Card";

const LunaPriceCard = () => {
  const [ustString, setUstString] = useState("");

  useEffect(() => {
    const getPrice = async () => {
      const coin = await getLunaPrice();
      setUstString(coinToString(coin.mul(MICRO)));
    };
    getPrice();
  }, [setUstString]);

  return (
    <Card height="h-luna-price" title={"LUNA Price"}>
      <p className="text-2xl font-semibold">{ustString}</p>
    </Card>
  );
};

export default LunaPriceCard;
