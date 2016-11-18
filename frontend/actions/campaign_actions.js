export const REQUEST_CAMPAIGNS = 'REQUEST_CAMPAIGNS';
export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';

export const requestCampaigns = () => ({
  type: REQUEST_CAMPAIGNS,
});

export const receiveCampaigns = campaigns => ({
  type: RECEIVE_CAMPAIGNS,
  campaigns,
});