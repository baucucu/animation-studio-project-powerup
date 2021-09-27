import React from 'react';
import { Page, Navbar, Block, BlockTitle, Tabs, Toolbar, Link, Tab } from 'framework7-react';

const HomePage = () => {
  const tabFontSize = '9px';
  
  return (
  <Page>
    <Toolbar tabbar labels position="top">
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-1"
      tabLinkActive
      // text="Brief"
      iconIos="f7:envelope_fill"
      iconAurora="f7:envelope_fill"
      iconMd="material:email"
      iconSize="medium"
    >Brief</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-2"
      iconIos="f7:calendar_fill"
      iconAurora="f7:calendar_fill"
      iconMd="material:today"
      iconSize="medium"
    >Manuscript</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-3"
      iconIos="f7:calendar_fill"
      iconAurora="f7:calendar_fill"
      iconMd="material:today"
      iconSize="medium"
    >Voiceover</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-4"
      iconIos="f7:cloud_upload_fill"
      iconAurora="f7:cloud_upload_fill"
      iconMd="material:file_upload"
      iconSize="medium"
    >Storyboard</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-5"
      iconIos="f7:envelope_fill"
      iconAurora="f7:envelope_fill"
      iconMd="material:email"
      iconSize="medium"
    >Illustrations</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-6"
      iconIos="f7:calendar_fill"
      iconAurora="f7:calendar_fill"
      iconMd="material:today"
      iconSize="medium"
    >Animation</Link>
    <Link
      style={{fontSize:tabFontSize}}
      tabLink="#tab-7"
      iconIos="f7:cloud_upload_fill"
      iconAurora="f7:cloud_upload_fill"
      iconMd="material:file_upload"
      iconSize="medium"
    >Delivery</Link>
  </Toolbar>

  <Tabs>
    <Tab id="tab-1" className="page-content" tabActive>
      <Block>
        <p>Brief</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
          facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
          suscipit temporibus sequi iure ad laboriosam accusamus?
        </p>
        
      </Block>
    </Tab>
    <Tab id="tab-2" className="page-content">
      <Block>
        <p>Manuscript</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
          facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
          suscipit temporibus sequi iure ad laboriosam accusamus?
        </p>
       
      </Block>
    </Tab>
    <Tab id="tab-3" className="page-content">
      <Block>
        <p>Voiceover</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
          facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
          suscipit temporibus sequi iure ad laboriosam accusamus?
        </p>
        
      </Block>
    </Tab>
    <Tab id="tab-4" className="page-content" >
      <Block>
        <p>Storyboard</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
          facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
          suscipit temporibus sequi iure ad laboriosam accusamus?
        </p>
      </Block>
    </Tab>
    <Tab id="tab-5" className="page-content" >
      <Block>
        <p>Illustrations</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
          facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
          suscipit temporibus sequi iure ad laboriosam accusamus?
        </p>
      </Block>
    </Tab>
    <Tab id="tab-6" className="page-content" >
      <Block>
        <p>Animation</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
          facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
          suscipit temporibus sequi iure ad laboriosam accusamus?
        </p>
      </Block>
    </Tab>
    <Tab id="tab-7" className="page-content" >
      <Block>
        <p>Delivery</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae
          facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo
          suscipit temporibus sequi iure ad laboriosam accusamus?
        </p>
      </Block>
    </Tab>
  </Tabs>
  </Page>

)};

export default HomePage;
