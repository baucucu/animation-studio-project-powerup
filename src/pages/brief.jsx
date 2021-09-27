import React, {useEffect,useState} from 'react';
import { Page, Navbar, Block, BlockTitle, Button, Icon } from 'framework7-react';

// var Promise = TrelloPowerUp.Promise;


const Brief = (props) => {
  const {isCompleted = true} = props
  var t = TrelloPowerUp.iframe();

  const openModal = () => {
    t.modal({
      // the url to load for the iframe
      url: 'https://studioflow.typeform.com/brief',
      fullscreen: true,
      // optional function to be called if user closes modal (via `X` or escape, etc)
      callback: () => console.log('Goodbye.'),
      // optional title for header chrome
      title: 'Brief',
    })
  }


  return (
    <>
      {/* <BlockTitle>Brief</BlockTitle> */}
      <Button fill raised color="purple" onClick={openModal}>
        <Icon f7="textbox" style={{marginRight:8}} slot="icon"></Icon>
        Open brief form
      </Button>
    </>
  );
}

export default Brief;
