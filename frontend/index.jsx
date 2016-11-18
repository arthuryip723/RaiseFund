import React from 'react';
import ReactDOM from 'react-dom';
import CampaignDetail from './components/campaign_show/campaign_detail';

document.addEventListener('DOMContentLoaded', () => {
  let campaigns = [{name: 'campaign 1'}, {name: 'campaign 2'}];
  let campaignElems = campaigns.map(campaign => (<CampaignDetail campaign={campaign}></CampaignDetail>));
  ReactDOM.render(
    // <h1>Hello, world!</h1>,
    // <CampaignDetail campaign={{name: 'campaign 1'}}></CampaignDetail>,
    <div>{campaignElems}</div>,
    // <div>campaigns.map(campaign => (<CampaignDetail campaign={campaign}></CampaignDetail>))</div>,
    document.getElementById('root')
  );
});