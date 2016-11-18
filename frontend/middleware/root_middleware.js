import { applyMiddleware } from 'redux';

import CampaignMiddleware from './campaign_middleware';

const RootMiddleware = applyMiddleware(
  CampaignMiddleware,
);

export default RootMiddleware;