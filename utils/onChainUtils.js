export const switchNetwork = ({ chainId, rpcUrl }) => {
  if (window) {
    window?.ethereum?.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId,
          rpcUrl,
        },
      ],
    });
  }
};
