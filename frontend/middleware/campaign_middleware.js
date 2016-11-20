import { receiveCampaigns, receiveCampaign, REQUEST_CAMPAIGNS, REQUEST_CAMPAIGN } from '../actions/campaign_actions';
import { fetchCampaigns, fetchCampaign } from '../util/campaign_api_util';

export default ({ getState, dispatch }) => next => action => {
  const campaignsSuccess = data => dispatch(receiveCampaigns(data));
  const campaignSuccess = data => dispatch(receiveCampaign(data));

  switch (action.type) {
    case REQUEST_CAMPAIGNS:
      fetchCampaigns(campaignsSuccess);
      return next(action);
    case REQUEST_CAMPAIGN:
      fetchCampaign(action.id, campaignSuccess);
      return next(action);
    default:
      return next(action);
  }
};