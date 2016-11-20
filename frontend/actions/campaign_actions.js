export const REQUEST_CAMPAIGNS = 'REQUEST_CAMPAIGNS';
export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';
export const REQUEST_CAMPAIGN = 'REQUEST_CAMPAIGN';
export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';

export const requestCampaigns = () => ({
  type: REQUEST_CAMPAIGNS,
});

export const receiveCampaigns = campaigns => ({
  type: RECEIVE_CAMPAIGNS,
  campaigns,
});

export const requestCampaign = id => ({
  type: REQUEST_CAMPAIGN,
  id,
});

export const receiveCampaign = campaign => ({
  type: RECEIVE_CAMPAIGN,
  campaign,
});
