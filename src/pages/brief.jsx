import React, {useEffect,useState} from 'react';
import { Page, Navbar, Block, BlockTitle, Button } from 'framework7-react';

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
      <Button onClick={openModal}>Open modal</Button>
    </>
  );
}

export default Brief;
