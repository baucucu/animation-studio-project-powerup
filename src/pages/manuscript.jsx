import React, {useEffect,useState} from 'react';
import { Page, Navbar, Block, BlockTitle, Button, Icon } from 'framework7-react';

// var Promise = TrelloPowerUp.Promise;


const Manuscript = (props) => {
  
  const {state="active"} = props

  var t = TrelloPowerUp.iframe();

  const openModal = () => {
    t.modal({
      // the url to load for the iframe
      url: 'https://animation-studio-manuscript-app.vercel.app/',
      fullscreen: true,
      // optional function to be called if user closes modal (via `X` or escape, etc)
      callback: () => console.log('Goodbye.'),
      // optional title for header chrome
      title: 'Manuscript',
    })
  }
  return (
    <>
      {state === "locked" && <Block style={{paddingLeft:0}}>
        <img width="30%" src='../assets/locked-manuscript.gif'></img>
      </Block>}
      {state !== "locked" && <Block>
        <p>The script is the absolute core of the whole video project. Without a good script, it does not matter how lovely illustrations or good narrator voice we have.<p/>
        <p>Make sure you are delighted with the manuscript before accepting it. Once approved, we will not be able to make any changes while working on the other steps.</p>
        <p>Click the button below to review the manuscript.</p>
        </p>
        <Button fill raised color="purple" onClick={openModal}>
          <Icon f7="doc_plaintext" style={{marginRight:8}} slot="icon" size="small"></Icon>
          Open manuscript
        </Button>
      </Block>}
    </>
  );
}

export default Manuscript;
