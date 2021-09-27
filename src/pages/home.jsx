import React from 'react';
import { Page, Navbar, Block, BlockTitle, Tabs, Toolbar, Link, Tab } from 'framework7-react';
import Brief from './brief'
import Manuscript from './manuscript'
import Voiceover from './voiceover'
import Storyboard from './storyboard'
import Illustrations from './illustrations'
import Animation from './animation'
import Delivery from './delivery'

const HomePage = () => {
  const tabFontSize = '9px';
  
  return (
  <Page style={{backgroundColor: ''}}>
    <Toolbar tabbar labels position="top">
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-1"
      tabLinkActive
      iconF7="textbox"
      iconSize="medium"
    >Brief</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-2"
      iconF7="doc_plaintext"
      iconSize="medium"
    >Manuscript</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-3"
      iconF7="music_mic"
      iconSize="medium"
    >Voiceover</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-4"
      iconF7="photo"
      iconSize="medium"
    >Storyboard</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-5"
      iconF7="doc_richtext"
      iconSize="medium"
    >Illustrations</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-6"
      iconF7="play_rectangle"
      iconSize="medium"
    >Animation</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-7"
      iconF7="rocket"
      iconSize="medium"
    >Delivery</Link>
  </Toolbar>

  <Tabs animated>
    <Tab id="tab-1" className="page-content" tabActive>
      <Brief/>
    </Tab>
    <Tab id="tab-2" className="page-content">
      <Manuscript />
    </Tab>
    <Tab id="tab-3" className="page-content">
      <Voiceover/>
    </Tab>
    <Tab id="tab-4" className="page-content" >
      <Storyboard/>
    </Tab>
    <Tab id="tab-5" className="page-content" >
      <Illustrations/>
    </Tab>
    <Tab id="tab-6" className="page-content" >
      <Animation/>
    </Tab>
    <Tab id="tab-7" className="page-content" >
      <Delivery/>
    </Tab>
  </Tabs>
  </Page>

)};

export default HomePage;
