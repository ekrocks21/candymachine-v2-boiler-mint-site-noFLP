import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChillImage from "../images/1115.png";
import Portrait from "../images/surferdood.png";


const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));

function Chill() {
  // Import result is the URL of your image
  return <img src={ChillImage} alt="Dood Chills" />;
}

export default function BasicGrid() {
  return (
      <Grid container spacing={2} style={{ height: "auto", display: "flex", backgroundColor: "#384885", padding: "40px"}}>
        <Grid item xs={ 12 } md= {6}>
          <Item elevation={0} style={{backgroundColor: "#24305e", color: "#ffffff", minHeight:"250px", padding: "40px"}}>
            <h1 style={{ display: "flex", marginBottom: "0px", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              WELCOME TO THE </h1>
              <h1 style={{ display: "flex", marginTop: "0px", justifyContent: "left", textAlign: "left", fontStyle:"italic", fontSize: "24px"}}>
              GOOD DOOD GIVING CLUB </h1>
            <p className="text-secondary-color" style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px", paddingBottom: "15px", paddingTop: "15px"}}>

                GDGC is a collection of 5001 Good Dood NFTs - unique digital collectibles
                living on the Solana blockchain. Our initial mint will generate over $10m USD 
                and 10,000 gifts for St Jude patients. 
                
                


              </ p>

              <p className="text-secondary-color" style={{ display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px"}}>
              Your Good Dood Membership proves your generosity.
              Each quarter, 100 of you Good Doods will be rewarded with the gifts featured in your GDGC
              membership card.  
            </ p>    
            <a href=" https://docs.google.com/document/d/1gSUQF4KOXTVoA97vpnZ2Oy0A7HXB6kXx5pgGTVZxa3g/edit?usp=sharing" target="blank" style={{ color: "#a8cfe5", display: "flex", justifyContent: "left", textAlign: "justify", fontSize:"18px", paddingTop: "15px" }}>

Explore our giving model
    


</ a>   
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg= {3}>
          <Item elevation={0}  style={{backgroundColor: "#384885"}}>

          <img src={ChillImage} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
          }}
          />

          </Item>
        </Grid>

        <Grid item xs={12} md={6} lg= {3}>
          <Item elevation={0}  style={{backgroundColor: "#384885"}}>

          <img src={Portrait} alt="Logo"
            style={{
              maxWidth: "100%",
              minWidth: "100px",
              height: "auto",
          }}
          />

          </Item>
        </Grid>

        
      </Grid>
  );
}
