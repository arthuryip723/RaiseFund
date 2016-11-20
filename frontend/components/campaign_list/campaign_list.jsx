import React from 'react';
import CampaignSnippet from './campaign_snippet';

class CampaignList extends React.Component {
  render() {
    let campaignElems = this.props.campaigns.map(campaign => (<CampaignSnippet key={campaign.id} campaign={campaign}/>));
    return <div>{campaignElems}</div>;
  }

  componentDidMount() {
    this.props.requestCampaigns();
  }
}

export default CampaignList;