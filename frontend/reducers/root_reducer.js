import {combineReducers} from 'redux';

import CampaignsReducer from './campaigns_reducer';

const RootReducer = combineReducers({
  campaigns: CampaignsReducer,
});

export default RootReducer;