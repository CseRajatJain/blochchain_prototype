import {
  useAccount,
  useBalance,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { Button, ConnectWalletContainer, Paragraph } from "./style";
import ContractWrite from "./ContractWrite";

interface AccountProps {
  tokenAddress: `0x${string}`;
  address?: `0x${string}`;
}

const Account = ({ tokenAddress, address }: AccountProps) => {
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  const { data } = useBalance({
    address,
    token: tokenAddress,
  });

  if (!address) {
    return;
  }

  return (
    <ConnectWalletContainer>
      <Paragraph>
        <h3>
          Welcome,
          {address && <>{ensName ? `${ensName} (${address})` : address}</>}
        </h3>
      </Paragraph>
      <Paragraph>
        <h4>Balance: </h4>
        {data ? ` ${data?.formatted} ${data?.symbol}` : " ...loading"}
      </Paragraph>
      <ContractWrite tokenAddress={tokenAddress} />
      <Button onClick={() => disconnect()}>Disconnect</Button>
    </ConnectWalletContainer>
  );
};

export default Account;
