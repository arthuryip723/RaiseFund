import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import Root from './components/root';
import configureStore from './store/store';

import CampaignDetail from './components/campaign_show/campaign_detail';

document.addEventListener('DOMContentLoaded', () => {
  let campaigns = [{name: 'campaign 1'}, {name: 'campaign 2'}];
  let campaignElems = campaigns.map(campaign => (<CampaignDetail campaign={campaign}></CampaignDetail>));
  let store = configureStore();
  ReactDOM.render(
    // <h1>Hello, world!</h1>,
    // <CampaignDetail campaign={{name: 'campaign 1'}}></CampaignDetail>,
    // <Provider store={store}><div>{campaignElems}</div></Provider>,
    // <div>campaigns.map(campaign => (<CampaignDetail campaign={campaign}></CampaignDetail>))</div>,
    <Root store={store}/>,
    document.getElementById('root')
  );
});