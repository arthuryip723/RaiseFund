import React from 'react';

// const CampaignDetail = ({campaignId}) => (
//   <div>
//     Campaign Detail: {campaignId}
//   </div>
// );

class CampaignDetail extends React.Component {
  componentDidMount() {
    this.props.requestCampaign(this.props.campaignId);
  }

  render() {
    return <div>{ this.props.campaign.name }</div>
  }
}

export default CampaignDetail;