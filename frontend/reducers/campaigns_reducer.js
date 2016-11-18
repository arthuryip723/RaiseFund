import { RECEIVE_CAMPAIGNS } from '../actions/campaign_actions';

const CampaignsReducer = (state = {}, action) => {
  // console.log(action);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGNS:
      console.log(action.campaigns);
      return action.campaigns;
    default:
      return state;
  }
};

export default CampaignsReducer;