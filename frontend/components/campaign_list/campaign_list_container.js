import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import { requestCampaigns } from '../../actions/campaign_actions';
import CampaignList from './campaign_list';

const mapStateToProps = (state, ownProps) => {
  return {campaigns: asArray(state)};
};

const mapDispatchToProps = dispatch => ({
  requestCampaigns: () => dispatch(requestCampaigns())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampaignList);