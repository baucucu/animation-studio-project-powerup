import React, {useEffect,useState} from 'react';
import { Page, Navbar, Block, BlockTitle, Button, Icon } from 'framework7-react';

// var Promise = TrelloPowerUp.Promise;


const Brief = ({isCompleted = Math.round(Math.random())}) => {
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
      {!isCompleted && <Block>
        <p>In order to start your project, we need to collect some information about your company, product, and your expectations. This will lay the ground for the whole project and will be shared with all creators working on the project.</p>
        <p>The questionnaire contains about 40 questions and takes roughly 30 minutes to respond to. Make sure you have gathered all involved parties on your side when answering the questions in the brief. The more detailed the better it is!
Click the link below to start the questionnaire.</p>
        <Button fill raised color="purple" onClick={openModal}>
          <Icon f7="textbox" style={{marginRight:8}} slot="icon"></Icon>
          Open brief questionnaire
        </Button>
      </Block>}
      {isCompleted && <Block>
        <p>You have already competed the brief questionnaire</p>
        <p>Answers</p>
        <p>...</p>
      </Block>}
    </>
  );
}

export default Brief;
