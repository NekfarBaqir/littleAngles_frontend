import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import showMessage from "../../utils/showMessage";
import { config } from "../../config";
import { shortenAddress } from "../../utils/shortedAddress";
import { switchNetwork } from "../../utils/onChainUtils";

export const injected = new InjectedConnector();
const btnStyle =
  "bg-gradient-to-r from-bluishCyan to-greenishCyan hover:from-cyan-600 transition-all hover:to-blue-700  px-4 md:px-6 py-2 md:py-4 rounded-2xl text-white font-bold md:rounded-3xl";

export function WalletConnectButton({ children, ...props }) {
  const { account, activate } = useWeb3React();
  const addressInfo = account ? shortenAddress(account) : "Connect Wallet";
  const connector = injected;

  // connect wallet function
  async function connect() {
    if (!window?.ethereum) {
      showMessage(
        "error",
        "Please install an ethereum based wallet!(metamask,trust wallet...)"
      );
    }
    if (account) return;
    try {
      await activate(connector);
      switchNetwork(config.chainInfo);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <button onClick={connect} className={`${btnStyle}`} {...props}>
      {addressInfo}
    </button>
  );
}
