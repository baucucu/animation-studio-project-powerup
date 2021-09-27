import React, {useEffect,useState} from 'react';
import { Page, Navbar, Block, BlockTitle, Button } from 'framework7-react';

// var Promise = TrelloPowerUp.Promise;


const Brief = () => {
  var t = TrelloPowerUp.iframe();

  console.log("t: ", t)

  const openModal = (event,t) => {
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
      <BlockTitle>Brief</BlockTitle>
      <Button onClick={event=> {openModal(event, t)}}
      >
        Open modal
    </Button>
      {/* <Block>
        <iframe width="100%" height="500px"  src="https://studioflow.typeform.com/brief" title="Brief"></iframe>
      </Block> */}
    </>
  );
}

export default Brief;
