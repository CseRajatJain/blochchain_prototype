import styled from "styled-components";
import { Connector, useAccount, useConnect } from "wagmi";
import Account from "./Account";
import { useEffect, useState } from "react";
import { ConnectWalletContainer, Button } from "./style";
import { TOKEN_ADDRESS } from "./constants";


interface WalletOptionProps {
  connector: Connector;
  onClick: () => void;
}

const ConnectWallet = () => {
  const { isConnected, address } = useAccount();
  if (isConnected) return <Account tokenAddress={TOKEN_ADDRESS} address={address} />;
  return (
    <ConnectWalletContainer>
      <WalletOptions />
    </ConnectWalletContainer>
  );
};

const WalletOptions = () => {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <WalletOption
      key={connector.uid}
      connector={connector}
      onClick={() => connect({ connector })}
    />
  ));
};

const WalletOption = ({ connector, onClick }: WalletOptionProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <Button disabled={!ready} onClick={onClick}>
      {connector.name} {connector.id}
    </Button>
  );
};

export default ConnectWallet;
