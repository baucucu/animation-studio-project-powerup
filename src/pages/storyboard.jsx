import React, {useEffect,useState} from 'react';
import { Page, Navbar, Block, BlockTitle, Button, Icon } from 'framework7-react';

// var Promise = TrelloPowerUp.Promise;


const Storyboard = () => {
  var t = TrelloPowerUp.iframe();

  const openModal = () => {
    t.modal({
      // the url to load for the iframe
      url: 'https://f.io/C5JnqyCi',
      fullscreen: true,
      // optional function to be called if user closes modal (via `X` or escape, etc)
      callback: () => console.log('Goodbye.'),
      // optional title for header chrome
      title: 'Storyboard',
    })
  }
  return (
    <>
      <Block>
        <Button fill raised color="purple" onClick={openModal}>
          <Icon f7="photo" style={{marginRight:8}} slot="icon" size="small"></Icon>
          Open storyboard
        </Button>
      </Block>
    </>
  );
}

export default Storyboard;
