import React from 'react';
import { Page, Icon, Badge, Tabs, Toolbar, Link, Tab } from 'framework7-react';
import Brief from './brief'
import Manuscript from './manuscript'
import Voiceover from './voiceover'
import Storyboard from './storyboard'
import Illustrations from './illustrations'
import Animation from './animation'
import Delivery from './delivery'

const HomePage = (props) => {
  
  const {
    brief='completed',
    manuscript='active',
    voiceover='locked',
    illustration='locked',
    animation='locked',
    
  } = props
  const tabFontSize = '9px';
  
  return (
  <Page style={{backgroundColor: ''}}>
    <Toolbar tabbar labels position="top">
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-1"
      tabLinkActive
    >
      Brief
      <Icon f7="textbox" size="medium" slot="icon">
        <Badge color="green" style={{marginLeft:0}}>
          <Icon f7="checkmark_alt" size="small" ></Icon>
        </Badge>
      </Icon>
    </Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-2"
    >
      Manuscript
      <Icon f7="doc_plaintext" size="medium" slot="icon">
        <Badge color="deeporange" style={{marginLeft:0}}>
          <Icon f7="alarm" size="small" ></Icon>
        </Badge>
      </Icon>
    </Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-3"
    >
      Voiceover
      <Icon f7="music_mic" size="medium" slot="icon">
        <Badge color="gray" style={{marginLeft:0}}>
          <Icon f7="lock" size="small" ></Icon>
        </Badge>
      </Icon>
    </Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-4"
    >
      Storyboard
      <Icon f7="photo" size="medium" slot="icon">
        <Badge color="gray" style={{marginLeft:0}}>
          <Icon f7="lock" size="small" ></Icon>
        </Badge>
      </Icon>
    </Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-5"
    >
      Illustrations
      <Icon f7="doc_richtext" size="medium" slot="icon">
        <Badge color="gray" style={{marginLeft:0}}>
          <Icon f7="lock" size="small" ></Icon>
        </Badge>
      </Icon>
    </Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-6"
    >
      Animation
      <Icon f7="play_rectangle" size="medium" slot="icon">
        <Badge color="gray" style={{marginLeft:0}}>
          <Icon f7="lock" size="small" ></Icon>
        </Badge>
      </Icon>
    </Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-7"
    >
      Delivery
      <Icon f7="rocket" size="medium" slot="icon">
        <Badge color="gray" style={{marginLeft:0}}>
          <Icon f7="lock" size="small" ></Icon>
        </Badge>
      </Icon>
    </Link>
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
