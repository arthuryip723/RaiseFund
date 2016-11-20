import { RECEIVE_CAMPAIGNS, RECEIVE_CAMPAIGN } from '../actions/campaign_actions';
import merge from 'lodash/merge';

const CampaignsReducer = (state = {}, action) => {
  // console.log(action);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGNS:
      // console.log(action.campaigns);
      return action.campaigns;
    case RECEIVE_CAMPAIGN:
      const newCampaign = {[action.campaign.id]: action.campaign};
      return merge({}, state, newCampaign);
    default:
      return state;
  }
};

export default CampaignsReducer;