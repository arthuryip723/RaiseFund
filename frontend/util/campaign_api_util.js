export const fetchCampaigns = (success) => {
  console.log('before fetching...');
  $.ajax({
    method: 'GET',
    url: 'api/campaigns',
    success
  });
};