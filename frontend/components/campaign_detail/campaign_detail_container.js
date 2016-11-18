import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import { requestCampaigns } from '../../actions/campaign_actions';
import CampaignDetail from './campaign_detail';

const mapStateToProps = (state, {params}) => {
  // return {campaigns: asArray(state)};
  console.log(state);
  // console.log(ownProps);
  return {campaignId: params.campaignId};
};

const mapDispatchToProps = dispatch => ({
  // requestCampaigns: () => dispatch(requestCampaigns())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampaignDetail);