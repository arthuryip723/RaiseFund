export const fetchCampaigns = (success) => {
  $.ajax({
    method: 'GET',
    url: 'api/campaigns',
    success
  });
};

export const fetchCampaign = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/campaigns/${id}`,
    success
  });
};