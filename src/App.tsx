import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { holesky } from 'wagmi/chains';
import { WagmiProvider, createConfig, http } from "wagmi";
import { injected, metaMask } from 'wagmi/connectors'
import ConnectWallet from "./ConnectWallet";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = createConfig({
  chains: [holesky],
  connectors: [
    injected(),
    metaMask(),
  ],
  transports: {
    [holesky.id]: http(),
  },
})



function App() {

  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectWallet />
        </ QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}

export default App;
