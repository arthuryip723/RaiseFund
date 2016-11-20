import { connect } from 'react-redux';
// import { asArray } from '../../reducers/selectors';
import { requestCampaign } from '../../actions/campaign_actions';
import { selectCampaign } from '../../reducers/selectors';
import CampaignDetail from './campaign_detail';

const mapStateToProps = (state, {params}) => {
  // return {campaigns: asArray(state)};
  // console.log(state);
  // console.log(ownProps);
  // return {campaignId: params.campaignId};
  const campaignId = parseInt(params.campaignId);
  const campaign = selectCampaign(state, campaignId);
  return {
    campaignId,
    campaign,
  };
};

const mapDispatchToProps = dispatch => ({
  // requestCampaigns: () => dispatch(requestCampaigns())
  requestCampaign: id => dispatch(requestCampaign(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampaignDetail);