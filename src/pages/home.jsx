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
      // text="Brief"
      iconF7="textbox"
      // iconIos="f7:envelope_fill"
      // iconAurora="f7:envelope_fill"
      // iconMd="material:email"
      iconSize="medium"
    >Brief</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-2"
      iconF7="doc_plaintext"
      // iconIos="f7:calendar_fill"
      // iconAurora="f7:calendar_fill"
      // iconMd="material:today"
      iconSize="medium"
    >Manuscript</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-3"
      iconF7="cod_plaintext"
      iconF7="music_mic"
      // iconIos="f7:calendar_fill"
      // iconAurora="f7:calendar_fill"
      // iconMd="material:today"
      iconSize="medium"
    >Voiceover</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-4"
      iconF7="photo"
      // iconIos="f7:cloud_upload_fill"
      // iconAurora="f7:cloud_upload_fill"
      // iconMd="material:file_upload"
      iconSize="medium"
    >Storyboard</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-5"
      iconF7="doc_richtext"
      // iconIos="f7:envelope_fill"
      // iconAurora="f7:envelope_fill"
      // iconMd="material:email"
      iconSize="medium"
    >Illustrations</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-6"
      iconF7="play_rectangle"
      // iconIos="f7:calendar_fill"
      // iconAurora="f7:calendar_fill"
      // iconMd="material:today"
      iconSize="medium"
    >Animation</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-7"
      iconF7="rocket"
      // iconIos="f7:cloud_upload_fill"
      // iconAurora="f7:cloud_upload_fill"
      // iconMd="material:file_upload"
      iconSize="medium"
    >Delivery</Link>
  </Toolbar>

  <Tabs>
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
