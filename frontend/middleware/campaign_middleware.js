import { receiveCampaigns, REQUEST_CAMPAIGNS } from '../actions/campaign_actions';
import { fetchCampaigns } from '../util/campaign_api_util';

export default ({ getState, dispatch }) => next => action => {
  const campaignsSuccess = data => dispatch(receiveCampaigns(data));
  switch (action.type) {
    case REQUEST_CAMPAIGNS:
      fetchCampaigns(campaignsSuccess);
      return next(action);
    default:
      return next(action);
  }
};