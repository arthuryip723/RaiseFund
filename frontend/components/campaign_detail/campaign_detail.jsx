import React from 'react';
import Sidebar from '../sidebar/sidebar';

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
    return <div>
            <Sidebar currentStep='datail'/>
            { this.props.campaign.name }
          </div>;
  }
}

export default CampaignDetail;