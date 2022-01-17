import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));

function toggleMenu() {
  const menu = document.getElementById("mobileNavContainer")!;
  menu.classList.toggle("open-menu");
  console.log("pressed");
}


export default function BasicGrid() {
  return (
      <Grid container spacing={4} style={{ height: "auto", }}>
        <Grid item xs={ 12 } md= {12}>
          <Item elevation={0} style={{backgroundColor: "#24305e", }}>
          <div id="mobileNavContainer" className="mobile-nav">
        <div className="mobile-nav-close-button" >
          <img src="/icons/close.svg" alt="" onClick={toggleMenu}/>
        </div>
        <ul>
          <li>
            <img className="mobile-nav-logo" src="/img//img/asset3.svg" alt="" />
          </li>
          <li>
            <a href="/#link1" onClick={toggleMenu}>
              Link 1
            </a>
          </li>
          <li>
            <a href="/#link2" onClick={toggleMenu}>
              Link 2
            </a>
          </li>
          <li>
            <a href="/#link3" onClick={toggleMenu}>
              Link 3
            </a>
          </li>
          <li>
            <a href="/#link4" onClick={toggleMenu}>
              Link 4
            </a>
          </li>
          <li>
            <div className="social-icons">
              <img className="nav-social" src="/icons/twitter.svg" alt="" />
              <img className="nav-social" src="/icons/discord.svg" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <div className="mobile-menu-button" onClick={toggleMenu}>
        <img src="/icons/menu.svg" alt="" />
      </div>
      <nav>
        <div className="nav-container">
          <img className="nav-logo" src="/img/asset3.svg" alt="" />
          <a className="hide-800" href="/#link1">
            Link 1
          </a>
          <a className="hide-800" href="/#link2">
            Link 2
          </a>
          <a className="hide-800" href="/#link3">
            Link 3
          </a>
          <a className="hide-800" href="/#link4">
            Link 4
          </a>
          <div className="social-icons hide-800">
            <img className="nav-social" src="/icons/twitter.svg" alt="" />
            <img className="nav-social" src="/icons/discord.svg" alt="" />
          </div>
        </div>
      </nav>
  
          </Item>
        </Grid>



        
      </Grid>
  );
}
