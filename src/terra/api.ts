import { Coin } from "@terra-money/terra.js";
import terra from "./client";

export const getLunaPrice = async () => {
  const lunaExchange = await terra.oracle.exchangeRates();
  const ustPrice = lunaExchange.get("uusd") as Coin;
  return ustPrice;
};

export const getWalletData = async (wallet: string) => {
  const balances = await terra.bank.balance(wallet);
  return balances[0];
};
