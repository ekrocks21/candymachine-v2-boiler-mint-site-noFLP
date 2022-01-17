import "./App.css";
import { useMemo } from "react";
import HeaderImage from "./images/happydood.png";
import Doods from './components/doods';
import TheDoods from "./components/thedoods"
import Team from "./components/teams";
import Roadmap from "./components/roadmap";
import Roadmap2 from "./components/roadmap2";
import Footer from "./components/footer";
import TheDoods2 from "./components/doodscopy";
import Perks from "./components/perks";
import LogoImage from "./images/Asset3.svg";
import Nav from './components/nav'
import styled from "styled-components";
import { Container, Accordion, AccordionSummary, AccordionDetails, Button, CircularProgress, Snackbar, Grid, Paper, Box,BoxProps, Card, Typography, CardMedia, CardContent, CardActions, } from "@material-ui/core";

import Minter from "./Minter";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider, createTheme } from "@material-ui/core";


const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet(), getMathWallet() ],
    []
  );

  function toggleMenu() {
    const menu = document.getElementById("mobileNavContainer")!;
    menu.classList.toggle("open-menu");
    console.log("pressed");
  }

  return (
    <main style={{ display: "flex", height: "100vh", backgroundColor: "#24305e",}}>
      <div style={{display: "flex", flex: 1, flexDirection: "column", }}>
        <div style={{display: "flex", justifyContent: "space-between", maxHeight: "120px", paddingLeft: '5%', paddingRight:'10%', paddingTop: '3%' }}>
          <img src={LogoImage} alt="Logo"
          style={{
          maxWidth: "20%",
          height: "auto",
          marginLeft: "20px",
          minWidth: "15%",
          display: "flex",
          justifyContent: "left"}}
          />
        </div> 
        <div className="content-wrapper">
            <div style={{ flex: 1, display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column",}}>
          <div style={{flex: 1, display: "flex",justifyContent: "center", alignItems: "center",flexDirection: "column", padding: "20px" }}>
            <img src={HeaderImage} alt="Header"
            style={{
            maxWidth: "62%",
            minWidth: "300px",
            height: "auto",
            }}
            />

            <div style ={{ position: "absolute"}}>
              <ThemeProvider theme={theme}>
                <ConnectionProvider endpoint={endpoint}>
                  <WalletProvider wallets={wallets} autoConnect>
                    <WalletDialogProvider>
                      
                        <Minter
                          candyMachineId={candyMachineId}
                          
                          connection={connection}
                          startDate={startDateSeed}
                          txTimeout={txTimeout}
                          rpcHost={rpcHost}
                        />
                      
                    </WalletDialogProvider>
                  </WalletProvider>
                </ConnectionProvider>
              </ThemeProvider>
            </div>
            </div>
          </div>
          </div>
          <Doods/>
          <TheDoods2/>
          <Perks/>
          <Roadmap/>
           <div><Roadmap2/></div>
           <TheDoods/>   
            <Team/>
          <Footer/>
          </div>
          

      </main>
  );
};

export default App;