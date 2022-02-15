import { LCDClient } from "@terra-money/terra.js";

// connect to bombay testnet
const terra = new LCDClient({
  URL: "https://bombay-lcd.terra.dev",
  chainID: "bombay-12",
});

export default terra;
