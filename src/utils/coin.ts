import { Coin } from "@terra-money/terra.js";
import { MICRO } from "../constants";

export const formatCoinToString = (coin: Coin, precision: number): number => {
  return Number(coin.amount.toPrecision(precision));
};

export const coinToString = (coin: Coin): string => {
  let decCoin;
  if (coin.isDecCoin()) decCoin = coin;
  else decCoin = coin.toDecCoin();

  let amount;
  let denomString;

  const denom = coin.denom;

  console.log(coin.toData())

  if (coin.denom === "uusd") {
    amount = decCoin.amount.div(MICRO).toDecimalPlaces(4).toString()
    denomString = "UST"
  }

  else if (coin.denom === "uluna") {
    amount = decCoin.amount.div(MICRO).toDecimalPlaces(4).toString()

    denomString = "LUNA"
  }

  return `${amount} ${denomString}`
}