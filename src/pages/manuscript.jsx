import React, {useEffect,useState} from 'react';
import { Page, Navbar, Block, BlockTitle, Button, Icon } from 'framework7-react';

// var Promise = TrelloPowerUp.Promise;


const Manuscript = () => {
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
      {!isCompleted && <Block>
        
        <Button fill raised color="purple" onClick={openModal}>
          <Icon f7="doc_plaintext" style={{marginRight:8}} slot="icon"></Icon>
          Open manuscript
        </Button>
      </Block>}
    </>
  );
}

export default Manuscript;
